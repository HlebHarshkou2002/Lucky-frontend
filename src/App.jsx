import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import SearchProducts from "./Pages/SearchProducts/SearchProducts";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import AdminProducts from "./Components/AdminProducts/AdminProducts";
import AddProduct from "./Components/AddProduct/AddProduct";
import Cart from "./Pages/Cart/Cart";
import SalesChart from "./Pages/SalesChart/SalesChart";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth);
  const [searchValue, setSearchValue] = React.useState('')

  console.log(searchValue)

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header email={userData.data?.email} searchValue={searchValue} setSearchValue={setSearchValue}/>
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/search" element={<SearchProducts searchValue={searchValue}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/basket" element={<Cart />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/products" element={<AdminProducts />} /> 
            <Route path="/admin/add-product" element={<AddProduct />} /> 
            <Route path="/admin/analysis" element={<SalesChart /> } /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
