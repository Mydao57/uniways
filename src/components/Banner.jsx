import { Link } from "react-router-dom";
import logo from "../assets/uniways-transparent.png";

const HeroBanner = () => {
  return (
    <div
      className=" min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
      }}
    >
      <div className="text-white text-center">
        <img
          src={logo}
          alt="Logo"
          className="mx-auto mb-4"
          width={380}
          height={170}
        />
        <h1 className="text-4xl font-bold text-black">
          Seul on va vite,
          <br />
          Unis on va plus loin
        </h1>
        <div className="mt-10">
          <Link to="/login" className="px-5 py-3 mx-2 my-2 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700">
            S'inscrire
          </Link>
          <Link to="/login" className="px-5 py-3 mx-2 my-4 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
