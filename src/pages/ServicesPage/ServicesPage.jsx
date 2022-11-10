import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import Services from "../Shared/Services/Services";

const ServicesPage = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  useTitle("Services");

  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        if (services.length > 0) {
          setLoading(false);
        }
      });
  }, [services.length]);

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

      <div className="">
        {loading ? (
          <>
            <div className="flex justify-center items-center h-[500px]">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Services key={service._id} service={service}></Services>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
