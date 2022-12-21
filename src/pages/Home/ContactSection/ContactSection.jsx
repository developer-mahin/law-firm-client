import React from "react";
import { toast } from "react-hot-toast";

const ContactSection = () => {
  const contactBg = {
    backgroundImage: `url(${"https://i.ibb.co/wMgGC7y/istockphoto-1290914940-612x612-1.jpg"})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "71px 0px",
  };

  const handleContact = (event) => {
    event.preventDefault();
    toast.success("Successfully submit");
  };
  return (
    <div className="lg:pt-20 pt-6">
      <div className="text-center">
        <div className="">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Contact Us
          </p>
        </div>
        <h2 className="text-3xl font-bold uppercase lg:pb-8 pb-3">
          Stay connected with us
        </h2>
      </div>
      <div style={contactBg}>
        <div className="lg:w-1/3 w-full mx-auto px-3 lg:px-0">
          <form onSubmit={handleContact}>
            <input
              className="w-full  py-3 px-6 rounded-xl my-4 border-2"
              placeholder="Email Address"
              type="email"
              name="email"
              id=""
              required
            />
            <input
              className="w-full  py-3 px-6 rounded-xl my-4 border-2"
              placeholder="Subject"
              type="text"
              name="text"
              id=""
              required
            />
            <textarea
              className="w-full py-3 px-6 rounded-xl my-4 border-2"
              placeholder="Your message"
              name="message"
              id=""
              required
              cols="30"
              rows="3"
            ></textarea>
            <div className="text-center">
              <button className="px-8 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
