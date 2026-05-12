// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserSignup from './pages/user-signup/user-signup';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/go/:code' element={<UserSignup />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
