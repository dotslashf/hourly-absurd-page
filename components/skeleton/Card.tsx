const SkeletonCard = () => {
  return (
    <div className="shadow-lg rounded-lg md:max-w-sm w-full m-auto">
      <div
        role="status"
        className="rounded-t-lg object-cover h-56	md:h-48 w-full bg-gray-300 animate-pulse dark:bg-gray-700"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div className="bg-white w-full p-4 relative rounded-b-lg flex justify-between items-center h-14">
        <div className="flex space-x-3">
          <div className="flex items-center w-10 h-6 text-blue-200 bg-gray-300 rounded-xl animate-pulse"></div>
          <div className="flex items-center w-10 h-6 text-blue-200 bg-gray-300 rounded-xl animate-pulse"></div>
        </div>
        <span className="w-24 h-6 bg-gray-300 animate-pulse rounded-full"></span>
      </div>
    </div>
  );
};

export default SkeletonCard;
