import InteractionContainer from './components/InteractionContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Landing from "./components/Landing"
import UserProfile from './components/UserProfile';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/interaction" element={<InteractionContainer />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App

