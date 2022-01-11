import './App.css';
import {NavLink, Outlet} from 'react-router-dom'
import Footer from './components/Footer';


function App() {

  const navStyles = {
    textDecoration: "none",
    color: "black",
    margin: 5,
    textTransform: "uppercase"
  }

  return (
    <div className="app" style={{minHeight: "100vh", position: "relative"}}>
      <h1 style={{marginLeft: 50}}>The Plumbing Guys</h1>
      <nav style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <NavLink to="/home" style={({ isActive }) => {
          return {
            ...navStyles,
            borderBottom: isActive ? "1px solid black" : "none",

          }
        }}>Home</NavLink>
        <NavLink to="/services" style={({ isActive }) => {
          return {
            ...navStyles,
            borderBottom: isActive ? "1px solid black" : "none",

          }
        }}>Services</NavLink>
        <NavLink to="/about" style={({ isActive }) => {
          return {
            ...navStyles,
            borderBottom: isActive ? "1px solid black" : "none",
          }
        }}>About</NavLink>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
