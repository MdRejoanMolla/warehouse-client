import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import About from './page/About/About';
import Blog from './page/Blog/Blog';
import Home from './page/Home/Home'
import Login from './page/Login/Login';
import NotFound from './page/Notfound/NotFound';
import Register from './page/Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
