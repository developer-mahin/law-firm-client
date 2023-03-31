import React from "react";

const PublicReview = ({ reviewInfo }) => {
  const { name, photo, review, time } = reviewInfo;

  return (
    <div className="lg:px-10 px-3 lg:py-12 py-4 my-12 bg-sky-300/30 rounded-md xl:skew-x-[-12deg]">
      <div className="border-b-2 py-1 mb-4 lg:flex items-center">
        <div className="lg:w-1/6">
          <img
            src={photo}
            className="w-32 h-32 rounded-full object-cover"
            alt=""
          />
        </div>
        <div className="w-10/12">
          <h2 className="text-lg font-semibold underline decoration-double">
            {name}
          </h2>
          <p className="mb-2">{time}</p>
          <p className="text-lg">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default PublicReview;
