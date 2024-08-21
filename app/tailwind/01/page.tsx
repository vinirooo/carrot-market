export default function Tailwind01() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="bg-white shadow-md p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-500">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-400">
              In transit
            </span>
            <span className="text-4xl font-semibold dark:text-white">
              Coolblue
            </span>
          </div>
          <div className="size-12 bg-orange-400 rounded-full" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="px-2.5 py-1.5 bg-green-400 hover:bg-green-500 text-xs font-medium uppercase rounded-full text-white hover:scale-125 transition">
            Today
          </span>
          <span className="dark:text-white">9:30-10:30u</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200 w-full h-2 rounded-full absolute" />
          <div className="bg-green-400 w-2/3 h-2 rounded-full absolute" />
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-200">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
