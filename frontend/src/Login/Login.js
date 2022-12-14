import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../Redux/Reducers/userSlice";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logInput, setLogInput] = useState({
    email: "",
    user_password: "",
  });
  const handleInputChange = (e) => {
    setLogInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const validate = (e) => {
    if (logInput.email === "" || logInput.user_password === "") {
      clearForm();
      alert(" You did not complete  the form, kindly do so.");
    } else {
      dispatch(getUser(logInput));
      clearForm();
      navigate("/Products");
    }
  };
  const clearForm = () => {
    setLogInput({
      email: "",
      user_password: "",
    });
  };

  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Please Login</div>
      <div className="input-container ic1">
        <input
          id="email"
          className="input"
          type="email"
          name="email"
          value={logInput.email}
          onChange={handleInputChange}
        />
        <div className="cut"></div>
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="password"
          className="input"
          type="password"
          name="user_password"
          value={logInput.user_password}
          onChange={handleInputChange}
        />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">
          Password
        </label>
      </div>
      <button
        type="text"
        className="submit"
        onClick={() => {
          validate();
        }}
      >
        Login
      </button>
      <p> <Link to="/signup">
        Register
      </Link></p>
    </div>
  );
}
