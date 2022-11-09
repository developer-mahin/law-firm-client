import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);

  const handlePostReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const textArea = form.review.value;
    // console.log(textArea);

    const reviewInfo = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      review: textArea,
      productId: _id,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  };

  const service = useLoaderData().data;
  const { picture, title, description, _id } = service;
  return (
    <div>
      <div className="container mx-auto">
        <div className="">
          <img
            src={picture}
            className="w-full lg:h-[600px] lg-[300px]"
            alt=""
          />
        </div>
        <div className="px-4 md:px-0 py-2">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="container mx-auto">
        <form action="" onSubmit={handlePostReview}>
          <textarea
            name="review"
            id=""
            cols="30"
            rows="10"
            className="w-full"
          ></textarea>
          <button
            className="bg-cyan-400 hover:bg-cyan-500 rounded-full px-8 py-2 font-semibold"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
