/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UseAPI() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let errorMessage = "";
  const callAPI = async ({
    url,
    method = "GET",
    body = null,
    headers = {},
  }) => {
    setLoading(true);
    setError("");
    const token = localStorage.getItem("token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
   
    let response = null;
    console.log("res",response)
    try {
      response = await axios.request({
        url: url,
        method: method,
        data: body,
        headers: headers,
      });
    
      return { data: response.data,status: response.status,error: response.error};
    }
     catch (e) {
      if (e.response && e.response.status === 401) {
        errorMessage = "Invalid Username or Password";
        setError(errorMessage);
      } else if (e.status ===500){
        errorMessage = "Internal Server Error";
        setError(errorMessage);
      } {
        const errorMessage = e.response ? e.response.data.error : e.message;
        setError(errorMessage);
      }
      return { data: null, error: errorMessage || "Something went wrong" };
    } finally {
      setLoading(false);
    }
  };

  return { callAPI, loading, error };
}

export default UseAPI;
