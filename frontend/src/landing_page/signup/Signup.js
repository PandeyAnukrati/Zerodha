import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Added Link

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const backendUrl=process.env.REACT_APP_API_URL;

  const handleSignup = async () => {
    console.log(backendUrl)
    try {
      const response = await axios.post(`${backendUrl}/signup`, {
        email,
        username,
        password,
      });

      if (response.data.success) {
        setMessage("Signup successful! ✅");
        window.location.href = "https://zerodha-dashboard-6bt8.onrender.com";
      } else {
        setMessage(response.data.message || "Signup failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f8f9fa, #e2e6ea)",
        padding: "20px",
      }}
    >
      <div
        className="card shadow-lg p-4 w-100"
        style={{ maxWidth: 420, borderRadius: "12px" }}
      >
        <div className="text-center mb-4">
          <img
            src="/Media/images/logo (2).svg"
            alt="Zerodha Logo"
            style={{ width: 100 }}
          />
          <h4 className="mt-3 fw-bold">Signup with Email</h4>
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            Create your account to get started
          </p>
        </div>

        <label className="form-label fw-semibold">Email</label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="form-label fw-semibold">Username</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="form-label fw-semibold">Password</label>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="btn btn-primary w-100 fw-semibold"
        >
          Sign Up
        </button>

        {message && (
          <div className="alert alert-info text-center mt-3" role="alert">
            {message}
          </div>
        )}

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="fw-semibold text-decoration-none">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
