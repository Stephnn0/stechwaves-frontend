import React from "react";

interface BannerMessageProps {
  message: string;
}

const BannerMessage: React.FC<BannerMessageProps> = ({ message }) => {
  return (
    <div className="bg-blue-800 text-white py-3 text-center mt-14">
      <p>{message}</p>
    </div>
  );
};

export default BannerMessage;
