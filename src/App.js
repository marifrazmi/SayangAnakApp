import {  Route, Routes, NavLink, Navigate } from "react-router-dom";
import React from 'react';
import './App.css';
import './About/About';
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineQq } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Home from "./Home/Home";
import About from "./About/About";
import Main from "./Main/Main";
import Details from "./Details/Details";
import Search from "./Search/Search";
import Detail2 from "./Detail2/Detail2";
import Animal from"./Group/Animal";
import Special from"./Group/Special";
import Pokemon from"./Group/Pokemon";

function App() {
  return (
    <>
      <header>
        <img src="/TOSA.png" alt="logo"/>
        <a href="./Home" id="titleGroup">SayangAnak</a>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Pokemon" element={<Pokemon />}></Route>
          <Route path="/Special" element={<Special />}></Route>
          <Route path="/Animal" element={<Animal />}></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/Cardsdetails/:id" element={<Details/>}></Route>
          <Route path="/Detail2/:color" element={<Detail2/>}></Route>
        </Routes>
      </div>
      <footer>
        <NavLink to="/Home" className="iconWrapper">
          <AiTwotoneHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/Main" className="iconWrapper">
          <AiOutlineQq className="icon" />
          Toys
        </NavLink>
        <NavLink to="/Search" className="iconWrapper">
          <FaSearch className="icon" />
          Search
        </NavLink>
        <NavLink to="/About" className="iconWrapper">
          <BsFillPersonFill className="icon" />
          About
        </NavLink>
      </footer>
  </>
  );
}

export default App;