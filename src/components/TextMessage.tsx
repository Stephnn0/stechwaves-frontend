import React from "react";

interface TextMessageProps {
  description: string;
}

const TextMessage: React.FC<TextMessageProps> = ({ description }) => {
  return (
    <div className=" p-10 rounded-lg shadow-lg text-center ">
      <p className="text-3xl font-bold  text-black mb-6">{description}</p>
      <p className="text-lg text-gray-700 ">
        Whatever your industry, we offer solutions to modernize your business,
        save time, and lower costs.
      </p>
    </div>
  );
};

export default TextMessage;
