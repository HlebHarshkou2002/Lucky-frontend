import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import SearchProducts from "./Pages/SearchProducts/SearchProducts";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header email={"erichkrause2012@tut.by"}/>
        {/* <Home /> */}
        <SearchProducts />
        {/* <Login /> */}
        <Registration />
      </div>
    </div>
  );
}

export default App;
