import React from "react";
import { formatDate } from "./util";

function Comment({ author, body, review_id, votes, created_at }) {
  return (
    <section>
      <section className="comment">
        <p class="commentBody">{body}</p>
        <section class="gridSection">
          <p class="grid-item commentAuthor">User: {author}</p>
          <p class="grid-item"> {formatDate(created_at)}</p>
          <p class="grid-item">Votes: {votes}</p>
        </section>
      </section>
    </section>
  );
}

export default Comment;
