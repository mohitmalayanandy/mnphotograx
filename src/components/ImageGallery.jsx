import React from "react";

const ImageGallery = ({ images = [], onDelete }) => {
  return (
    <div className="row g-4">
      {images.map((image, index) => (
        <div className="col-md-4 col-sm-6" key={index}>
          <div className="gallery-item position-relative">
            <img
              src={image}
              alt={`Uploaded ${index}`}
              className="img-fluid rounded"
            />
            <button
              className="delete-btn"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;