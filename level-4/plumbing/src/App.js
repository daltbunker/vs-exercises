import './App.css';
import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>The Plumbing Guys</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
