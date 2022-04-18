import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage/HomePage';
import Login from './pages/login/Login/Login';
import Register from './pages/login/Register/Register';
import PrivatePage from './pages/PrivatePage/PrivatePage';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='home' element={<HomePage></HomePage>}></Route>
        <Route path='services/:serviceId' element={
          <PrivatePage>
            <ServiceDetail></ServiceDetail>
          </PrivatePage>
        }></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
