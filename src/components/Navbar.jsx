import React from "react";
import logo from "../assets/uniways-transparent.png";
import { Link, useNavigate } from "react-router-dom";
import user from "../assets/user.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profil");
  };
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" width={120} height={50} className="mr-2" />
          <div className="ml-10">
            <Link
              to="/signalement"
              className="text-black hover:text-black transition duration-300"
            >
              Faire un signalement
            </Link>
          </div>
        </div>

        {/* Texte avec lien au centre */}

        {/* Cercle avec avatar à droite */}
        <div className="flex items-center">
          <div
            className="w-8 h-8 bg-gray-500 rounded-full overflow-hidden cursor-pointer"
            onClick={handleClick}
          >
            <img
              src={user}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
