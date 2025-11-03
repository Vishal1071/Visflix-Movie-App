import './Header.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ setSearchTearm }) => {
    const [ison, setIson] = useState(true);
    const [showmenu, setShowmenu] = useState(false);

    const handelmenu =()=>{
        setShowmenu(!showmenu);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
                <div className="container-fluid">
                    <a className="navbar-brand pe-5 me-5" href="#"><b>VishFlix</b></a>

                    <div className="toggle-switch"
                        style={{ backgroundColor: ison ? "#daf7ffff " : "#434343ff" }}
                        onClick={() => setIson(!ison)}>
                        <div className={`switch ${ison ? "ON" : "OFF"}`}>
                            <span className='switch-state'>{ison ? "ON" : "OFF"}</span>
                        </div>
                    </div>

                    <div className={showmenu ? "menu-mobile" : "menu-web"} >
                        <ul className="navbar-nav ">
                            <li className="nav-item pe-4">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item pe-4">
                                <Link className="nav-link" to="/movies">Movies</Link>
                            </li>
                            <li className="nav-item pe-4">
                                <Link className="nav-link" to="/contect">Contect</Link>
                            </li>
                            <li className="nav-item dropdown pe-4 dropend">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2"
                            type="search"
                            placeholder="Search....."
                            onChange={(e) => { setSearchTearm(e.target.value) }}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <div className='ham-menu'>
                        <button onClick={handelmenu}>
                        <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
