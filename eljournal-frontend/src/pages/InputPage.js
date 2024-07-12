// src/pages/InputPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputPage = () => {
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (url) {
      navigate(`/display?url=${encodeURIComponent(url)}`);
    } else if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        navigate(`/display?file=${encodeURIComponent(reader.result)}`);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Input XML/RSS URL or File</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter RSS/XML URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">or Upload File:</label>
          <input
            type="file"
            accept=".xml"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputPage;
