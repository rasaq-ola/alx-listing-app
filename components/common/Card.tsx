import React from 'react';

// This defines the shape of data the Card expects
type CardProps = {
  title: string;        // Title of the card
  description: string;  // Short text description
  imageUrl: string;     // URL of the image to show
};

// A functional component called Card that takes props as input
const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
