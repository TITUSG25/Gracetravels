import "./App.css";
import Admin from "./Navbar/admin";
import Booking from "./Navbar/booking";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Read from './Navbar/Read'
import Update from './Navbar/update'
import Create from "./Navbar/Create";


const navLink = {
  color:  'White' ,
  textDecoration: 'none',

};

function App() {
  return (
     <>
     <Router>
          <div className="right" >
          <div className="logo">   <h3>Grace Travels</h3></div>
                <NavLink to="/booking" style={navLink}><h3>Home</h3></NavLink>
                <NavLink to="/admin" style={navLink}><h3>Admin</h3></NavLink>
                <NavLink to="/Create" style={navLink}><h3>Reserve</h3></NavLink>
          </div>
          
          <Routes>
            <Route path="/booking" exact element={<Booking />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Create" element={<Create />} />
            <Route  path='/update' element={<Update/>}/>
            <Route  path='/Read' element={<Read/>}/>
          </Routes>
    </Router>
    </>
  );
}

export default App;
