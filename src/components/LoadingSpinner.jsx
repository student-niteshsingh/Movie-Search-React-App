const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <span className="text-lg font-semibold text-white animate-pulse">
        Loading<span className="dot-animate">...</span>
      </span>
    </div>
  );
};

export default LoadingSpinner;
