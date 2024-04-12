import React from "react";
import Cart from "./Cart"; // Import the Cart component

interface Product {
  id: number;
  imageSrc: string;
  title: string;
  buttonText: string;
}

interface GridProps {
  products: Product[];
}

const Grid: React.FC<GridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-5">
      {products.map((product) => (
        <Cart
          key={product.id}
          imageSrc={product.imageSrc}
          title={product.title}
          buttonText={product.buttonText}
          onClick={() => console.log(`Button clicked for ${product.title}`)} // Example onClick handler
        />
      ))}
    </div>
  );
};

export default Grid;
