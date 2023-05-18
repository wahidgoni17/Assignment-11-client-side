import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Routers/AuthProvider";

const Signup = () => {
  const { newUser } = useContext(AuthContext);
  const handleSignUp = (event) =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const name = form.name.value
    const photo = form.photo.value
    newUser(email, password)
    .then(result=>{
        const registereduser = result.user
        console.log(registereduser)
    })
    .catch(error=>{
        console.log(error)
    })
    console.log(email, password, name, photo)
  }
  return (
    <>
      <div className="hero min-h-screen">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
          <div className="card-body">
            <h1 className="text-center text-3xl">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-white"
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
                  className="input input-bordered text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="photo-url"
                  className="input input-bordered text-white"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-accent" type="submit" value="SignUp" />
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
