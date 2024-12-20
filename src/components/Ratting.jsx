/* eslint-disable react/prop-types */
import filledStar from '../assets/images/icon/star-fill.png';
import halfStar from '../assets/images/icon/star-half-fill.png';
import emptyStar from '../assets/images/icon/star.png';

const Rating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center space-x-2 mt-2">
      {Array.from({ length: 5 }, (_, index) => {
        const starIndex = index + 1;
        if (starIndex <= Math.floor(rating)) {
          return (
            <span key={index} className="text-yellow-500 text-lg">
              <img src={filledStar} alt="rating" />
            </span>
          );
        } else if (starIndex - rating <= 0.5) {
          return (
            <span key={index} className="text-yellow-500 text-lg">
              <img src={halfStar} alt="rating" />
            </span>
          );
        } else {
          return (
            <span key={index} className="text-gray-300 text-lg">
              <img src={emptyStar} alt="rating" />
            </span>
          );
        }
      })}
      <span className="text-gray-600 text-sm">({reviews} Reviews)</span>
    </div>
  );
};

export default Rating;