import React from "react";

function ReviewTile({ title, owner, category, img_url }) {
  return (
    <section className="ReviewTile">
      <p>
        <img className="reviewTileImg" src={img_url}></img>
      </p>
      <section className="reviewTileInfo">
        <h2>{title}</h2>
        <h3>
          <section>Category: {category}</section>
        </h3>
        <section>Written by {owner}</section>
        <button>Read Review</button>
      </section>
    </section>
  );
}

export default ReviewTile;
