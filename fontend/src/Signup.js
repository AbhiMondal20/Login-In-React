import React from "react";
import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios';

function Signup() {
    
  const [values, setValues ] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [errors, setErroes] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErroes(Validation(values));
    if(errors.name ==="" && errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
        navigate('/');
      })
    }
  };

  return (
    <div className="container-floud">
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Sign Up</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                className="form-control rounded-0 shadow-none"
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={handleInput}
              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                className="form-control rounded-0 shadow-none"
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="Password">
                <strong>Password</strong>
              </label>
              <input
                className="form-control rounded-0 shadow-none"
                type="Password"
                placeholder="Enter Password"
                name="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              <strong>Sign Up</strong>
            </button>
            <p>You are agree to our terms and condition</p>
            <Link
              to="/"
              className="btn btn-default border w-100 rounded-0 text-decoration-none"
            >
              Log In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
