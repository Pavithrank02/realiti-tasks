// src/App.js
import { Route, Routes } from "react-router-dom";
import Home from "./view/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/my-events" element={<MyEvents />} />
      </Routes>
    </>
  );
}

export default App;
