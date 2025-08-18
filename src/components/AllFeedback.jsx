import { useContext, useEffect } from "react";
// import feedbacklist from "../_data/feedback";
import FeedbackItem from "./FeedbackItem";
import GlobalContext from "../context/GlobalContext";

function AllFeedback() {
  const elementStyle = {
    display: "flex",
    gap: "8px",
    marginBottom: "10px",
    justifyContent: "flex-end",
  };

  const { feedbackList, handleCsv, handlePrint, handleShare } =
    useContext(GlobalContext);
  useEffect(() => {}, [feedbackList]);

  return (
    <section className="panel">
      <div className="section-title">All Feedback</div>
      <div className="no-print" style={elementStyle}>
        <button id="export" className="btn secondary" onClick={handleCsv}>
          Export CSV
        </button>
        <button id="print" className="btn secondary" onClick={handlePrint}>
          Print Report
        </button>
        <button id="share" className="btn secondary" onClick={handleShare}>
          Share Filters
        </button>
      </div>
      <div id="list" className="list">
        {feedbackList.length ? (
          feedbackList.map((item) => {
            return <FeedbackItem key={item.id} item={item} />;
          })
        ) : (
          <div className="no-feedback">
            <div>
              <p>No Feedback Available...</p>
              <p>
                Be the first to share your thoughts and rate your experience!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllFeedback;
