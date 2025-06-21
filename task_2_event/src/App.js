// src/App.js
import { Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import EventDetail from "./view/EventDetail";
import MyEvents from "./view/MyEvents";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#E1E0DF]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/my-events" element={<MyEvents />} />
      </Routes>
    </div>
  );
}

export default App;
