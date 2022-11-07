import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  console.log(service);
  const { picture, title, description, _id } = service;

  return (
    <div className="max-w-sm lg:py-16 py-4 container mx-auto">
      <Card className="p-0">
        <img src={picture} className="h-56" alt="" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description && (
            <>
              {" "}
              {description.slice(0, 90) + "..."}{" "}
              <Link to={"/"} className="text-blue-700 hover:underline">
                Reade More
              </Link>{" "}
            </>
          )}{" "}
        </p>
      </Card>
    </div>
  );
};

export default Services;
