import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Routers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { googleLogIn, logIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    logIn(email, password)
    .then(result=>{
        const loggeduser = result.user
        navigate(from, {replace: true})
    })
    .catch(error=>[
        console.log(error)
    ])
    Swal.fire(
      'Successful!',
      'Log In Successfully',
      'success'
    )
  };
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const loggedbygoogle = result.user;
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
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-accent" type="submit" value="Login" />
              </div>
            </form>
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
