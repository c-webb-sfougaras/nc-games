import React, { useState, useEffect } from "react";
import ReviewTile from "./ReviewTile";
import { getReviews } from "./Api";

function DexterityGames() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviewData(reviews);
    });
  }, []);

  const reviewTileArray = reviewData.map((review) => {
    console.log(review);
    if (review.category === "dexterity") {
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
  return <section className="DexterityGames">{reviewTileArray}</section>;
}

export default DexterityGames;
