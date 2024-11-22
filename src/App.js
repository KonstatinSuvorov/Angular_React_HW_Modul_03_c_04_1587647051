import React, { useState, useEffect } from 'react';
import ArtGallery from './components/ArtGallery';
import ArtCard from './components/ArtCard';
import artService from './services/ArtService';
import './App.css';

function App() {
  const [artworks, setArtworks] = useState([]);
  const [selectedArt, setSelectedArt] = useState(null);

  useEffect(() => {
    // Загрузка данных о картинах
    const artworksData = artService.getArtworks();
    setArtworks(artworksData);
  }, []);

  return (
    <div className="App">
      <h1>Картинная галерея</h1>
      {selectedArt ? (
        <ArtCard art={selectedArt} />
      ) : (
        <ArtGallery artworks={artworks} onArtClick={setSelectedArt} />
      )}
      {selectedArt && (
        <button onClick={() => setSelectedArt(null)} className="back-button">
          Вернуться к галерее
        </button>
      )}
    </div>
  );
}

export default App;

