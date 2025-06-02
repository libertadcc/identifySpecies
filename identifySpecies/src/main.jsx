import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import QuizGame from './components/QuizGame.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/birds" element={<QuizGame dataJSON={'birds.json'}/>} />
        <Route path="/arthropods" element={<QuizGame dataJSON={'arthropods.json'}/>} />
        <Route path="/amphibians" element={<QuizGame dataJSON={'amphibians.json'}/>} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

