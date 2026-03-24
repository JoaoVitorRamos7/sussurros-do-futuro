import './index.css'
import './App.css'
import Home from './components/pages/Home.jsx'
import FluxoGame from  './components/pages/Fluxo-game.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/fluxo' element={<FluxoGame/>}/>
      </Routes>
    </Router>
  )
}

export default App
