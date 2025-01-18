import React from "react";

const ImageUpload = ({ onImageUpload }) => {
  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        onImageUpload(e.target.result);
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="mb-4 text-center">
      <input
        type="file"
        accept="image/*"
        className="form-control mb-3"
        style={{ maxWidth: "400px", margin: "auto" }}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ImageUpload;