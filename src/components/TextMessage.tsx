import React from "react";

interface TextMessageProps {
  description: string;
}

const TextMessage: React.FC<TextMessageProps> = ({ description }) => {
  return (
    <div className=" p-10 rounded-lg shadow-lg text-center ">
      <p className="text-3xl font-bold  text-black mb-6">{description}</p>
      <p className="text-lg text-gray-700 ">
        Boost your online presence and drive sales with our personalized Shopify
        apps. Tailored to fit your unique requirements, our solutions are
        designed to elevate your e-commerce game. Get started today!
      </p>
    </div>
  );
};

export default TextMessage;
