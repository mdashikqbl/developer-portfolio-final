
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Componants/Navbar/Navbar';
import Home from './Componants/Home/Home';
import Blogs from './Componants/Blogs/Blogs';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blog' element={<Blogs></Blogs>}></Route>
      </Routes>
      <ToastContainer />


    </div>
  );
}

export default App;
