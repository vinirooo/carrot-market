export default function Loading() {
  return (
    <div className="flex animate-pulse flex-col gap-5 p-5">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="flex gap-5">
          <div className="size-28 rounded-lg bg-neutral-700" />
          <div className="flex flex-col gap-2 *:h-5 *:rounded-lg">
            <div className="w-40 bg-neutral-700" />
            <div className="w-20 bg-neutral-700" />
            <div className="w-10 bg-neutral-700" />
          </div>
        </div>
      ))}
    </div>
  );
}
