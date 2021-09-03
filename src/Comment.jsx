import React from "react";
import { Link } from "react-router-dom";

function Comment({ author, body, review_id, votes, created_at }) {
  return (
    <section>
      <section className="comment">
        <p>{author}</p>
        <p>{body}</p>
        <p>{review_id}</p>
        <p>Votes: {votes}</p>
        <p>{created_at}</p>
      </section>
    </section>
  );
}

export default Comment;
