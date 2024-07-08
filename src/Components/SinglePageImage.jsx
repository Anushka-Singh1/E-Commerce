import React, { useState } from 'react';

function SinglePageImage({ images=[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); 

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  if (!images.length) {
    return <div className="text-center">No images available</div>;
  }

  return (
    <div className="flex gap-2">
      {/* Left Side: Array of images */}
      <div className="flex flex-col gap-2 ml-16">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={`Product image ${index + 1}`}
            className={`w-24 h-24 object-cover cursor-pointer border-2 ${index === selectedImageIndex ? 'border-fuchsia-600' : 'border-transparent'}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      {/* Right Side: Selected Image */}
      <div className="flex-1 flex justify-center items-center mb-20">
        <img
          src={images[selectedImageIndex]?.url} 
          alt={`Selected product image`}
          className="w-[50%] h-[50%] object-cover rounded-lg shadow-md "
        />
      </div>
    </div>
  );
}

export default SinglePageImage;
