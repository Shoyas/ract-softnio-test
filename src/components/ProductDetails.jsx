/* eslint-disable react/prop-types */
import { useState } from "react";
import CartModal from "./CartModal";
import Rating from "./Ratting";

const ProductDetails = ({ product, selectedColor, setSelectedColor }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const defaultSize = product.sizes[1];
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(0, prev + delta));
  };

  const addToCart = () => {
    if (quantity > 0) {
      const newItem = {
        name: product.name,
        color: selectedColor,
        size: selectedSize.size,
        quantity,
        totalPrice: selectedSize.salePrice * quantity,
      };

      setCartItems((prev) => {
        const existingItemIndex = prev.findIndex(item =>
          item.name === newItem.name &&
          item.color === newItem.color &&
          item.size === newItem.size
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...prev];
          const existingItem = updatedItems[existingItemIndex];
          updatedItems[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + newItem.quantity,
            totalPrice: selectedSize.salePrice * (existingItem.quantity + newItem.quantity)
          };

          return updatedItems;
        }
        return [...prev, newItem];
      });

      setCartCount((prev) => prev + quantity);
      setQuantity(0);
    }
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const getColorClass = (color) => {
    switch (color) {
      case 'Purple':
        return 'bg-[#816BFF]';
      case 'Cyan':
        return 'bg-[#1FCEC9]';
      case 'Teal':
        return 'bg-[#4B97D3]';
      case 'Black':
        return 'bg-[#3B4747]';
      default:
        return 'bg-[#816BFF]';
    }
  };

  return (
    <div className="details-section mt-20">
      <h1 className="text-4xl font-bold text-[#364A63] mb-3">{product.name}</h1>
      <Rating rating={product.rating} reviews={product.reviews} />

      <div className="flex items-center space-x-4 mt-5">
        <span className="line-through text-[#8091A7] text-sm">
          ${selectedSize.originalPrice}.00
        </span>
        <span className="font-bold text-[#6576FF] text-2xl">
          ${selectedSize.salePrice}.00
        </span>
      </div>

      <p className="text-[#8091A7] mt-5 text-lg">{product.details}</p>

      <div className="flex gap-14">
        <div className="mt-5">
          <span className="text-lg font-normal text-[#8091A7] block">Type</span>
          <span className="text-[#364A63] font-bold">{product.type}</span>
        </div>
        <div className="mt-5">
          <span className="text-lg font-normal text-[#8091A7] block">Model Number</span>
          <span className="text-[#364A63] font-bold">{product.modelNumber}</span>
        </div>
      </div>

      <div className="mt-5">
        <span className="text-lg font-bold text-[#364A63] block">Band Color</span>
        <div className="flex items-center space-x-5 mt-3">
          {product.colors.map(({ color, id }) => (
            <span
              key={id}
              className={`w-6 h-6 ${getColorClass(color)} rounded-full border-2 
                ${selectedColor === color
                  ? 'border-double border-4 border-white w-7 h-7'
                  : 'border-none'
                } cursor-pointer`}
              onClick={() => setSelectedColor(color)}
            ></span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <span className="text-lg font-semibold text-[#364A63] block">Wrist Size</span>
        <div className="flex items-center space-x-3 mt-3">
          {product.sizes.map((sizeOption) => (
            <button
              key={sizeOption.id}
              onClick={() => setSelectedSize(sizeOption)}
              className={`px-3 py-2 text-gray-700 rounded border 
                ${selectedSize.id === sizeOption.id
                  ? 'bg-white border-[#6576FF] text-[#6576FF]'
                  : 'hover:text-[#6576FF] border-gray-300 hover:border-[#6576FF]'
                }`}
            >
              <span className={selectedSize.id === sizeOption.id ? 'text-[#6576FF]' : ''}>
                {sizeOption.size}
              </span>
              <span className="text-[#8091A7]">${sizeOption.salePrice}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-start space-x-4 mt-5">
        <div className="flex items-center justify-between space-x-4 w-32 h-9 border-[#DBDFEA] border rounded">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="p-2 bg-white border-r"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span className="text-sm">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="p-2 bg-white border-l"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={addToCart}
            className={`bg-[#6576FF] text-white py-2 px-6 rounded hover:bg-[#6576FF] 
              ${quantity === 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
            disabled={quantity === 0}
          >
            Add to Cart
          </button>

          <button
            onClick={() => setIsHeartFilled((prev) => !prev)}
            className="p-2 bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isHeartFilled ? "#6576FF" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#6576FF"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {cartCount > 0 && (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFBB5A] text-[#364A63] font-semibold py-2 px-6 hover:bg-[#f7b151] w-36 h-11 rounded-full"
        >
          Checkout <span className="rounded-md bg-white text-[#364A63] p-1">{cartCount}</span>
        </button>
      )}

      {showModal && (
        <CartModal
          onClose={() => setShowModal(false)}
          cartItems={cartItems}
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
          onContinueShopping={() => setShowModal(false)}
          productColors={product.colors}
        />
      )}
    </div>
  );
};

export default ProductDetails;