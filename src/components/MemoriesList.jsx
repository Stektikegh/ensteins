'use client';

import { useEffect, useState } from 'react';

export default function MemoriesList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/images')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {images.map((img) => (
        <img key={img.public_id} src={img.secure_url} alt={img.public_id} width={200} />
      ))}
    </div>
  );
}
