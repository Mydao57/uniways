import HeroBanner from "./components/Banner";
import Login from "./components/Pages/Login";
import { Route, Routes } from "react-router-dom";
import { Carte } from "./components/Pages/Carte";
import { Signalement } from "./components/Pages/Signalement";
import { Profil } from "./components/Pages/Profil";
import { Borne } from "./components/Pages/Borne";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroBanner />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />
      <Route path="/map" element={<Carte />} />
      <Route path="/signalement" element={<Signalement />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/borne" element={<Borne />} />
    </Routes>
  );
  {
    /* <Login /> */
  }
  {
    /* <HeroBanner /> */
  }

  {
    /* <h1 className="text-3xl text-red-400">Leaflet</h1>
     */
  }
}

export default App;
