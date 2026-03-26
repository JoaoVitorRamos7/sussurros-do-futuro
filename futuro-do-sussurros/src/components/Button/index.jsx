import { Link } from "react-router-dom"
import './Button.css'

function ButtonStartGame() {
    return (
        <Link to="/fluxo" id="button-start-game"> Jogue agora</Link>
    )
}

export default ButtonStartGame
