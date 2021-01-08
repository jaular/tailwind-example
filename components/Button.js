import useDarkMode from "../hooks/useDarkMode";

export default function Button() {
  const [switchTheme, theme] = useDarkMode();
  const textTheme = theme === "dark" ? "light mode" : "dark mode";

  return (
    <div>
      <button
        onClick={() => switchTheme()}
        className="px-5 py-2 rounded text-xs font-semibold uppercase bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-900 focus:outline-none"
      >
        {textTheme}
      </button>
    </div>
  );
}
