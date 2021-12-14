import React from "react";
import { RatingView } from "react-simple-star-rating";

interface IRatingProps {
  ratingValue: number;
}

const RatingStars = (props: IRatingProps) => {
  return <RatingView ratingValue={props.ratingValue} />;
};

export default RatingStars;
