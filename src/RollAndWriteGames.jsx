import React, { useEffect, useState } from "react";
import ReviewTile from "./ReviewTile";
import { getReviews } from "./Api";

function RollAndWriteGames() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviewData(reviews);
    });
  }, []);

  const reviewTileArray = reviewData
    .filter((review) => {
      return review.category === "roll-and-write";
    })
    .map((review) => {
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
    });

  return <section className="RollAndWriteGames">{reviewTileArray}</section>;
}

export default RollAndWriteGames;
