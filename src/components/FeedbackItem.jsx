import React from "react";

function FeedbackItem({ data }) {
  const elementStyle = {
    background: "linearGradient(rgb(160, 107, 255), rgb(124, 138, 255))",
  };
  return (
    <div className="item">
      <div className="item-top">
        <div className="left">
          <div className="ava" style={elementStyle}>
            Y
          </div>
          <div>
            <span className="badge pill">⭐ 1</span>
            <span className="badge">15/08/2025, 21:24:11</span>
          </div>
        </div>
        <div>
          <span className="badge">Other</span>
        </div>
      </div>
      <div className="msg">just shut up</div>
      <div className="actions">
        <button className="act">
          👍 <span className="count">0</span>
        </button>
        <button className="act">
          ❤️ <span className="count">0</span>
        </button>
        <button className="act">
          👎 <span className="count">0</span>
        </button>
        <button className="act">Reply</button>
      </div>
      <div className="reply">
        <textarea className="input" placeholder="Write a reply…"></textarea>
        <button className="btn secondary">Save</button>
      </div>
    </div>
  );
}

export default FeedbackItem;
