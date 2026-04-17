import { useState } from 'react'

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', description: 'Healthy Salad Bowl' },
  { id: 2, url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445', description: 'Fluffy Pancakes' },
  { id: 3, url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', description: 'Homemade Pizza' },
  { id: 4, url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe', description: 'Fresh Pasta' },
  { id: 5, url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd', description: 'Veggie Bowl' },
]

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)


function handleNext() {
  if (currentIndex < images.length - 1) {
    setCurrentIndex(currentIndex + 1)
  }
}

function handlePrevious() {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1)
  }
}

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        marginTop: '-70px'

    }}>
        <p style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '18px' }}>{images[currentIndex].description}</p>
        <div style={{
        width: '500px',
        height: '480px',
        overflow: 'hidden',
        borderRadius: '8px',
        marginBottom: '12px'
        }}>
        <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].description}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px', marginTop: '12px' }}>
        <button onClick={handlePrevious} style={{ padding: '10px 0', fontSize: '16px', width: '120px' }}>Previous</button>
        <button onClick={handleNext} style={{ padding: '10px 0', fontSize: '16px', width: '120px' }}>Next</button>
        </div>
    </div>
    )
}

export default Gallery