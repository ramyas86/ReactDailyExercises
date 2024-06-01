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
    <Router>
      <MyNavbar />
    <Routes>
      <Route Component={PageNotFound}></Route>
      <Route path="/" Component={Home}></Route>
      <Route path="/jeopardy" Component={Jeopardy}></Route>
      <Route path="/about" Component={AboutMe}></Route>
      <Route path="/training" Component={Training}></Route>
      <Route path="*" Component={PageNotFound}></Route>

    </Routes>
  </Router>);
}

export default App;
