import { async } from "@firebase/util";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  // Kéo ra useContext
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl cursor-pointer font-bold">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white  px-6 py-2 rounded cursor-pointer">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button className="text-white  px-6 py-2 rounded cursor-pointer">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
