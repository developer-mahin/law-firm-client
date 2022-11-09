import { Rating } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import PublicReview from "../../ServicesPage/PublicReview/PublicReview";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData().data;
  const [reviews, setReviews] = useState([]);
  const { picture, title, description, _id } = service;

  const handlePostReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const textArea = form.review.value;
    // console.log(textArea);

    const reviewInfo = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      review: textArea,
      productId: _id,
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
        console.log(data.data);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
        console.log(data.data);
      });
  }, [_id]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="">
          <img
            src={picture}
            className="w-full lg:h-[600px] lg-[300px]"
            alt=""
          />
        </div>
        <div className="px-4 md:px-0 py-2">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="py-5">
        {user?.uid ? (
          <>
            {" "}
            <div className="container mx-auto">
              <form onSubmit={handlePostReview}>
                <textarea
                  name="review"
                  id=""
                  cols="30"
                  rows="10"
                  className="w-full"
                ></textarea>
                <button
                  className="bg-cyan-400 hover:bg-cyan-500 rounded-full px-8 py-2 font-semibold"
                  type="submit"
                >
                  Post
                </button>
              </form>

              <div className="py-4">
                <React.Fragment>
                  <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      4.95 out of 5
                    </p>
                  </Rating>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    1,745 global ratings
                  </p>
                  <Rating.Advanced className="my-3" percentFilled={95}>5 star</Rating.Advanced>
                  <Rating.Advanced className="my-3" percentFilled={3}>4 star</Rating.Advanced>
                  <Rating.Advanced className="my-3" percentFilled={1}>3 star</Rating.Advanced>
                  <Rating.Advanced className="my-3" percentFilled={1}>2 star</Rating.Advanced>
                  <Rating.Advanced className="my-3" percentFilled={0}>1 star</Rating.Advanced>
                </React.Fragment>
                <div className="grid lg:grid-cols-2">
                  {reviews.map((review) => (
                    <PublicReview
                      key={review._id}
                      review={review}
                    ></PublicReview>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center capitalize text-cyan-500">
              if you want to see the review then{" "}
              <Link className="underline text-blue-600" to="/login">
                login
              </Link>{" "}
              first
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
