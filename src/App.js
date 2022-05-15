import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Inventory from './component/inventory/Inventory';
import ManageItems from './component/ManageItems/ManageItems';
import Manageitems from './component/ManageItems/ManageItems';
import UpdateItem from './component/ManageItems/update/UpdateItem';
import About from './page/About/About';
import AddItem from './page/addItem/AddItem';
import Blog from './page/Blog/Blog';
import Home from './page/Home/Home'
import Login from './page/Login/Login';
import NotFound from './page/Notfound/NotFound';
import Register from './page/Register/Register';
import RequireAuth from './page/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageItem" element={<ManageItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addItem" element={
          <RequireAuth><AddItem /></RequireAuth>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/manageItem/:manageItemId" element={<RequireAuth><UpdateItem /></RequireAuth>} />
        <Route path="/about" element={<About />} />
        <Route path="/inventories" element={<Inventory />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
