import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import QuizGame from './components/QuizGame.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter  basename="/identifySpecies/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/amphibians" element={<QuizGame dataJSON={'amphibians.json'}/>} />
        <Route path="/arthropods" element={<QuizGame dataJSON={'arthropods.json'}/>} />
        <Route path="/birds" element={<QuizGame dataJSON={'birds.json'}/>} />
        <Route path="/fishes" element={<QuizGame dataJSON={'fishes.json'}/>} />
        <Route path="/fossils" element={<QuizGame dataJSON={'fossils.json'}/>} />
        <Route path="/invertebrates" element={<QuizGame dataJSON={'invert.json'}/>} />
        <Route path="/mammals" element={<QuizGame dataJSON={'mammals.json'}/>} />
        <Route path="/plants" element={<QuizGame dataJSON={'plants.json'}/>} />
        <Route path="/reptiles" element={<QuizGame dataJSON={'reptiles.json'}/>} />
        <Route path="/rocks" element={<QuizGame dataJSON={'rocks.json'}/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

