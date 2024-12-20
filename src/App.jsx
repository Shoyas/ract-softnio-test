import { useState } from 'react';
import ProductImage from './components/ProductImage';
import ProductDetails from './components/ProductDetails';
import { products } from './data/products';

const App = () => {
  const product = products[0];
  const defaultColor = product.colors.find(c => c.default)?.color || product.colors[0].color;
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  return (
    <div className="container mx-auto mt-12 p-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
        <ProductImage 
          selectedColor={selectedColor} 
          images={product.colors}
        />
        <ProductDetails 
          product={product}
          selectedColor={selectedColor} 
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;