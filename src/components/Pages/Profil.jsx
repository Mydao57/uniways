import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/uniways-transparent.png";
import user from "../../assets/user.png";

export const Profil = () => {
  const accountInfo = {
    username: "HugoThiebaut",
    email: "hugothiebaut22@gmail.com",
    points: 1789, // Le nombre de points pour la barre de progression
  };

  const progressPercentage = (accountInfo.points / 10000) * 100;

  return (
    <>
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
            <div className="w-8 h-8 bg-gray-500 rounded-full overflow-hidden hover:cursor-pointer">
              <img
                src={user}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-8">
        {/* Profile Section */}
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{accountInfo.username}</h2>
            <p className="text-gray-600 mb-2">{accountInfo.email}</p>
          </div>
        </div>

        {/* Points Section */}
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mt-4">
          <div className="p-6">
            {/* Barre de progression */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    Points
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-teal-600">
                    {accountInfo.points} / {10000}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 ml-4">
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-teal-200 rounded-full">
                      <div
                        className="text-xs leading-none text-white bg-teal-500 py-1 rounded-full"
                        style={{ width: `${progressPercentage}%` }}
                      >
                        {/* Texte ou icône de progression */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 flex flex-wrap justify-center">
          {/* Carte Bon d'achat 1 */}
          <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md m-4">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">5€ chez .......................</h2>
              <p>1000 points................</p>
              {/* Ajoutez d'autres informations spécifiques à votre bon d'achat */}
            </div>
          </div>

          {/* Carte Bon d'achat 2 */}
          <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-md m-4">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">10 € chez .................</h2>
              <p>2000 points ........................</p>
              {/* Ajoutez d'autres informations spécifiques à votre bon d'achat */}
            </div>
          </div>

          {/* Ajoutez d'autres cartes de bons d'achat au besoin */}
        </div>
      </div>
    </>
  );
};
