import React from "react";
import { Link } from "react-router-dom";

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
  // Function to limit the paragraph to 100 words
  const limitParagraph = (text: string) => {
    const words = text.split(" ");
    if (words.length > 100) {
      return words.slice(0, 100).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p
        className="text-md mb-2"
        style={{ maxHeight: "100px", overflow: "hidden" }}
      >
        {limitParagraph(title)}
      </p>
      <Link to={"/consulting"}>
        <p className="text-black py-2 rounded-lg underline" onClick={onClick}>
          {buttonText}
        </p>
      </Link>
    </div>
  );
};

export default Cart;
