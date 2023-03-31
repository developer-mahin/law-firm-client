import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const CommentSection = ({ _id, refetch }) => {
  const [loading, setLoading] = useState(false);
  const {user} = useContext(AuthContext)
  const handleSubmitComment = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const name = form.name.value;
    const email = form.email.value;

    const commentInfo = {
      profileId: _id,
      message,
      name,
      email,
      photo: user?.photoURL
    };

    fetch("https://law-firm-server.vercel.app/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("successfully comment submitted");
          refetch();
          form.reset()
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="lg:py-20 py-10">
      <h2 className="text-2xl font-semibold text-gray-800">Leave a Reply</h2>
      <p>
        Your email address will not be published. Required fields are marked
      </p>
      <form onSubmit={handleSubmitComment} className="pt-10">
        <textarea
          name="message"
          className="w-full py-2 px-6 my-2 border outline-none rounded-md lg:h-48 lg-20"
          placeholder="Write A Message"
          required
        ></textarea>
        <input
          type="text"
          name="name"
          className="w-full py-2 px-6 my-2 border outline-none rounded-md"
          id=""
          placeholder="Your name"
          required
        />
        <input
          type="email"
          name="email"
          className="w-full py-2 px-6 my-2 border outline-none rounded-md"
          id=""
          placeholder="Your Email Address"
          required
        />
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 font-medium mt-3"
        >
          {loading ? "Loading..." : "Submit Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
