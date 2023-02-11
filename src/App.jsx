import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar2 from './components/Navbar2';

const App=()=>(
      <BrowserRouter>
      {/* <Navbar /> */}
      <Navbar2/>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
  );
export default App;