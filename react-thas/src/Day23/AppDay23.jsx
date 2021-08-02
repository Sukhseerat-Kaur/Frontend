import UseSwitchTheme from "./useSwitchTheme";
import "./DarkMode.css";

function AppDay23() {
  const SwitchTheme = UseSwitchTheme();
  return (
    <div className="app-day-23">
      {SwitchTheme}
      <h2>Hello World</h2>
    </div>
  );
}

export default AppDay23;
