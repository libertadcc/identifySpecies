import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const handleBird = () => {
    navigate('/birds'); // Navegar a la ruta /about
  };
   const handleArth = () => {
    navigate('/arthropods'); // Navegar a la ruta /about
  };
  return (
    <>
      <h1>VizzuQuiz</h1>
      <div className="card">
        <button onClick={handleBird}>
          🐦 Aves
        </button>
        <button onClick={handleArth}>
          🐸 Artrópodos
        </button>
      </div>
    </>
  )
}

export default App
