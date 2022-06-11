
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Componants/Navbar/Navbar';
import Home from './Componants/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Routes>
        <Route></Route>
      </Routes>


    </div>
  );
}

export default App;
