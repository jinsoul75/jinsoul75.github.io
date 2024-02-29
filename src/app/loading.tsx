export default function Loading() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="flex flex-col gap-4">
        <div className="w-20 h-10 bg-gray-200"></div>
        <div className="w-24 h-6 bg-gray-200"></div>
        <div className="w-24 h-6 bg-gray-200"></div>
        <div className="w-24 h-6 bg-gray-200"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-20 h-6 bg-gray-200"></div>
        <div className="grid grid-cols-4 gap-4">
          <div className="w-60 h-60 bg-gray-200"></div>
          <div className="w-60 h-60 bg-gray-200"></div>
          <div className="w-60 h-60 bg-gray-200"></div>
          <div className="w-60 h-60 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
