import "./App.css";
import Form from "./components/Form";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

export default function MyApp() {
  return (
    //in this way with provider everything in between has access to provided value (childs of APP)
    <ThemeProvider>
      <div>
        <Form />
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}

// another component to use customHook in it.
function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <label>
      <input
        type="checkbox"
        // checked={theme === "dark"}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      />
      Use dark mode
    </label>
  );
}
