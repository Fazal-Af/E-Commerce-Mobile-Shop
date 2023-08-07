import { Rating } from "@material-ui/lab";
import React from "react";
// import ReactStars from "react-rating-stars-component"
import Appstore from "../../images/reviewimg.png";
import Loader from "../layout/Loader/Loader";
// import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    // size: "large",
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
      <div className="reviewCard">
        {/* <img src={profilePng} alt="User" /> */}
        <img src={Appstore} alt="User" />
        <p>{review.name}</p>
        <Rating {...options} />
        <span className="reviewCardComment">{review.comment}</span>
      </div>
    </>
  );
};

export default ReviewCard;
