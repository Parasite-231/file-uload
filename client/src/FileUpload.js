import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const user_id = 45

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('pdf', pdf);

    try {
        const response = await axios.post(`http://localhost:5000/upload/${user_id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <input type="file" accept=".pdf" onChange={handlePdfChange} />
      <button onClick={handleUpload}>Upload Files</button>
    </div>
  );
};

export default FileUpload;
