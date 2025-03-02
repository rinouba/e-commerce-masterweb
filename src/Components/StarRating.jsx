const StarRating = ({ rating, reviewCount }) => {
  return (
<div className="flex items-center">
  <div className="flex">
    {Array.from({ length: 5 }).map((_, index) => {
     const isFilled = index < rating; 
      const isHalf = index === Math.floor(rating) && rating % 1 !== 0;

      return (
        <div key={index} className="relative">
          <svg
            className="w-5 h-5 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>

          {isFilled && (
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: isHalf ? '50%' : '100%' }}
            >
              <svg
                className="w-5 h-5 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          )}
        </div>
      );
    })}
  </div>
  <span className="ml-2 text-gray-600">({reviewCount})</span>
</div>
  );
};

export default StarRating;