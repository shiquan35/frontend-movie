import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { IndivMovie } from "./pages/IndivMovie";
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <Link to="/">Main Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/movies">
            <Route path=":movieName" element={<IndivMovie />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
