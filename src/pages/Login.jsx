import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Bắt lỗi nào
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      // console.log("success");
      navigate("/");
    } catch (error) {
      console.log(error);

      setError(error.message);
      // console.log("fail");
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/39c8d004-e406-410f-a3b7-2f0a314307ef/VN-en-20221031-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/60 w-full h-full  fixed top-0 left-0"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto h-[450px]  py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {/* {error ? <p>{error}</p> : null} */}
              {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}

              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700 p-3 my-2 rounded "
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                ></input>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-700 p-3 my-2 rounded"
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                ></input>
                <button className="bg-red-500 py-3 my-6 rounded ">
                  Sign In
                </button>
                <div className=" flex  justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600 ">New to Netflix?</span>{" "}
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
