import { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <Link to="/">Main Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />

          {/* Nested Routes */}
        </Routes>
      </div>
    </>
  );
}

export default App;
