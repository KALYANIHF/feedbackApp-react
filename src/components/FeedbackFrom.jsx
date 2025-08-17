import React, { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function FeedbackFrom() {
  const elementStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "end",
    justifyContent: "flex-end",
  };
  const {
    rating,
    message,
    tags,
    customtag,
    anon,
    username,
    handleFromData,
    handleSubmit,
    handleReset,
    createFeedback,
  } = useContext(GlobalContext);
  return (
    <section className="panel">
      <h2 className="section-title">Create Feedback</h2>
      <div className="grid">
        <div>
          <div className="label">Rating (1–10)</div>
          <div id="rating" className="rating" aria-label="Select rating">
            {/* <!-- radios injected --> */}
            {[...new Array(10)].map((_, i) => {
              const value = i + 1;
              return (
                <React.Fragment key={value}>
                  <input
                    type="radio"
                    id={`r-${value}`}
                    name="rating"
                    value={value}
                    checked={rating === Number(value)}
                    onChange={handleFromData}
                  />
                  <label htmlFor={`r-${value}`} key={`${value}`}>
                    {value}
                  </label>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div>
          <div className="label">Feedback</div>
          <div className="textwrap">
            <textarea
              id="message"
              name="message"
              maxLength="300"
              value={message}
              placeholder="Share your thoughts… What worked well? What could be better?"
              onChange={handleFromData}
            ></textarea>
            <div className="helper">
              <span className="muted">Tip: be specific; it helps a ton.</span>
              <span id="count" className="count ok">
                0/300
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-2">
          <div>
            <div className="label">Tags (multi)</div>
            <select id="tags" name="tags" multiple onChange={handleFromData}>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="PerhtmlFormance">PerhtmlFormance</option>
              <option value="Features">Features</option>
              <option value="Bug">Bug</option>
              <option value="Praise">Praise</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <div className="label">Add custom tag</div>
            <input
              id="customTag"
              name="customtag"
              className="input"
              type="text"
              value={customtag}
              placeholder="Type and press Enter"
              onChange={handleFromData}
            />
          </div>
        </div>
        {!anon && (
          <div className="grid">
            <div>
              <input
                type="text"
                name="username"
                id="username"
                className="input"
                maxLength={20}
                placeholder="Enter Your name..."
                value={username}
                onChange={handleFromData}
              />
            </div>
          </div>
        )}
        <div className="grid grid-2">
          <div>
            <div className="label">Anonymous</div>
            <label className="switch">
              <input
                id="anon"
                name="anon"
                type="checkbox"
                checked={anon}
                onChange={handleFromData}
              />
              <span className="dot"></span>
            </label>
          </div>
          <div className="no-print" style={elementStyle}>
            <button
              type="button"
              id="submit"
              className="btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              id="reset"
              className="btn secondary"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackFrom;
