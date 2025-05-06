import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {
  // Check if images exist and log any errors
  useEffect(() => {
    const checkImages = async () => {
      const imageUrls = [
        "/images/car1.jpg", 
        "/images/car2.jpg", 
        "/images/house1.jpg", 
        "/images/house2.jpg", 
        "/images/yatch1.jpg", 
        "/images/yatch2.jpg"
      ];
      
      console.log("Checking for images in the public/images directory...");
      
      for (const url of imageUrls) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            console.error(`Image not found: ${url}`);
          } else {
            console.log(`Image found: ${url}`);
          }
        } catch (error) {
          console.error(`Error checking image ${url}:`, error);
        }
      }
    };
    
    checkImages();
  }, []);
  // Your specific image data with categories
  const imageData = [
    { id: 1, src: "/images/car1.jpg", alt: "Car 1", category: "car" },
    { id: 2, src: "/images/car2.jpg", alt: "Car 2", category: "car" },
    { id: 3, src: "/images/house1.jpg", alt: "House 1", category: "house" },
    { id: 4, src: "/images/house2.jpg", alt: "House 2", category: "house" },
    { id: 5, src: "/images/yatch1.jpg", alt: "Yacht 1", category: "yacht" },
    { id: 6, src: "/images/yatch2.jpg", alt: "Yacht 2", category: "yacht" }
  ];

  // Get unique categories
  const categories = ['all', ...new Set(imageData.map(img => img.category))];
  
  // State for current filter
  const [filter, setFilter] = useState('all');

  // Filter images based on selected category
  const filteredImages = filter === 'all' 
    ? imageData 
    : imageData.filter(img => img.category === filter);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h1>
      
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md capitalize ${
              filter === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map(image => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative pb-2/3">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
              <div className="bg-black bg-opacity-50 text-white px-2 py-1 text-sm absolute bottom-0 right-0 rounded-tl-md">
                {image.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;