import React, { useState, useEffect } from "react";

const UseDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      localStorage.theme === "dark";
    }
  });
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  useEffect(() => {
    const html = window.document.documentElement;
    const prev = isDarkMode ? "light" : "dark";
    html.classList.remove(prev);
    const next = isDarkMode ? "dark" : "light";
    html.classList.add(next);
    localStorage.setItem("theme", next);
  }, [isDarkMode]);
  return [isDarkMode, toggleDarkMode];
};

export default UseDarkMode;
