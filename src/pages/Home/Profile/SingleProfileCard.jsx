import React from "react";
import { Link } from "react-router-dom";

const SingleProfileCard = ({ profile }) => {
  const { name, img, details, degrees, _id } = profile;

  return (
    <div className="border shadow-md rounded-lg">
      <div className="">
        <div className="mb-3">
          <img src={img} className="" alt="" />
        </div>
        <div className="border shadow rounded-md px-4 py-2 w-4/5 mx-auto text-center bg-white">
          <h2 className="text-xl">{name}</h2>
          <p className="text-[#ea2e0d]">{degrees}</p>
        </div>
      </div>
      <div className="mt-3 px-3 pb-4">
        <p>{details && details.slice(0, 150) + "..."}</p>
        <div className="my-4 text-center">
          <Link
            to={`/profile_details/${_id}`}
            className="px-8 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 font-medium"
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProfileCard;
