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
import Cart from "./Pages/Cart/Cart";
import FullProduct from "./Pages/FullProduct/FullProduct";
import Profile from "./Pages/Profile/Profile";
import MyOrders from "./Pages/MyOrders/MyOrders";
import FullOrder from "./Pages/FullOrder/FullOrder";

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
            <Route path="/" element={<Home searchValue={searchValue}/>} />
            <Route path="/products" element={<SearchProducts searchValue={searchValue}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/basket" element={<Cart />} /> 
            <Route path="/products/:id" element={<FullProduct />} /> 
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/orders/user/:id" element={<MyOrders />} /> 
            <Route path="/orders/:id" element={<FullOrder />} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
