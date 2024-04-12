import React from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  buttonText: string;
  features: { imageUrl: string; text: string }[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  buttonText,
  features,
}) => {
  return (
    <div className=" pt-16 rounded-lg shadow-lg text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-10">{description}</p>

      {/* Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300  mb-10">
        {buttonText}
      </button>

      {/* Features */}
      <div className="grid grid-cols-4 gap-1 lg:px-40">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img
              src={feature.imageUrl}
              alt={`Feature ${index + 1}`}
              className="w-16 h-16 rounded-full mb-2"
            />
            <p className="text-sm text-center">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
