import React from "react";

interface CartProps {
  imageSrc: string;
  title: string;
  buttonText: string;
  onClick: () => void;
}

const Cart: React.FC<CartProps> = ({
  imageSrc,
  title,
  buttonText,
  onClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p className="text-md  mb-2">{title}</p>
      <p
        className=" text-black px-4 py-2 rounded-lg underline"
        onClick={onClick}
      >
        {buttonText}
      </p>
    </div>
  );
};

export default Cart;
