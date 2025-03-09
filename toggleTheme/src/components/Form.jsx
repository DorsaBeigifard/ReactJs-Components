import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import Panel from "./Panel";

export default function Form() {
  const { theme, setTheme } = useTheme();
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
      <button onClick={() => setTheme("dark")}>Change to dark theme</button>
    </Panel>
  );
}
