import React, { useContext, useEffect, useReducer, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import PublicReview from "../Shared/PublicReview/PublicReview";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData().data;
  useTitle("Add Review")
  const [reviews, setReviews] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const { title, _id } = service;
  const navigate = useNavigate();


  const handlePostReview = (event) => {

    event.preventDefault();
    const form = event.target;
    const textArea = form.review.value;
    const date = new Date().toString().slice(0, 21)


    const reviewInfo = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      review: textArea,
      productId: _id,
      serviceTitle: title,
      time: date
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review Added Successfully");
        navigate(`/services/${_id}`)
        forceUpdate();
      });
    
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
      });
  }, [_id, ignored]);

  return (
    <div className="container mx-auto py-6">
        <div className="text-center py-8">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            ADD REVIEW
          </p>
          <h2 className="text-3xl  font-bold uppercase">
            Please Add your review
          </h2>
        </div>
      <form onSubmit={handlePostReview}>
        <textarea
          name="review"
          id=""
          cols="30"
          rows="4"
          placeholder="Write your review..."
          className="lg:w-1/2 w-full rounded shadow my-3"
        ></textarea>
        <br />
        <button
          className="bg-cyan-400 hover:bg-cyan-500 rounded-full px-8 py-2 font-semibold"
          type="submit"
        >
          Review
        </button>
      </form>
      <div>
        {
          <div className="grid lg:grid-cols-2">
            {reviews.map((reviewInfo) => (
              <PublicReview
                key={reviewInfo._id}
                reviewInfo={reviewInfo}
              ></PublicReview>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Reviews;
