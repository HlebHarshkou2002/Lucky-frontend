import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import SearchProducts from "./Pages/SearchProducts/SearchProducts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header email={"erichkrause2012@tut.by"} />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<SearchProducts />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Registration />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
