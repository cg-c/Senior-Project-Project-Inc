import { Link } from "react-router-dom";


export default function Navbar() {
    return(
        <nav className="nav">
            <Link to="/" className="home">
                Senior Project
            </Link>
            <ul>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/FAQ">FAQ</Link>
            </ul>
        </nav>
    )
}