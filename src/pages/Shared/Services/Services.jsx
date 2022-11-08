import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaStar, FaStarHalf} from "react-icons/fa";

const Services = ({ service }) => {
  const { picture, title, description, _id, price, rating } = service;

  return (
    <div className="mt-8 px-2 md:px-0">
      <div className="duration-300 transform bg-white border shadow-sm hover:-translate-y-2 rounded-lg pb-4 h-[450px]">
        <div className="flex items-center justify-center h-56 mb-4">
          <PhotoProvider>
            <PhotoView src={picture}>
              <img src={picture} className="h-full w-full rounded-lg" alt="" />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="px-3">
          <h2 className="mb-2 font-semibold text-2xl py-2 leading-5">
            {title}
          </h2>

          <p className="text-gray-900">
            {description && <>{description.slice(0, 100) + "..."} </>}
          </p>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold mb-4">
              <span className="text-cyan-600 text-xl">${price}</span>{" "}
            </p>
            <div>
              <div className="flex justify-center items-center">
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
                <FaStarHalf className="text-yellow-300"></FaStarHalf>
                <span className="font-semibold">{rating}</span>
              </div>
            </div>
          </div>
          <Link
            to={`/services/${_id}`}
            className=" hover:underline bg-cyan-400 hover:bg-cyan-500 px-8 py-2 rounded-full text-black"
          >
            Read More
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Services;
