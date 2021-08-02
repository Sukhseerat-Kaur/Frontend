import React, { useEffect, useState } from "react";

function UseSwitchTheme() {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    if (mode === "dark") {
      document.querySelector(".app-day-23").classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.querySelector(".app-day-23").classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);
  return (
    <button
      className="cursor-pointer"
      onClick={() => setMode((mode) => (mode === "dark" ? "light" : "dark"))}
    >
      <h3>Toggle to {mode === "dark" ? "Light" : "Dark"} Mode</h3>
    </button>
  );
}

export default UseSwitchTheme;
