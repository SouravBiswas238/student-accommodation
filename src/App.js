import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SingUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import AddMember from './components/Dashboard/AddMember/AddMember';
import Outlet from './components/Dashboard/Outlet/Outlet';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div>

      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/dashboard" element={<Dashboard />}>

          <Route index element={<Outlet></Outlet>} ></Route>
          <Route path='add-member' element={<AddMember></AddMember>} ></Route>


        </Route>


      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
