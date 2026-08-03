import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({ OnLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname | "/about";
  function handleLogin() {
    OnLogin();
    navigate(from, { replace: true });
  }

  return (
    <div className="flex justify-center mt-15">
      <div className=" flex flex-col justify-center items-center gap-4 md:w-200 border rounded-2xl bg-gray-100 p-4  ">
        <h1>Login(Landia)</h1>
        <input
          type="email"
          placeholder=" enter your Email"
          className="border rounded-lg p-1 w-1/2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg p-1 w-1/2"
        />
        <div className="flex flex-row justify-center items-center gap-8">
          <button onClick={handleLogin}>Login</button>
          <p>or</p>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
