import React, { useState } from "react";
import UseAPI from "../../hooks/APIhandler";
import { toast } from "react-toastify";
const Register = () => {

  const { callAPI, loading, error } = UseAPI();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    image: null,
    password: "",
    level: "",
    score: "",
    package: "",
    paymentStatus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const doSignup = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const body = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      let response = await callAPI({
        url: "http://localhost:3002/api/v1/register",
        method: "POST",
        body: body,
        headers: { "Content-Type": "application/json" },
      }); 
      console.log("1",response.users)   
      if (response.data) {
        console.log(response)
        localStorage.setItem("token", response.data.access);
        toast.success("Access granted");
        // navigate("/");
      } else if (response.error) {
        toast.error(response.error);
      } else {
        toast.error("An unknown error occurred.");
      }
    };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={doSignup} className="container">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        {/* Mobile */}
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        {/* Image */}
        <div className="form-group">
          <label htmlFor="image">Profile Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="form-control"
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        {/* Level */}
        <div className="form-group">
          <label htmlFor="level">Level</label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select Level</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Consignment">Consignment</option>
          </select>
        </div>

        {/* Score */}
        <div className="form-group">
          <label htmlFor="score">Score</label>
          <input
            type="number"
            id="score"
            name="score"
            value={formData.score}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        {/* Package */}
        <div className="form-group">
          <label htmlFor="package">Package</label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select Package</option>
            <option value="Starter">Starter</option>
            <option value="Growth">Growth</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        {/* Payment Status */}
        <div className="form-group">
          <label htmlFor="paymentStatus">Payment Status</label>
          <select
            id="paymentStatus"
            name="paymentStatus"
            value={formData.paymentStatus}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="unpaid">Unpaid</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
