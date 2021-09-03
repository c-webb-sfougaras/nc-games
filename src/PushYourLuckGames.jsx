import React, { useEffect, useState } from "react";
import ReviewTile from "./ReviewTile";
import { getReviews } from "./Api";

function PushYourLuckGames() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviewData(reviews);
    });
  }, []);

  const reviewTileArray = reviewData.map((review) => {
    console.log(review);
    if (review.category === "push-your-luck") {
      return (
        <ReviewTile
          key={review.review_id}
          img_url={review.review_img_url}
          title={review.title}
          owner={review.owner}
          category={review.category}
          review_id={review.review_id}
        />
      );
    }
  });
  return <section className="PushYourLuckGames">{reviewTileArray}</section>;
}

export default PushYourLuckGames;