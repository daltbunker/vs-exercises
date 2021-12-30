import './App.css';
import Navbar from './components/Navbar'
import BookingForm from './components/BookingForm'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Cart />
        <BookingForm />
      </div>
    </div>
  );
}

export default App;
