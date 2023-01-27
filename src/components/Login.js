import { useNavigate } from "react-router-dom";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const handleGoogleLogIn = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Github
  const handleGithubLogIn = () => {
    signInWithPopup(auth, providerGithub)
      .then((data) => {
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login container mx-auto py-10">
      <h2 className="section-title text-center text-4xl text-gray-500 mb-10 ">
        Login
      </h2>

      <div className="login-platforms flex flex-col gap-5 items-center">
        <button
          onClick={handleGoogleLogIn}
          className="google-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-medium hover:bg-slate-400 duration-300"
        >
          Log in with Google
        </button>
        <button
          onClick={handleGithubLogIn}
          className="google-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-medium hover:bg-slate-400 duration-300"
        >
          Log in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
