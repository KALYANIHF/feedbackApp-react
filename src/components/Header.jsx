import React from "react";
import { useState, useEffect } from "react";

function Header() {
  const style = {
    background: "linear-gradient(90deg, #ff9776, #ffd36e)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundClip: "text",
  };
  const [theme, setTheme] = useState("dark");
  const [themeIcon, setThemeIcon] = useState("🌙");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setThemeIcon(theme === "light" ? "🌞" : "🌙");
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  };
  useEffect(() => {
    localStorage.setItem("theme", "dark");
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      setThemeIcon("🌙");
      document.body.className = "dark";
    } else {
      setTheme("light");
      setThemeIcon("🌞");
      document.body.className = "light";
    }
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
