import React from "react";

function Header() {
  const style = {
    background: "linear-gradient(90deg, #ff9776, #ffd36e)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundClip: "text",
  };
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
          <button id="theme" className="icon-btn" aria-label="Toggle theme">
            🌙
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
