import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Routers/AuthProvider";

const Signup = () => {
  const { newUser } = useContext(AuthContext);
  return (
    <>
      <div className="hero min-h-screen">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
          <div className="card-body">
            <h1 className="text-center text-3xl">Sign Up</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="photo-url"
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">SignUp</button>
              </div>
            </form>
            <h1 className="my-2">
              Already Have an Account,
              <Link className="text-red-600 ms-1" to="/login">
                Login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
