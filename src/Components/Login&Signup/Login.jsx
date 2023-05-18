import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Routers/AuthProvider";

const Login = () => {
  const { googleLogIn } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const loggedbygoogle = result.user;
        console.log(loggedbygoogle);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
          <div className="card-body">
            <h1 className="text-center text-3xl">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Login</button>
            </div>
            <h1 className="my-2">
              New to ToyHub, Please{" "}
              <Link className="text-red-600 ms-1" to="/signup">
                Register
              </Link>
            </h1>
            <div className="divider">OR</div>
            <div className="text-center">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-circle btn-info btn-outline"
              >
                <FaGoogle></FaGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
