import React from "react";

const CommentSection = () => {
  return (
    <div className="lg:py-20 py-10">
      <h2 className="text-2xl font-semibold text-gray-800">Leave a Reply</h2>
      <p>
        Your email address will not be published. Required fields are marked
      </p>
      <form className="pt-10">
        <textarea
          name=""
          className="w-full py-2 px-6 my-2 border outline-none rounded-md lg:h-48 lg-20"
          placeholder="Write A Message"
        ></textarea>
        <input
          type="text"
          name=""
          className="w-full py-2 px-6 my-2 border outline-none rounded-md"
          id=""
          placeholder="Your name"
        />
        <input
          type="email"
          name=""
          className="w-full py-2 px-6 my-2 border outline-none rounded-md"
          id=""
          placeholder="Your Email Address"
        />
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 font-medium mt-3"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
