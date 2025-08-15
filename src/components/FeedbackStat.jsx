import React from "react";

function FeedbackStat() {
  const elementStyle = {
    marginTop: "12px",
  };

  return (
    <section className="panel">
      <h2 className="section-title">Analytics</h2>
      <div className="stats">
        <div className="stat">
          <div className="num" id="avg">
            —
          </div>
          <div className="muted">Average Rating</div>
        </div>
        <div className="stat">
          <div className="num" id="total">
            0
          </div>
          <div className="muted">Total Feedback</div>
        </div>
        <div className="stat">
          <div className="num" id="sent">
            😐
          </div>
          <div className="muted">Sentiment</div>
        </div>
        <div className="stat">
          <div className="tagcloud" id="tagsTop"></div>
        </div>
      </div>
      <div style={elementStyle}>
        <div style={elementStyle}>
          <div className="chart" id="chart">
            <div className="bar" style={{ height: "100%" }}></div>
            <div className="bar" style={{ height: "4%" }}></div>
            <div className="bar" style={{ height: "4%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div>
            <div className="bar" style={{ height: "4%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div>
            <div className="bar" style={{ height: "4%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackStat;
