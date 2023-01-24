import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import BigSpinner from "../../../components/BigSpinner";
import useTitle from "../../../hooks/useTitle";
import CommentSection from "./CommentSection";
import DisplayComment from "./DisplayComment";

const ProfileDetails = () => {
  const data = useLoaderData();
  const {
    _id,
    name,
    img,
    details,
    degrees,
    address,
    monday_friday,
    saturday,
    specialty,
    sunday,
  } = data;
  const navigation = useNavigation();
  useTitle(data?.name);

  const { data: allComments = [], refetch } = useQuery({
    queryKey: ["All Comments"],
    queryFn: async () => {
      const res = await fetch(`https://law-firm-server.vercel.app/comments/${_id}`);
      const data = await res.json();
      return data;
    },
  });

  console.log(allComments);

  if (navigation.state === "loading") {
    return <BigSpinner></BigSpinner>;
  }

  return (
    <div className="">
      <h2 className="py-8 px-12 lg:text-3xl text-2xl font-semibold shadow-lg">
        {name}
      </h2>
      <div className="lg:w-[1000px] w-full mx-auto px-3 grid lg:grid-cols-6 grid-cols-1 gap-8 lg:py-12 py-6">
        <div className="lg:col-span-4">
          <img src={img} className="w-full h-96 object-cover" alt="" />
          <p className="lg:py-6 py-3 font-medium text-gray-600">{details}</p>
        </div>
        <div className="border bg-gray-100 bg-opacity-10 lg:col-span-2 lg:p-6 p-3">
          <h2 className="text-2xl font-semibold text-gray-800 pb-4">
            Services Details
          </h2>
          <div>
            <p className="flex justify-between items-center my-2 border-b py-1">
              Specialty <span>{specialty}</span>
            </p>
            <p className="flex justify-between items-center my-2 border-b py-1">
              Degrees <span>{degrees}</span>
            </p>
            <p className="flex justify-between items-center my-2 border-b py-1">
              Address <span>{address}</span>
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 lg:py-8 py-4">
            Open Hours
          </h2>
          <div>
            <p className="flex justify-between items-center my-2 border-b py-1">
              Monday - Friday <span>{monday_friday}</span>
            </p>
            <p className="flex justify-between items-center my-2 border-b py-1">
              Saturday <span>{saturday}</span>
            </p>
            <p className="flex justify-between items-center my-2 border-b py-1">
              Sunday <span>{sunday}</span>
            </p>
          </div>
        </div>
      </div>
      <>
        <h2 className="text-2xl text-center lg:py-10 py-5">Comments</h2>
        <div className="lg:w-[1000px] w-full mx-auto px-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {allComments.map((comment) => (
            <DisplayComment
              key={comment._id}
              comment={comment}
            ></DisplayComment>
          ))}
        </div>
      </>
      <div className="lg:w-[1000px] w-full mx-auto px-3">
        <CommentSection _id={_id} refetch={refetch}></CommentSection>
      </div>
    </div>
  );
};

export default ProfileDetails;
