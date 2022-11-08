import React from "react";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  console.log(service);
  const { picture, title, description, _id } = service;

  return (
    <div className="mt-8 px-2 md:px-0">
      <div className="duration-300 transform bg-white border shadow-sm hover:-translate-y-2 rounded-lg pb-4 h-[400px]">
        <div className="flex items-center justify-center h-56 mb-4">
          <img src={picture} className="h-full w-full rounded-lg" alt="" />
        </div>
        <div className="px-3">
          <h2 className="mb-2 font-semibold text-2xl py-2 leading-5">
            {title}
          </h2>
          <p className="text-gray-900">
            {description && (
              <>
                {description.slice(0, 100)}{" "}
                <>
                  <Link
                    to={`/services/${_id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Read More
                  </Link>
                </>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
