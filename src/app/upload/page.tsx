'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (file: File) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
      });
      
      const data = await response.json();
      setUrls(prev => [...prev, data.url]);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Загрузка изображений</h1>
      
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              uploadFile(file);
            }
          }}
        />
      </div>

      {loading && <p>Загрузка...</p>}

      {urls.length > 0 && (
        <div>
          <h2 className="text-xl mb-2">Загруженные изображения:</h2>
          <ul>
            {urls.map((url, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 