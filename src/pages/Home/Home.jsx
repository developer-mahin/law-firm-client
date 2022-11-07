import React, { useEffect, useState } from "react";
import About from "./AboutUs/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
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
    <div>
      {/* <Slider></Slider> */}
      <Banner></Banner>
      <About></About>
      <div className="flex justify-between items-center">
        {services.map((service) => (
          <Services key={service._id} service={service}></Services>
        ))}
      </div>
    </div>
  );
};

export default Home;
