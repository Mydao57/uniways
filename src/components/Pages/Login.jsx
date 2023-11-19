import { useNavigate } from "react-router-dom";
import logo from "../../assets/uniways-transparent.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/map");
  };
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img src={logo} width={300} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Connexion à votre compte
            </h3>
            <p className="">
              Pas encore de compte ?{" "}
              <a
                href=""
                className="font-medium text-indigo-600 hover:text-indigo-500"
                
              >
                S'inscrire
              </a>
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Mot de passe</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          onClick={handleSubmit}
          >
            Connexion
          </button>
          <div className="text-center">
            <a href="javascript:void(0)" className="hover:text-indigo-600">
              Mot de passe oublié ?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
