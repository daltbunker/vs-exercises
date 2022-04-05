import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import IssuesProvider from './context/IssuesProvider';
import LoginModal from './components/LoginModal/LoginModal';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Create/Create';
import './App.css';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <IssuesProvider>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<LoginModal />}/>
              <Route path="home" element={<Home />}/>
              <Route path="profile" element={<Profile />}/>
              <Route path="create" element={<Create />}/>
            </Routes>
          </IssuesProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )

}

export default App;
