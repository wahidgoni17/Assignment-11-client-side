import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Routers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { updateTitle } from "../Title/Title";
const auth = getAuth();
const Signup = () => {
  const { newUser } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    const route = location.pathname
    updateTitle(route)
  },[location])
  const handleSignUp = (event) =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const name = form.name.value
    const photo = form.photo.value
    newUser(email, password)
    .then(result=>{
        updateProfile(auth.currentUser,{
          displayName: name,
          photoURL: photo
        })
        navigate('/')
    })
    .catch(error=>{
        console.log(error)
    })
    Swal.fire(
      'Successful!',
      'Sign Up Successfully',
      'success'
    )
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
