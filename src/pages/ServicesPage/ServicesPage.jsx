import React from "react";
import { useLoaderData } from "react-router-dom";
import Services from "../Shared/Services/Services";

const ServicesPage = () => {
  const services = useLoaderData().data;

  return (
    <div className="container mx-auto lg:mt-8 mt-2">
      <div className="text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
          SERVICES
        </p>
        <h2 className="text-3xl capitalize font-bold">
          we provide our services in the following sectors​
        </h2>
      </div>

      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Services key={service._id} service={service}></Services>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
