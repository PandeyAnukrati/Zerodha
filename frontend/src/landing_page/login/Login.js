import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const backendUrl=process.env.REACT_APP_API_URL;

  const handleLogin = async () => {
    console.log(backendUrl);
    console.log("🔐 Attempting to log in...");
    console.log("📧 Email entered:", email);
    console.log("🔑 Password entered:", password);

    try {
      const payload = { email, password };
      console.log("📤 Sending POST request to /login with:", payload);

      const response = await axios.post(`${backendUrl}/login`, payload);

      console.log("📥 Server responded with:", response.data);

      if (response.data.success) {
        console.log("✅ Login success. Token/User Data:", response.data);
        setMessage("Login successful ✅");
        window.location.href = "http://localhost:3001";

        setTimeout(() => {
          console.log("➡️ Redirecting to /dashboard");
         
        }, 1500);
      } else {
        console.warn("⚠️ Login failed:", response.data.message);
        setMessage(response.data.message || "Login failed.");
      }
    } catch (error) {
      console.error("❌ Login error occurred:", error);
      setMessage("Invalid credentials. Try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f0f2f5, #d6e0ec)",
        padding: "20px"
      }}
    >
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: 420, borderRadius: "12px" }}>
        <div className="text-center mb-4">
          <img
            src="/Media/images/logo (2).svg"
            alt="Zerodha Logo"
            style={{ width: 100 }}
          />
          <h4 className="mt-3 fw-bold">Welcome Back</h4>
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            Login to access your dashboard
          </p>
        </div>

        <label className="form-label fw-semibold">Email</label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log("📥 Email updated:", e.target.value);
          }}
        />

        <label className="form-label fw-semibold">Password</label>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log("📥 Password updated:", e.target.value);
          }}
        />

        <button onClick={handleLogin} className="btn btn-primary w-100 fw-semibold">
          Login
        </button>

        <div className="text-center mt-3">
          <span className="text-muted">Don't have an account? </span>
          <Link to="/signup" className="fw-bold text-decoration-none">Sign Up</Link>
        </div>

        {message && (
          <div className="alert alert-info text-center mt-3" role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
