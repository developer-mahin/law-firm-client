import { Rating } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineMinus } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import PublicReview from "../../Shared/PublicReview/PublicReview";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const service = useLoaderData().data;
  const [reviews, setReviews] = useState([]);
  const { picture, title, description, _id } = service;
  useTitle("Service Details");

  const handlePostReview = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const textArea = form.review.value;
    const date = new Date().toString().slice(0, 21);

    const reviewInfo = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      review: textArea,
      productId: _id,
      serviceTitle: title,
      time: date,
    };

    fetch("https://law-firm-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review Added Successfully");
        form.reset();
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://law-firm-server.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
      });
  }, [_id, reviews]);

  const serviceDetails = {
    backgroundImage: `linear-gradient(#1e2b47bf, #1e2b47bf), url(${picture})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "71px 0px",
  };

  return (
    <div>
      <div
        className="lg:h-[500px] flex justify-center items-center"
        style={serviceDetails}
      >
        <h2 className="lg:text-5xl text-2xl text-white font-semibold">
          {title}
        </h2>
      </div>

      <div className="container mx-auto lg:py-24 py-10">
        <div className="px-4 md:px-0 py-2 grid lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="lg:py-10 py-5 flex justify-center items-center">
              <AiOutlineMinus className="lg:text-6xl text-4xl font-bold" />
              <span className="lg:text-5xl text-3xl font-semibold">
                Service Details
              </span>
            </h2>
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container mx-auto px-3 md:px-0">
          <form onSubmit={handlePostReview}>
            <textarea
              name="review"
              id=""
              cols="30"
              rows="4"
              placeholder="Write your review..."
              className="lg:w-1/2 w-full rounded shadow my-3"
              required
            ></textarea>
            <br />
            <button
              className="bg-cyan-400 hover:bg-cyan-500 rounded-full px-8 py-2 font-semibold"
              type="submit"
            >
              {loading ? "Loading..." : "Review"}
            </button>
          </form>

          <div className="py-4">
            <React.Fragment>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <FaStarHalfAlt className="text-yellow-400"></FaStarHalfAlt>
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95 out of 5
                </p>
              </Rating>
              <Rating.Advanced className="my-3" percentFilled={95}>
                5 star
              </Rating.Advanced>
              <Rating.Advanced className="my-3" percentFilled={3}>
                4 star
              </Rating.Advanced>
              <Rating.Advanced className="my-3" percentFilled={1}>
                3 star
              </Rating.Advanced>
              <Rating.Advanced className="my-3" percentFilled={1}>
                2 star
              </Rating.Advanced>
              <Rating.Advanced className="my-3" percentFilled={0}>
                1 star
              </Rating.Advanced>
            </React.Fragment>

            <div className="container mx-auto">
              {reviews.map((reviewInfo) => (
                <PublicReview
                  key={reviewInfo._id}
                  reviewInfo={reviewInfo}
                ></PublicReview>
              ))}
            </div>
          </div>
        </div>
        {/* {user?.uid ? (
          <>
            {" "}
            
          </>
         ) : (
           <>
             <h2 className="text-3xl font-bold text-center capitalize text-cyan-500">
               Please{" "}
               <Link
                 className="underline text-blue-600"
                 to={`/add_review/${_id}`}
               >
                 login
               </Link>{" "}
               To add a review
             </h2>
           </>
         )} */}
      </div>
    </div>
  );
};

export default ServiceDetails;
