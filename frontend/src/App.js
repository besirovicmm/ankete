import HomeScreen from './Screen/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import Anketascreen from './Screen/Anketascreen'
import SignUp from './Screen/SignUp'
import Login from './Screen/Login'
import AnketeKorisnika from './Screen/AnketeKorisnika'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/anketa/:id" element={<Anketascreen />} />
        <Route path="/ankete-korisnika/" element={<AnketeKorisnika />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
