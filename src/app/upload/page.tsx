'use client';

import { useState } from 'react';
import './styles.css';

export default function UploadPage() {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (file: File) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file
      });
      
      const data = await response.json();
      if (data.url) {
        setUrls(prev => [...prev, data.url]);
      } else {
        alert('Ошибка при загрузке файла');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Ошибка при загрузке файла');
    }
    setLoading(false);
  };

  return (
    <div className="upload-container">
      <h1>Загрузка изображений</h1>
      
      <div className="file-input-container">
        <input
          type="file"
          accept="image/*"
          className="file-input"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              uploadFile(file);
            }
          }}
        />
        <p className="help-text">Перетащите файл сюда или нажмите для выбора</p>
      </div>

      {loading && <div className="loading">Загрузка...</div>}

      {urls.length > 0 && (
        <div className="url-list">
          <h2>Загруженные изображения:</h2>
          <ul>
            {urls.map((url, index) => (
              <li key={index} className="url-item">
                <img src={url} alt={`Uploaded ${index + 1}`} className="preview-image" />
                <a href={url} target="_blank" rel="noopener noreferrer" className="url-link">
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