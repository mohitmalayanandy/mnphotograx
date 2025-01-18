import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import ImageGallery from "./components/ImageGallery";
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (image) => {
    setImages((prevImages) => [...prevImages, image]);
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">MN PHOTOGRAPHY</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      <ImageGallery images={images} onDelete={handleImageDelete} />
    </div>
  );
};

export default App;