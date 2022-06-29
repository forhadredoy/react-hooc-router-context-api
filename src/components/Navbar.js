import { NavLink } from "react-router-dom";
import Nav from './Nav.module.css';

function Navbar() {
    return (
        <div className={Nav.nav}>
            <nav>
                <ul>
                    <li>
                       <NavLink to="/" className={Nav.ang}>Home </NavLink>
                    </li>
                    <li>
                       <NavLink to="/about" className={Nav.ang}>About </NavLink>
                    </li>
                    <li>
                       <NavLink to="/services" className={Nav.ang}>Services </NavLink>
                    </li>
                    <li>
                       <NavLink to="/hridoy/forhad" className={Nav.ang}>Services </NavLink>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Navbar;