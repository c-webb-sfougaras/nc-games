import React, { useEffect, useState } from "react";
import { getComments, getReview } from "./Api";
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

  useEffect(() => {
    getComments(review_id).then((comments) => {
      setCommentsData(comments);
    });
  });

  const commentsArray = commentsData.map((comment) => {
    return (
      <Comment
        author={comment.author}
        body={comment.body}
        votes={comment.votes}
        created_at={comment.created_at}
      />
    );
  });
  return (
    <section className="reviewPage">
      <section className="reviewData">
        <section className="reviewTitle">
          <h3>
            <p>{singleReview.title}</p>
          </h3>
          <p>{singleReview.owner}</p>
          <p>{singleReview.created_at}</p>
        </section>
        <section className="reviewVotesAndAuthor">
          <img src={singleReview.review_img_url} className="reviewImg"></img>
          <p>Votes: {singleReview.votes}</p>
          <button>Vote</button>
          <p>Designer: {singleReview.designer}</p>
          <p>Genre: {singleReview.category}</p>
        </section>
        <section className="reviewBody">
          <p>{singleReview.review_body}</p>
        </section>
      </section>
      <section className="CommentSection">{commentsArray}</section>;
    </section>
  );
}

export default ReviewPage;
