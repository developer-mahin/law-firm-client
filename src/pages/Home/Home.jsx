import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Services from "../Shared/Services/Services";
import About from "./AboutUs/About";
import Banner from "./Banner/Banner";
import ChooseClient from "./ChooseClient/ChooseClient";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle("Home")

  useEffect(() => {
    fetch("https://law-firm-server.vercel.app/services")
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
      <div className="container mx-auto py-16">
        <div className="text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            SERVICES
          </p>
          <h2 className="text-3xl  font-bold uppercase">
            we provide our services in the following sectors​
          </h2>
        </div>
        <div>
          <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Services key={service._id} service={service}></Services>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="py-2 px-8 bg-cyan-400 hover:bg-cyan-500 rounded-full font-semibold"
            >
              See All
            </Link>
          </div>
        </div>
      </div>
      <ChooseClient></ChooseClient>
    </div>
  );
};

export default Home;
