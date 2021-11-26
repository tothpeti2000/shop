import React from "react";
import { RatingView } from "react-simple-star-rating";
import IRatingProps from "../../interfaces/IRatingProps";

const RatingStars = (props: IRatingProps) => {
  return <RatingView ratingValue={props.ratingValue} />;
};

export default RatingStars;
