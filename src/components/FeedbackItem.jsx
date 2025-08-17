import React from "react";
import incognitoIcon from "../assets/incognito.png";

function FeedbackItem({ item }) {
  const elementStyle = {
    background: "linearGradient(rgb(160, 107, 255), rgb(124, 138, 255))",
    fontSize: "10px",
  };
  return (
    <div className="item">
      <div className="item-top">
        <div className="left">
          <div className="ava" style={elementStyle}>
            {item.name !== "" ? (
              item.name
            ) : (
              <img src={incognitoIcon} alt="Incognito" />
            )}
          </div>
          <div>
            <span className="badge pill">⭐ {item.rating}</span>
            <span className="badge">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }).format(item.ts)}
            </span>
          </div>
        </div>
        <div>
          {item.tags.map((tag) => (
            <span className="badge">{tag}</span>
          ))}
        </div>
      </div>
      <div className="msg">{item.msg}</div>
      <div className="actions">
        <button className="act">
          👍 <span className="count">{item.like ?? 0}</span>
        </button>
        <button className="act">
          ❤️ <span className="count">{item.love ?? 0}</span>
        </button>
        <button className="act">
          👎 <span className="count">{item.dislike ?? 0}</span>
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
