import React from "react";

const About = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
          <div className="max-w-xl mb-6">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              ABOUT US
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              WHO AM I?
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              I am a full-service lawyer in Bangladesh with adequate knowledge,
              expertise, lawyers, consultants, and logistics to undertake any
              legal, para-legal, or related service. We are experts in any
              litigation i.e. cases before any court of law be that Bangladesh
              Supreme Court, Judges Court, Labour Court, Magistrates Courts etc.
              Practice areas include Litigation, HR & Employment issues,
              Divorce, family law issues, Child custody and Adoption, Banking &
              Finance, Company matters, Admiralty, etc.
              <br />
              The specialty of our firm is that we always try to find out what
              is the desired outcome of the clients from the services we are
              rendering to them by the best advocate in Bangladesh, and we plan
              our course of action to meet the desired goal of the client and
              thus we i.e. Bangladesh Law Firm and our client walk in the same
              path and try together to reach the common goal.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://vannormanlaw.com/wp-content/uploads/2021/03/RuleofLaw.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://www.sharda.ac.in/blog/wp-content/uploads/2017/08/4-Main-Types-of-Law-Which-One-Is-the-Best-For-You.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://i.ibb.co/GvtQr6j/law-1-1.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
