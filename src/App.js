// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserSignup from './pages/user-signup/user-signup';
import CitySignup from './pages/city-signup/city-signup';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/go/:code' element={<UserSignup />} />
      <Route path='/city-signup' element={<CitySignup></CitySignup>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
