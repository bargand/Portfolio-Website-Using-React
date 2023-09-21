import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<About/>} path='/about'/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    {/* <Navbar/>
    <Home/>
    <Footer/> */}
    </>
  );
}

export default App;
