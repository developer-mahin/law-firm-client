import React, { useContext, useEffect, useReducer, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import AllMyReview from "./AllMyReview/AllMyReview";

const MyReviewPage = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data.data));
  }, [user?.email, ignored]);

  const handleDeleteReview = (_id) => {
    const proceed = window.confirm("Are your sure to delete this review");
    if (proceed) {
      fetch(`http://localhost:5000/review/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Successfully delete the review");
            const remaining = myReviews.filter(
              (myReview) => myReview._id !== _id
            );
            setMyReviews(remaining)
          }
        });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="text-center py-8">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
          MY REVIEWS
        </p>
        <h2 className="text-3xl  font-bold uppercase">All my reviews</h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {myReviews.map((reviewInfo) => (
          <AllMyReview
          forceUpdate={forceUpdate}
            key={reviewInfo._id}
            reviewInfo={reviewInfo}
            handleDeleteReview={handleDeleteReview}
          ></AllMyReview>
        ))}
      </div>
    </div>
  );
};

export default MyReviewPage;
