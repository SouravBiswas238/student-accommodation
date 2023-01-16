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
import AddOtherCost from './components/Dashboard/AddOtherCost/AddOtherCost';
import AddMealCost from './components/Dashboard/AddMealCost/AddMealCost';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AdminOutlet from './components/AdminDashboard/AdminOutlet/AdminOutlet';
import { UserStoreProvider } from './StateManagment/UserContexStore';
import AddMeal from './components/Dashboard/AddMeal/AddMeal';
import 'react-toastify/dist/ReactToastify.css';
import TodaysMeal from './components/AdminDashboard/TodaysMeal/TodaysMeal';



function App() {
  return (
    <div>
      <UserStoreProvider>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>


          <Route path="/admin" element={<AdminDashboard />}>

            <Route index element={<AdminOutlet></AdminOutlet>} ></Route>
            {/* <Route path='add-request' element={<AddMember></AddMember>} ></Route> */}


          </Route>

          <Route path="/dashboard" element={<Dashboard />}>

            <Route index element={<Outlet></Outlet>} ></Route>
            <Route path='add-member' element={<AddMember></AddMember>} ></Route>
            <Route path='mealCost' element={<AddMealCost></AddMealCost>} ></Route>
            <Route path='addMeal' element={<AddMeal></AddMeal>} ></Route>
            <Route path='addCost' element={<AddOtherCost></AddOtherCost>} ></Route>


          </Route>
          <Route path="/admin" element={<AdminDashboard />}>

            <Route index element={<AdminOutlet></AdminOutlet>} ></Route>
            <Route path='today-on-meal' element={<TodaysMeal></TodaysMeal>} ></Route>



          </Route>


        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </UserStoreProvider>
    </div>
  );
}

export default App;
