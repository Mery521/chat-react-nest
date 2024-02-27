import React from "react";
import { Link } from "react-router-dom";
import './App.css';

// import { Nav, Button } from "react-bootstrap"
//
function NavBar() {
        return (
            <>
                <div className="nav">
                    <ul>

                            <Link to="/login">
                                <input
                                    type="button"
                                    className="sideButton sideBarText"
                                    value="Login"
                                />
                            </Link>

                            <Link to="/signup">
                                <input
                                    type="button"
                                    className="sideButton2 sideBarText2"
                                    value="Signup"
                                />
                            </Link>

                    </ul>
                </div>
            </>
        );
}
export default NavBar