import { useTheme } from "../context/ThemeContext";

export default function Button({ children }) {
  const { theme, setTheme } = useTheme();

  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
