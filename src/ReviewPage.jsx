import React, { useEffect, useState } from "react";
import { getComments, getReview, updateVoteCount } from "./Api";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { formatDate } from "./util";

function ReviewPage() {
  const { review_id } = useParams();

  const [singleReview, setSingleReview] = useState({});

  useEffect(() => {
    getReview(review_id).then((review) => {
      setSingleReview(review);
      setVoteCount(review.votes);
    });
  }, []);

  console.log(singleReview);
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    getComments(review_id).then((comments) => {
      setCommentsData(comments);
    });
  }, []);

  const [voteCount, setVoteCount] = useState(0);

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
            <p class="grid-item" class="reviewTitleOnTitlePage">
              {singleReview.title}
            </p>
          </h3>
          <div class="grid-item" class="articleAuthor">
            <p class="author">Written by {singleReview.owner}</p>
            <p>{formatDate(singleReview.created_at)}</p>
          </div>
        </section>
        <section class="reviewInfo">
          <section className="reviewVotesAndAuthor">
            <img
              src={singleReview.review_img_url}
              alt="reviewIMG"
              className="reviewImg"
            ></img>
            <div class="votesSection">
              <button
                onClick={() => {
                  updateVoteCount(singleReview.review_id).then(() => {
                    setVoteCount(voteCount + 1);
                  });
                }}
                class="grid-item"
                class="voteButton"
              >
                Vote
              </button>
              <p class="grid-item" class="voteCount">
                Votes: {voteCount}
              </p>
            </div>

            <p>Designer: {singleReview.designer}</p>
            <p>Genre: {singleReview.category}</p>
          </section>
          <section className="reviewBody">
            <p>{singleReview.review_body}</p>
          </section>
        </section>
      </section>
      <section className="CommentSection">
        <div class="titleForComments">Comments</div>
        {commentsArray}
      </section>
    </section>
  );
}

export default ReviewPage;
