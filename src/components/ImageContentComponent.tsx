import React from "react";
import { Link } from "react-router-dom";

interface ImageContentProps {
  imageUrl: string;
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
  onButton1Click: () => void;
  onButton2Click: () => void;
}

const ImageContentComponent: React.FC<ImageContentProps> = ({
  imageUrl,
  title,
  description,
  button1Text,
  button2Text,
  onButton1Click,
  onButton2Click,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch ">
      <div className="md:w-1/2 px-8 py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link to={"/consulting"}>
            <button
              className="border-2 border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-700 px-8 py-3 rounded-lg transition-colors duration-300 ease-in-out"
              onClick={onButton1Click}
            >
              {button1Text}
            </button>
          </Link>

          <Link to={"/consulting"}>
            <button
              className="border-2 border-green-500 hover:border-green-600 text-green-500 hover:text-green-700 px-8 py-3 rounded-lg transition-colors duration-300 ease-in-out"
              onClick={onButton2Click}
            >
              {button2Text}
            </button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full h-auto md:h-full object-cover  md:rounded"
        />
      </div>
    </div>
  );
};

export default ImageContentComponent;
