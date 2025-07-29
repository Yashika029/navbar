import { Link } from 'react-router'
import './Navbar.css'

function Navbar() {
    return (
        <div className="header">
            <div>
                <Link className="link" to="*/"><h2>Logo</h2></Link>
            </div>
            <div className="link-header" >
                <ul className="list-header " >
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar