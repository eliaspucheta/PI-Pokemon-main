import { NavLink } from "react-router-dom"
import './LandingPage.css'

export default function LandingPage() {


    return (
        
        
        <div>
            <h1>
                Esto seria la LandingPage
            </h1>
            <h1>
                Bienvenido!!
            </h1>
            
            <br />

            <div>

            <NavLink className="btn" to="/home">Home</NavLink>

            </div>

            
        
        </div>
    )
}