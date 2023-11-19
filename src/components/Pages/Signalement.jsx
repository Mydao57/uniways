import { Link, redirect, useNavigate } from "react-router-dom";
import logo from "../../assets/uniways-transparent.png";
import { useState } from "react";
import axios from "axios";
import user from "../../assets/user.png"


export const Signalement = () => {
  const [busName, setBusName] = useState("");
  const [affluence, setAffluence] = useState("");
  const navigate = useNavigate();

  const handleBusNameChange = (e) => {
    setBusName(e.target.value);
  };

  const handleAffluenceChange = (e) => {
    setAffluence(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://51.38.114.90:3333/enregistrer", {"bus": busName, "affluence": affluence})
      .then((response) => {
        // Gérez la réponse réussie ici
        console.log("Réponse du serveur:", response.data);
        navigate('/map')
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Erreur lors de la requête POST:", error);
      });
  };

  const handleClick = () => {
    navigate("/profil");
  };

  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo à gauche */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              width={120}
              height={50}
              className="mr-2"
            />
            <div className="ml-10">
              <Link
                to="/map"
                className="text-black hover:text-black transition duration-300"
              >
                Carte interactive
              </Link>
            </div>
          </div>

          {/* Texte avec lien au centre */}

          {/* Cercle avec avatar à droite */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-500 rounded-full overflow-hidden cursor-pointer" onClick={handleClick}>
              <img
                src={user}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Informations sur le bus</h2>

        <div className="mb-4">
          <label
            htmlFor="busName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nom du bus
          </label>
          <input
            type="text"
            id="busName"
            value={busName}
            onChange={handleBusNameChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="affluence"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Affluence
          </label>
          <select
            id="affluence"
            value={affluence}
            onChange={handleAffluenceChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Sélectionnez une affluence</option>
            <option value="faible">Faible</option>
            <option value="modérée">Modérée</option>
            <option value="élevée">Élevée</option>
          </select>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
};
