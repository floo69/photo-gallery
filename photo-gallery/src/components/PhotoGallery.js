import React, { useState } from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
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
    <div className="gallery-container">
      <h1 className="gallery-title">Photo Gallery</h1>
      
      {/* Category Filter Buttons */}
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`filter-button ${filter === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Image Grid */}
      <div className="image-grid">
        {filteredImages.map(image => (
          <div key={image.id} className="image-item">
            <div className="image-container">
              <img 
                src={image.src} 
                alt={image.alt}
              />
              <div className="image-category">
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