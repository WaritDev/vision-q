'use client';

import { useState } from 'react';
import { detectPerson } from '../utils/api';

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) return;

    setLoading(true);
    try {
      const data = await detectPerson(selectedImage);
      setResult(data);
    } catch (error) {
      console.error('Error detecting person:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/jpeg,image/jpg"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500"
        />
        <button
          type="submit"
          disabled={!selectedImage || loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          {loading ? 'Processing...' : 'Detect Person'}
        </button>
      </form>

      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Results:</h3>
          <pre className="mt-2 p-4 bg-gray-100 rounded overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
          {result.human_img && (
            <img
              src={result.human_img}
              alt="Detected persons"
              className="mt-4 max-w-full h-auto"
            />
          )}
        </div>
      )}
    </div>
  );
}