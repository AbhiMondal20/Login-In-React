import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
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
  };

  return (
    <div className="container-floud">
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Log In</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                className="form-control rounded-0 shadow-none"
                type="email"
                placeholder="Enter Email"
                onChange={handleInput}
                mame="email"
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
                onChange={handleInput}
                name="password"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              <strong>Log In</strong>
            </button>
            <p>You are agree to our terms and condition</p>
            <Link
              to="/signup"
              className="btn btn-default border w-100 rounded-0 text-decoration-none"
            >
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
