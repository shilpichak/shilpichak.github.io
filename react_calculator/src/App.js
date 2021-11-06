import React from 'react';
import logo from './logo.svg';
//import './App.css';
import { Suspense,lazy } from 'react';
import Header from './components/header.js';
import Sidebar from './components/sidebar.js';
//import About from './pages/about.js';
//import Home from './pages/home.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Suspense>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </BrowserRouter>

    </>
  );
}

export default App;
