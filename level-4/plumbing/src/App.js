import './App.css'
import {NavLink, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './routes/Home'
import Services from './routes/Services'
import About from './routes/About'


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
        <NavLink to="/" style={({ isActive }) => {
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
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
