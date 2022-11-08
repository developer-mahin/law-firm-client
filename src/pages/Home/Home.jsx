import React, { useEffect, useState } from "react";
import Services from "../Shared/Services/Services";
import About from "./AboutUs/About";
import Banner from "./Banner/Banner";
import Slider from "./Slider/Slider";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      });
  }, []);

  return (
    <div className="">
      {/* <Slider></Slider> */}
      <Banner></Banner>
      <About></About>
      <div className="container mx-auto lg:py-16 py-3">
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
    </div>
  );
};

export default Home;
