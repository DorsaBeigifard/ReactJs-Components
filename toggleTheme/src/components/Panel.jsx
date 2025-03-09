import { useTheme } from "../context/ThemeContext";

export default function Panel({ title, children }) {
  // consume context
  const { theme, setTheme } = useTheme();

  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
