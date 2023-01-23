import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import BigSpinner from "../../components/BigSpinner";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import AllMyReview from "./AllMyReview/AllMyReview";

const MyReviewPage = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [myReviews, setMyReviews] = useState([]);
  const [updateReview, setUpdateReview] = useState("");
  useTitle("My review");

  useEffect(() => {
    // setLoading(true);
    fetch(`https://law-firm-server.vercel.app/review?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT-Token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOutUser()
            .then(() => {})
            .catch((err) => {
              console.error(err);
            });
        }
        return res.json();
      })
      .then((data) => {
        // if (data.success) {
        setMyReviews(data.data);
        setLoading(false);
        // }
      })
      .catch((err) => {
        toast.success(err.message);
        setLoading(false);
      });
  }, [user?.email, myReviews, logOutUser]);

  const handleDeleteReview = (_id) => {
    const proceed = window.confirm("Are your sure to delete this review");
    if (proceed) {
      fetch(`https://law-firm-server.vercel.app/review/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Successfully delete the review");
            const remaining = myReviews.filter(
              (myReview) => myReview._id !== _id
            );
            setMyReviews(remaining);
          }
        });
    }
  };

  const handleUpdateReview = (_id) => {
    fetch(`https://law-firm-server.vercel.app/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ review: updateReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully update the review");
        if (data.success) {
          const remaining = myReviews.filter(
            (myReview) => myReview._id !== _id
          );
          setMyReviews(remaining);
        }
      });
  };

  return (
    <>
      {!loading ? (
        <>
          <div className="container mx-auto py-8">
            <div className="text-center py-8">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                MY REVIEWS
              </p>
              <h2 className="text-3xl  font-bold uppercase">All my reviews</h2>
            </div>
            <div>
              {myReviews.length === 0 ? (
                <>
                  <h2 className="lg:text-5xl text-3xl text-cyan-500 text-center font-bold">
                    No reviews were added
                  </h2>
                </>
              ) : (
                <>
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {myReviews.map((reviewInfo) => (
                      <AllMyReview
                        setUpdateReview={setUpdateReview}
                        key={reviewInfo._id}
                        reviewInfo={reviewInfo}
                        handleUpdateReview={handleUpdateReview}
                        handleDeleteReview={handleDeleteReview}
                      ></AllMyReview>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <BigSpinner></BigSpinner>
        </>
      )}
    </>
  );
};

export default MyReviewPage;
