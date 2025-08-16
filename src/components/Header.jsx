import React from "react";
import { useEffect, useReducer, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
function Header() {
  const style = {
    background: "linear-gradient(90deg, #ff9776, #ffd36e)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundClip: "text",
  };
  const { theme, themeIcon, rating, feedbackList, toggleTheme } =
    useContext(GlobalContext);

  useEffect(() => {
    document.body.className = theme;
  }, []);
  return (
    <header>
      <div className="header-inner">
        <div className="brand">
          <div className="logo">
            <span>💬</span>
          </div>
          <h1 className="title">
            Feedback
            <span style={style}>App</span>
          </h1>
        </div>
        <div className="actions">
          <button
            id="theme"
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {themeIcon}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
