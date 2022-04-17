import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage/HomePage';
import Login from './pages/login/Login/Login';
import Register from './pages/login/Register/Register';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='home' element={<HomePage></HomePage>}></Route>
        <Route path='services/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
