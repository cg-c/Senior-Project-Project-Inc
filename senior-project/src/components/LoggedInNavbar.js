import { Link } from "react-router-dom";


export default function LoggedNavbar() {
    return(
        <nav className="nav">
            <Link to="/" className="home">
                Make it dropdown burger
            </Link>
            <ul>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/FAQ">FAQ</Link>
            </ul>
        </nav>
    )
}