import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
 
export default function Router1() {
  return(
    <Router>
    <div className="Apps">
     
      <Navbar/>
      <Routes>
       <Route path="/" exact element={<Home/>}/>
        <Route path="/about"  element={<About/>}/ >
   
        </Routes>
     
 
    </div>
    </Router>
  );
}
