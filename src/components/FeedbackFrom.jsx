import React from "react";

function FeedbackFrom() {
  const elementStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "end",
    justifyContent: "flex-end",
  };
  return (
    <section className="panel">
      <h2 className="section-title">Create Feedback</h2>
      <div className="grid">
        <div>
          <div className="label">Rating (1–10)</div>
          <div id="rating" className="rating" aria-label="Select rating">
            {/* <!-- radios injected --> */}
            <input type="radio" id="r1" name="rating" value="1" />
            <label htmlFor="r1">1</label>
            <input type="radio" id="r2" name="rating" value="2" />
            <label htmlFor="r2">2</label>
            <input type="radio" id="r3" name="rating" value="3" />
            <label htmlFor="r3">3</label>
            <input type="radio" id="r4" name="rating" value="4" />
            <label htmlFor="r4">4</label>
            <input type="radio" id="r5" name="rating" value="5" />
            <label htmlFor="r5">5</label>
            <input type="radio" id="r6" name="rating" value="6" />
            <label htmlFor="r6">6</label>
            <input type="radio" id="r7" name="rating" value="7" />
            <label htmlFor="r7">7</label>
            <input type="radio" id="r8" name="rating" value="8" />
            <label htmlFor="r8">8</label>
            <input type="radio" id="r9" name="rating" value="9" />
            <label htmlFor="r9">9</label>
            <input type="radio" id="r10" name="rating" value="10" />
            <label htmlFor="r10">10</label>
          </div>
        </div>
        <div>
          <div className="label">Feedback</div>
          <div className="textwrap">
            <textarea
              id="message"
              maxLength="300"
              placeholder="Share your thoughts… What worked well? What could be better?"
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
            <select id="tags" multiple>
              <option>UI</option>
              <option>UX</option>
              <option>PerhtmlFormance</option>
              <option>Features</option>
              <option>Bug</option>
              <option>Praise</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <div className="label">Add custom tag</div>
            <input
              id="customTag"
              className="input"
              type="text"
              placeholder="Type and press Enter"
            />
          </div>
        </div>
        <div className="grid grid-2">
          <div>
            <div className="label">Anonymous</div>
            <label className="switch">
              <input id="anon" type="checkbox" />
              <span className="dot"></span>
            </label>
          </div>
          <div className="no-print" style={elementStyle}>
            <button id="submit" className="btn">
              Submit
            </button>
            <button id="reset" className="btn secondary">
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackFrom;
