import React, { useEffect, useState } from "react";
import { getReview } from "./Api";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

function ReviewPage() {
  const { review_id } = useParams();

  const [singleReview, setSingleReview] = useState({});

  useEffect(() => {
    getReview(review_id).then((review) => {
      setSingleReview(review);
    });
  }, []);

  console.log(singleReview);
  const [commentsData, setCommentsData] = useState([]);

  const commentsArray = commentsData.map((comment) => {
    return <Comment author={comment.author} />;
  });
  return (
    <section className="reviewPage">
      <section className="reviewInfoOnReviewPage">
        <section className="reviewTitle">
          <h3>
            <p>{singleReview.title}</p>
          </h3>
          <p>{singleReview.owner}</p>
          <p>{singleReview.created_at}</p>
        </section>
        <section>
          <img src={singleReview.review_img_url} className="reviewImg"></img>
          <p>Votes: {singleReview.votes}</p>
          <button>Vote</button>
          <p>Designer: {singleReview.designer}</p>
          <p>Genre: {singleReview.category}</p>
        </section>
        <section>
          <p>{singleReview.review_body}</p>
        </section>
      </section>
    </section>
  );
  return <section classname="CommentSection">{commentsArray}</section>;
}

export default ReviewPage;
