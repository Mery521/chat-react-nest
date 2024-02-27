import React, { useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import JoinChat from "./JoinChat";
import Signup from "./pages/Signup";
import NavBarPage from "./NavBar";

function App() {
    const [name, setName] = useState('');

    return (
        <div className="App">
            <BrowserRouter>
                <NavBarPage/>
                <div className="form-signin">
                    <Routes>
                        <Route path="/login" element={<Login setName={setName}/>}>
                        </Route>
                        <Route path="/signup" element={<Signup/>}></Route>
                        <Route path="/joinchat" element={<JoinChat name={name}/>}>
                        </Route>
                    </Routes>
                    </div>
            </BrowserRouter>
</div>
);
}

export default App;
