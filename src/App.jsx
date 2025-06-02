import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const handleBird = () => {
    navigate('/birds'); 
  };
   const handleArth = () => {
    navigate('/arthropods');
  };
  const handleAmphib = () => {
    navigate('/amphibians')
  }
   const handleFishes = () => {
    navigate('/fishes')
  }
  return (
    <>
      <h1>VizzuQuiz</h1>
      <div className="card">
        <button onClick={handleBird}>
          🐦 Aves
        </button>
        <button onClick={handleArth}>
          🕷️ Artrópodos
        </button>
        <button onClick={handleAmphib}>
          🐸 Anfibios
        </button>
        <button onClick={handleFishes}>
          🐠 Peces
        </button>
      </div>
    </>
  )
}

export default App
