import React from "react";
import { Link } from "react-router-dom";

function ReviewTile({ title, owner, category, img_url, review_id }) {
  return (
    <section className="ReviewTile">
      <p>
        <img className="reviewTileImg" alt="reviewImg" src={img_url}></img>
      </p>
      <section className="reviewTileInfo">
        <h2>{title}</h2>
        <h3>
          <section>Category: {category}</section>
        </h3>
        <section>Written by {owner}</section>
        <Link class="readReview" to={`reviews/${review_id}`}>
          Read Review
        </Link>
      </section>
    </section>
  );
}

export default ReviewTile;
