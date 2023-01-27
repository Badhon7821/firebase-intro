import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="bg-slate-400">
      <div className="flex container mx-auto justify-between items-center py-7 bg-slate-400 text-stone-700">
        <Link className="text-xl font-semibold" to="/">
          FirebaseCase
        </Link>

        <ul className="links flex items-center">
          <li>
            <Link
              className="px-5 text-lg hover:text-gray-100 duration-200"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="px-5 text-lg hover:text-gray-100 duration-300"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="px-5 text-lg hover:text-gray-100 duration-300"
              to="/profile"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="px-5 text-lg hover:text-gray-100 duration-300"
              to={`/${user?.email ? "profile" : "login"}`}
            >
              {user?.email ? `welcome, ${user?.displayName}` : "login"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
