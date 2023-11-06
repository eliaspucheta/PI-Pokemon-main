import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingPage/Landingpage";
import HomePage from "./pages/home/HomePage";
import NavbarContainer from "./components/navbar/NavbarContainer";
import { useLocation } from "react-router-dom";
import DetailPage from "./pages/detailPage/DetailPage";
import CreatePokemonPage from "./pages/createPokemon/CreatePokemonPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname === "/" ? null : <NavbarContainer />}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
        <Route path="/pokemon/create" element={<CreatePokemonPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
