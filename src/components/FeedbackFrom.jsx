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
              console.log(value);
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
            {/* <input
              type="radio"
              id="r1"
              name="rating"
              value="1"
              checked={rating == 1}
              onChange={handleFromData}
            />
            <label htmlFor="r1">1</label>
            <input
              type="radio"
              id="r2"
              name="rating"
              value="2"
              checked={rating == 2}
              onChange={handleFromData}
            />
            <label htmlFor="r2">2</label>
            <input
              type="radio"
              id="r3"
              name="rating"
              value="3"
              checked={rating == 3}
              onChange={handleFromData}
            />
            <label htmlFor="r3">3</label>
            <input
              type="radio"
              id="r4"
              name="rating"
              value="4"
              checked={rating == 4}
              onChange={handleFromData}
            />
            <label htmlFor="r4">4</label>
            <input
              type="radio"
              id="r5"
              name="rating"
              value="5"
              checked={rating == 5}
              onChange={handleFromData}
            />
            <label htmlFor="r5">5</label>
            <input
              type="radio"
              id="r6"
              name="rating"
              value="6"
              checked={rating == 6}
              onChange={handleFromData}
            />
            <label htmlFor="r6">6</label>
            <input
              type="radio"
              id="r7"
              name="rating"
              value="7"
              checked={rating == 7}
              onChange={handleFromData}
            />
            <label htmlFor="r7">7</label>
            <input
              type="radio"
              id="r8"
              name="rating"
              value="8"
              checked={rating == 8}
              onChange={handleFromData}
            />
            <label htmlFor="r8">8</label>
            <input
              type="radio"
              id="r9"
              name="rating"
              value="9"
              checked={rating == 9}
              onChange={handleFromData}
            />
            <label htmlFor="r9">9</label>
            <input
              type="radio"
              id="r10"
              name="rating"
              value="10"
              checked={rating == 10}
              onChange={handleFromData}
            />
            <label htmlFor="r10">10</label> */}
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
