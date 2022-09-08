import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home';
import StudentSignin from './pages/StudentSignin';
import StudentSignup from './pages/StudentSignup';
import LecturerSignin from './pages/LecturerSignin';
import LecturerSignup from './pages/LecturerSignup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/signin" element={<StudentSignin />} />
        <Route path="/signup" element={<StudentSignup />} />
        <Route path="/sign_in" element={<LecturerSignin />} />
        <Route path="/sign_up" element={<LecturerSignup />} />
      </Routes>
    </div>
  );
}

export default App;
