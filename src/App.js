// App.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import StatePage from "./components/StatePage";
import IndiaMap from "./components/IndiaMap";
import Calculator from "./components/WaterCalculator.js";
import StateComparison from "./components/stateComp.js";
import StateData from './data/StateData.json';

const Home = ({ setSelectedState }) => {
    function handleStateClick(stateName) {
        setSelectedState(stateName);
    }

    return (
        <div className="d-flex justify-content-between m-5">
            <div className="col-md-6 mt-4">
                <HeroSection />
            </div>
            <div className="right col-md-5">
                <IndiaMap onStateClick={handleStateClick} />
            </div>
        </div>
    );
};

const App = () => {
    const [selectedState, setSelectedState] = useState("Uttarakhand");
    const defaultState = 'Uttarakhand';
    return (
        <Router>
            <AppNavbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home setSelectedState={setSelectedState} />}
                />
                <Route path="/calculator" element={<Calculator />} />
                <Route
                    path="/"
                    element={<Navigate to={`/${defaultState}`} />} // Redirect to default state
                />
                <Route
                    path="/:selectedState"
                    element={<StatePage selectedState={selectedState} />}
                />
                <Route
                    path="/stateComparison"
                    element={<StateComparison stateData={StateData} />}
                />
            </Routes>
            <br></br>
            <Footer />
        </Router>
    );
};

export default App;
