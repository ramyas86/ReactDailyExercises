import React from 'react';
import Jeopardy from './components/jeopardy';
import AboutMe from './components/AboutMe';
import Training from './components/Training';
import MyNavbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNoNav from './AppNoNav';
import AppWithNav from './AppWithNav';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';


function App() {
  return (
    <AppWithNav></AppWithNav>
  );
}

export default App;
