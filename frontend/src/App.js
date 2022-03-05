import HomeScreen from "./Screen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Anketascreen from "./Screen/Anketascreen";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/anketa/:id" element={<Anketascreen />} />
      </Routes>
    </div>
  );
}

export default App;
