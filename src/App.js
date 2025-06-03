import './App.css';

import { useEffect, useState } from 'react';

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, []);

  return (
    <div>
      <h1>Galeri Foto</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumnailUrl} alt={photo.title} width="150" />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
