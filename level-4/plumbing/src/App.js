import './App.css';
import {Link, Outlet} from 'react-router-dom'
import Footer from './components/Footer';

const navStyles = {
  textDecoration: "none",
  color: "black",
  borderBottom: "1px solid black",
  margin: 5,
  textTransform: "uppercase"


}

function App() {
  return (
    <div className="app" style={{minHeight: "100vh", position: "relative"}}>
      <h1 style={{marginLeft: 15}}>The Plumbing Guys</h1>
      <nav style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Link to="/home" style={navStyles}>Home</Link>
        <Link to="/services" style={navStyles}>Services</Link>
        <Link to="/about" style={navStyles}>About</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
