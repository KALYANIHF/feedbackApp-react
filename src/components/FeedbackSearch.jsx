import React from "react";

function FeedbackSearch() {
  const elementStyle = {
    marginTop: "6px",
  };
  return (
    <section className="panel no-print">
      <h2 className="section-title">Search & Filters</h2>
      <div className="toolbar">
        <input id="q" className="input" placeholder="Search by keyword…" />
        <select id="fTag">
          <option value="">All tags</option>
          <option>UI</option>
          <option>UX</option>
          <option>Performance</option>
          <option>Features</option>
          <option>Bug</option>
          <option>Praise</option>
          <option>Other</option>
        </select>
        <div className="range">
          <input
            id="minR"
            className="input"
            type="number"
            min="1"
            max="10"
            value="1"
            placeholder="Min"
          />
          <input
            id="maxR"
            className="input"
            type="number"
            min="1"
            max="10"
            value="10"
            placeholder="Max"
          />
        </div>
        <select id="sort">
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
          <option value="high">Highest rating</option>
          <option value="low">Lowest rating</option>
          <option value="liked">Most liked</option>
        </select>
        <button id="clear" className="btn secondary">
          Clear
        </button>
      </div>
      <div className="muted" id="rc" style={elementStyle}></div>
    </section>
  );
}

export default FeedbackSearch;
