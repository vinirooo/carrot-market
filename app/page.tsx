export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-md p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
        {["Nico", "Aiden", "Yooou"].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-1 p-5 last:border-0"
          >
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium">{person}</span>
            <div className="size-6 rounded-full bg-red-500 flex items-center justify-center text-white">
              <span>{index}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
