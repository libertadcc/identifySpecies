import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <h1>VizzuQuiz</h1>
      <div className="card">
        <button onClick={() => handleNavigate('/amphibians')}>
          🐸 Anfibios
        </button>
        <button onClick={() => handleNavigate('/arthropods')}>
          🕷️ Artrópodos
        </button>
        <button onClick={() => handleNavigate('/birds')}>
          🐦 Aves
        </button>
        <button onClick={() => handleNavigate('/fishes')}>
          🐠 Peces
        </button>
        <button onClick={() => handleNavigate('/fossils')}>
          🦖 Fósiles
        </button>
        <button onClick={() => handleNavigate('/invertebrates')}>
          🪱 Invertebrados
        </button>
        <button onClick={() => handleNavigate('/mammals')}>
          🦭 Mamíferos
        </button>
        <button onClick={() => handleNavigate('/plants')}>
          🌿 Plantas
        </button>
        <button onClick={() => handleNavigate('/reptiles')}>
          🦎 Reptiles
        </button>
        <button onClick={() => handleNavigate('/rocks')}>
          🪨 Rocas
        </button>
      </div>
    </>
  )
}

export default App
