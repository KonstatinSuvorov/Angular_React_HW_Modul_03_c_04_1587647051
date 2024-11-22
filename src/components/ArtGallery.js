import React from 'react';

function ArtGallery({ artworks, onArtClick }) {
  return (
    <div className="art-gallery">
      {artworks.map((art) => (
        <img
          key={art.id}
          src={art.thumbnailUrl}
          alt={art.title}
          className="art-thumbnail"
          onClick={() => onArtClick(art)}
        />
      ))}
    </div>
  );
}

export default ArtGallery;
