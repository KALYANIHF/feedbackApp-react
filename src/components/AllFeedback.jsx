import React from "react";
import feedbacklist from "../_data/feedback";
import FeedbackItem from "./FeedbackItem";

function AllFeedback() {
  const elementStyle = {
    display: "flex",
    gap: "8px",
    marginBottom: "10px",
    justifyContent: "flex-end",
  };
  return (
    <section className="panel">
      <div className="section-title">All Feedback</div>
      <div className="no-print" style={elementStyle}>
        <button id="export" className="btn secondary">
          Export CSV
        </button>
        <button id="print" className="btn secondary">
          Print Report
        </button>
        <button id="share" className="btn secondary">
          Share Filters
        </button>
      </div>
      <div id="list" className="list">
        {feedbacklist.map((item) => {
          return <FeedbackItem />;
        })}
      </div>
    </section>
  );
}

export default AllFeedback;
