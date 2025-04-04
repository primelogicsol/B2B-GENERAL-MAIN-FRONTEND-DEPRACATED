import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import mainLogo from "../../assets/icon/Black and White Vintage Retro Outdoor Adventure Badge Logo (11).png";
import UseAPI from "../../hooks/APIhandler";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Shared-Components/Navbar";
import MobileMenu from "../../components/Shared-Components/Mobile_Menu";
import FooterArea from "../../components/Shared-Components/FooterArea";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
const providers = [{ id: "credentials", name: "Email and Password" }];

export default function SlotPropsSignIn() {
  const { callAPI, loading, error } = UseAPI();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Login" },
  ];
  const doLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    let response = await callAPI({
      url: "http://localhost:3002/api/v1/login",
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    console.log("1",  JSON.stringify(body));
    if (response.data) {
      console.log(response);
      localStorage.setItem("token", response.data.access);
      toast.success("Access granted");
      navigate("/");
    } else if (response.error) {
      toast.error(response.error);
    } else {
      toast.error("An unknown error occurred.");
    }
  };

  return (
    <>
    <Navbar />
    <MobileMenu />
    <Breadcrumb title="Buyer Partnership Registration Portal" links={breadcrumbLinks} />
    <div id="login">
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center px-2 py-4"
        >
          <div
            id="login-column"
            className="col-md-6"
            style={{
              backgroundColor: "white",
              padding: "40px 30px",
              boxShadow: "2px 2px 5px gray",
              color: "black",
            }}
          >
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" onSubmit={doLogin}>
                <h2 className="text-center mt-1" style={{ color: "#ff3b00" }}>
                  <b>DKC B2B Connect</b>
                </h2>
                <h3 className="text-center mb-3" style={{ color: "#ff3b00" }}>
                  {" "}
                  <span className="text-black">Login</span>{" "}
                  
                </h3>
                <hr
                  style={{
                    width: "80px",
                    margin: "0 auto",
                    display: "block",
                    color: "#ff3b00",
                    border: "1px solid  #ff3b00",
                  }}
                />
                <div className="form-group">
                  <label
                    htmlFor="username"
                    className="text-black"
                    style={{ fontWeight: "normal", fontSize: "20px" }}
                  >
                    Email:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control rounded-0"
                    style={{ lineHeight: "36px" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="password"
                    className="text-black"
                    style={{ fontWeight: "normal", fontSize: "20px" }}
                  >
                    Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control rounded-0"
                    style={{ lineHeight: "36px" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group my-2">
                  {/* <p className='mb-0'>Provide accurate details, agree, and sign</p> */}
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="form-check-input mt-2 orange-check"
                    style={{ display: "inline" }}
                    // checked={rememberMe}
                    // onChange={(e) => setRememberMe(e.target.checked)}
                  />

                  <label htmlFor="remember-me" className="text-black ms-3">
                    <span>Remember me</span>
                  </label>
                </div>
                <div className="col-md- d-flex justify-content-center">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-lg rounded-0 d-inline"
                    value="Submit"
                    style={{
                      backgroundColor: "#ff3b00",
                      color: "white",
                      width: "150px",
                    }}
                  />
                </div>
                {/* <div id="register-link" className="text-right">
                <a href="#" className="text-info">Register here</a>
              </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterArea />
    </>
  );
}
