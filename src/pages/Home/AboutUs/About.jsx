import React from "react";

const About = () => {
  return (
    <div className="py-16">
      <p className="text-center font-semibold font-mono text-gray-400">
        ABOUT US
      </p>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://i.ibb.co/GvtQr6j/law-1-1.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
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
              thus we i.e. Bangladesh Law Firm and our
              client walk in the same path and try together to reach the common
              goal.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
