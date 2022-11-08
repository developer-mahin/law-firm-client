import React from "react";

const ChooseClient = () => {
  return (
    <div className="relative ">
      <img
        src="https://i.ibb.co/cvQNW2k/Bangladesh-High-Court-1-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-52">
          <div className="lg:w-1/2 w-full mx-auto text-center">
            <h2 className="text-white text-3xl font-bold my-4">
              WHY CLIENTS CHOOSE US?
            </h2>
            <p className="text-white text-lg">
              We are always try our best to find out what is the desired outcome
              of the clients from the services we are rendering to them ; and we
              plan our course of action to meet the desired goal of the client.
              Bangladesh Law Firm and our client walk in the same path and try
              together to reach the common goal.
            </p>
            <div className="flex justify-between items-center mt-5 flex-col lg:flex-row">
              <div className="">
                <h2 className="text-5xl font-bold text-center text-[#C89A69]">
                  500 +
                </h2>
                <p className="text-3xl font-bold text-white">
                  Client Consultations
                </p>
              </div>
              <div className="text-white lg:mt-0 mt-3">
                <h2 className="text-5xl font-bold text-center text-[#C89A69]">
                  95 %
                </h2>
                <p className="text-3xl font-bold text-white">
                  {" "}
                  Successful Cases
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseClient;
