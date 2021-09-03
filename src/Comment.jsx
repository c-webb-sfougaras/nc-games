import React from "react";
import { Link } from "react-router-dom";

function Comment({ author, body, review_id, votes, created_at }) {
  return (
    <section>
      <section>
        <section>
          {author}
          {body}
          {review_id}
          {votes}
          {created_at}
        </section>
      </section>
    </section>
  );
}

export default Comment;
