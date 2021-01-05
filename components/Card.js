import useDarkMode from "../hooks/useDarkMode";

export default function Card() {
  const [switchTheme] = useDarkMode();
  return (
    <div className="max-w-xs mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 dark:text-white font-bold text-2xl uppercase">
          NIKE AIR
        </h1>
        <p className="text-gray-700 dark:text-gray-200 text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere recusandae voluptatibus
        </p>
      </div>

      <img
        className="h-48 w-full object-cover mt-2"
        src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=320&q=80"
        alt="NIKE AIR"
      />

      <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800">
        <h1 className="text-gray-900 dark:text-white font-bold text-lg">
          $129
        </h1>
        <button
          onClick={() => switchTheme()}
          className="px-5 py-2 bg-green-500 rounded text-xs text-white font-semibold uppercase transition duration-300 ease-in-out hover:bg-green-700"
        >
          Buy
        </button>
      </div>
    </div>
  );
}
