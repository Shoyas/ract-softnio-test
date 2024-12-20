/* eslint-disable react/prop-types */
const ProductImage = ({ selectedColor, images }) => {
  const selectedImage = images.find(img => img.color === selectedColor)?.image;

  return (
    <div className="flex justify-center items-center">
      <img
        src={selectedImage}
        alt="Smartwatch"
        className="rounded-lg xl:w-[630px] xl:h-[721px] lg:w-[630px] lg:h-[721px] md:max-w-full md:h-96 sm:max-w-full sm:h-96 object-cover"
      />
    </div>
  );
};

export default ProductImage;