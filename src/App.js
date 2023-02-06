import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;