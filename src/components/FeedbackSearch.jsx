import React from "react";
import { useContext } from "react";
import SearchContext from "../context/SearchContext";

function FeedbackSearch() {
  const elementStyle = {
    marginTop: "6px",
  };
  const {
    searchquery,
    tag,
    minvalue,
    maxvalue,
    sort,
    filterFeedbacks,
    filterwithTags,
    filterwithRating,
    filterwithKey,
    handleFromData,
    handleClean,
  } = useContext(SearchContext);
  return (
    <section className="panel no-print">
      <h2 className="section-title">Search & Filters</h2>
      <div className="toolbar">
        <input
          id="q"
          className="input"
          onChange={handleFromData}
          value={searchquery}
          name="searchquery"
          placeholder="Search by name ..."
        />
        <select id="fTag" name="tag" value={tag} onChange={handleFromData}>
          <option value="All">All tags</option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="PerhtmlFormance">PerhtmlFormance</option>
          <option value="Features">Features</option>
          <option value="Bug">Bug</option>
          <option value="Praise">Praise</option>
          <option value="Other">Other</option>
        </select>
        <div className="range">
          <input
            id="minR"
            className="input"
            type="number"
            min="1"
            max="10"
            name="minvalue"
            value={minvalue}
            onChange={handleFromData}
            placeholder="Min"
          />
          <input
            id="maxR"
            className="input"
            type="number"
            min="1"
            max="10"
            name="maxvalue"
            value={maxvalue}
            onChange={handleFromData}
            placeholder="Max"
          />
        </div>
        {/* <select id="sort" name="sort" onChange={handleFromData}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="highest rating">Highest rating</option>
          <option value="lowest rating">Lowest rating</option>
          <option value="most liked">Most liked</option>
          <option value="most disliked">Most disliked</option>
        </select> */}
        <button id="clear" className="btn secondary" onClick={handleClean}>
          Clear
        </button>
      </div>
      <div className="muted" id="rc" style={elementStyle}></div>
    </section>
  );
}

export default FeedbackSearch;
