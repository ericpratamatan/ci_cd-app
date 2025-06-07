import { useEffect, useState } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const dummyPhotos = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      title: `Foto ${i + 1}`,
      description: `Ini adalah deskripsi dari Foto ${i + 1}.`, // Deskripsi ditambahkan
      thumbnailUrl: `https://picsum.photos/id/${i + 10}/300/200`
    }));
    setPhotos(dummyPhotos);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '40px' }}>Gambar Pemandangan</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {photos.map(photo => (
          <div
            key={photo.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03), rgba(0,0,0,1)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px' }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#444' }}>{photo.title}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;