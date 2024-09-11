export default function Tailwind01() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 dark:bg-gray-700">
      <div className="w-full max-w-screen-sm rounded-3xl bg-white p-5 shadow-md dark:bg-gray-500">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="-mb-1 font-semibold text-gray-600 dark:text-gray-400">
              In transit
            </span>
            <span className="text-4xl font-semibold dark:text-white">
              Coolblue
            </span>
          </div>
          <div className="size-12 rounded-full bg-orange-400" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="rounded-full bg-green-400 px-2.5 py-1.5 text-xs font-medium uppercase text-white transition hover:scale-125 hover:bg-green-500">
            Today
          </span>
          <span className="dark:text-white">9:30-10:30u</span>
        </div>
        <div className="relative">
          <div className="absolute h-2 w-full rounded-full bg-gray-200" />
          <div className="absolute h-2 w-2/3 rounded-full bg-green-400" />
        </div>
        <div className="mt-5 flex items-center justify-between text-gray-600 dark:text-gray-200">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
