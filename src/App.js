import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage/HomePage';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='home' element={<HomePage></HomePage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
