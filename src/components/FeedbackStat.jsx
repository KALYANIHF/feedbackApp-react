import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
function FeedbackStat() {
  const elementStyle = {
    marginTop: "12px",
  };
  const { feedbackList } = useContext(GlobalContext);
  const avgRating =
    feedbackList.reduce((acc, item) => acc + item.rating, 0) /
    feedbackList.length;
  const getAllRatings = [
    {
      key: "1",
      value: 1,
    },
    {
      key: "2",
      value: 1,
    },
    {
      key: "3",
      value: 1,
    },
    {
      key: "4",
      value: 1,
    },
    {
      key: "5",
      value: 1,
    },
    {
      key: "6",
      value: 1,
    },
    {
      key: "7",
      value: 1,
    },
    {
      key: "8",
      value: 1,
    },
    {
      key: "9",
      value: 1,
    },
    {
      key: "10",
      value: 1,
    },
  ];

  feedbackList.forEach((item) => {
    if (item.rating >= 1 && item.rating <= 10) {
      getAllRatings[item.rating - 1].value++;
    } else {
      getAllRatings[10].value++;
    }
  });

  const totalFeedback = feedbackList.length;
  const getAllTags = feedbackList.map((item) => {
    return item.tags
      .map((tag) => tag)
      .reduce((acc, tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
        return acc;
      }, []);
  });
  const sentiment = () => {
    if (avgRating > 7) {
      return "😊";
    } else if (avgRating > 5) {
      return "😐";
    } else if (avgRating > 3) {
      return "😔";
    } else {
      return "😢";
    }
  };

  console.log(
    avgRating,
    totalFeedback,
    sentiment(),
    getAllTags.flat(1),
    getAllRatings
  );

  return (
    <section className="panel">
      <h2 className="section-title">Analytics</h2>
      <div className="stats">
        <div className="stat">
          <div className="num" id="avg">
            {isNaN(avgRating) ? 0 : parseFloat(avgRating.toFixed(2))}
          </div>
          <div className="muted">Average Rating</div>
        </div>
        <div className="stat">
          <div className="num" id="total">
            {totalFeedback}
          </div>
          <div className="muted">Total Feedback</div>
        </div>
        <div className="stat">
          <div className="num" id="sent">
            {sentiment()}
          </div>
          <div className="muted">Sentiment</div>
        </div>
        <div className="stat">
          <div className="tagcloud" id="tagsTop">
            {getAllTags.flat(1).length > 0 ? (
              getAllTags.flat(1).map((tag) => (
                <div className="badge" key={tag}>
                  {tag}
                </div>
              ))
            ) : (
              <div>No Tags</div>
            )}
          </div>
        </div>
      </div>
      <div style={elementStyle}>
        <div style={elementStyle}>
          <div className="chart" id="chart">
            {getAllRatings.map((rating, index) => (
              <div
                key={index}
                className="bar"
                style={{
                  height: `${(rating.value * 100) / 10}%`,
                }}
              ></div>
            ))}
            {/* <div className="bar" style={{ height: "100%" }}></div>
            <div className="bar" style={{ height: "4%" }}></div>
            <div className="bar" style={{ height: "4%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div>
            <div className="bar" style={{ height: "4%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div>
            <div className="bar" style={{ height: "4%" }}></div>
            <div className="bar" style={{ height: "25%" }}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackStat;
