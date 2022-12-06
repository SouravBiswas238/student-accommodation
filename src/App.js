import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Login from './components/Login/Login';
import Sidebar from './components/sidebar/Sidebar';
import SignUp from './components/SingUp/SignUp';


function App() {
  return (
    <div>

      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/dashboard" element={<Sidebar />}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
