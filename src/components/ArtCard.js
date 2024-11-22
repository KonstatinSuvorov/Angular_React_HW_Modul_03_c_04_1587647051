import React from 'react';

// Компонент для отображения информации о картине
function ArtCard({ art }) {
  return (
    <div className="art-card">
      <h2>{art.title}</h2>
      <p><strong>Автор:</strong> {art.author}</p>
      <p><strong>Год создания:</strong> {art.year}</p>
      <p><strong>Размеры:</strong> {art.size}</p>
      <p><strong>Местоположение:</strong> {art.location}</p>
      <img src={art.imageUrl} alt={art.title} className="art-image" />
    </div>
  );
}

export default ArtCard;
