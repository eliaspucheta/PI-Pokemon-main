import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";
import Home from "../Components/Home/Home";
import PokemonForm from "../Components/PokemonForm/PokemonForm";
import Detail from "../Components/Detail/Detail";
import Error404 from "../Components/Error404/Error404";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider>

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/create" element={<PokemonForm/>} />
          <Route exact path="/pokemon/:id" element={<Detail/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
