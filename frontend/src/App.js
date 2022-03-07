import HomeScreen from "./Screen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Anketascreen from "./Screen/Anketascreen";
import SignUp from "./Screen/SignUp";
import Login from "./Screen/Login";
import AnketeKorisnika from "./Screen/AnketeKorisnika";
import NavBar from "./Komponente/NavBar";
import KreirajAnketu from "./Screen/KreirajAnketu";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/anketa/:id" element={<Anketascreen />} />
        <Route path="/ankete-korisnika/" element={<AnketeKorisnika />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/kreirajAnkete" element={<KreirajAnketu />} /> */}
      </Routes>
    </div>
  );
}

export default App;
