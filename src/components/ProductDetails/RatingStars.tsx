import React from "react";
import { RatingView } from "react-simple-star-rating";

interface IProps {
  ratingValue: number;
}

const RatingStars = (props: IProps) => {
  return <RatingView ratingValue={props.ratingValue} />;
};

export default RatingStars;
