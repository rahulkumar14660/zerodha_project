import React, { useState, useContext  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Signup() {

  const { setIsAuthenticated } = useContext(AuthContext);

    let navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSignUp = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);

      axios
        .post("http://localhost:3002/api/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
        .then((response) => {
          console.log("Login Success:", response.data);
          setFormData({
            name: "",
            email: "",
            password: "",
          });
          setIsAuthenticated(true);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error(
            "Register Failed:",
            error.response?.data || error.message
          );
        });
    };

    return (
      <>
        <div className="container">
          <div className="row text-center" style={{ marginTop: "100px" }}>
            <h1>Open a free demat and trading account online</h1>
            <p className="text-muted fs-5">
              Start investing brokerage free and join a community of 1.6+ crore
              investors and traders
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-6">
              <img
                src="media/images/account_open_products.svg"
                style={{ marginLeft: "100px" }}
                alt="account"
              />
            </div>

            <div className="col-6 mt-2 mb-5">
              <h1>Signup now</h1>
              <p className="text-muted fs-5 mb-2">
                Or track your existing application
              </p>

              <form
                onSubmit={handleSignUp}
                className="needs-validation"
                noValidate
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-control"
                    value={formData.email}
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
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="btn btn-success">SignUp</button>
              </form>

              <p className="mt-3">
                By proceeding, you agree to the Zerodha{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  terms
                </a>{" "}
                &{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  privacy policy
                </a>
              </p>
            </div>
          </div>
        </div>
    </>
  );
  
}

export default Signup;
