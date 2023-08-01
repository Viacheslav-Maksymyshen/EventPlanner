import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEventPage from "./pages/CreateEventPage";
import EventPage from "./pages/EventPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/create">Створити подію</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/event/:eventId" element={<EventPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
