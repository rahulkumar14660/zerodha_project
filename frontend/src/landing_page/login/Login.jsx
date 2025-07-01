import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", loginData);

    axios
      .post("http://localhost:3002/api/login", loginData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Login Success:", response.data);
        setLoginData({
          email: "",
          password: "",
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login Failed:", error.response?.data || error.message);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "100px" }}>
          <h1 className="col-6 offset-3">Login</h1>
          <div className="col-6 offset-3">
            <form
              onSubmit={handleLogin}
              className="needs-validation"
              noValidate
            >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="form-control"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="form-control"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn btn-success">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
