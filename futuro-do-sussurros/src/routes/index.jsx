import HomePage from '../pages/HomePage/index.jsx'
import FluxoGame from '../pages/FluxoGame/index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/fluxo' element={<FluxoGame />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes