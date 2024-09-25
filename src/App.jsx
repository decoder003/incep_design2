import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";

//import DataVisualization from "./screens/DataVisualization/DataVisualization";
import TopNavBar from "./components/TopNavBar/TopNavBar";
//import DataModelling from "./screens/DataModelling/DataModelling";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={     
              <TopNavBar>
                <HomeScreen />
              </TopNavBar>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
