import React, { useEffect, useState } from "react";
import ReviewTile from "./ReviewTile";
import { getReviews } from "./Api";

function StrategyGames() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      console.log(reviews);
      setReviewData(reviews);
    });
  }, []);

  const reviewTileArray = reviewData.map((review) => {
    if (review.category === "strategy") {
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

  return <section className="StrategyGames">{reviewTileArray}</section>;
}

export default StrategyGames;
