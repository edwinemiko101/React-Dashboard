import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Call an API or backend service to authenticate the user
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Authentication failed!');
  //     }

  //     // Redirect the user to the appropriate page if authentication is successful
  //     window.location.href = '/dashboard';
  //   } catch (err) {
  //     // Handle authentication errors
  //     setError(err.message);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "ka@uwindsor.ca" && password === "password") {
      // Redirect the user to the appropriate page if authentication is successful
      window.location.href = "/home";
    } else {
      // Handle authentication errors
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      {/* <nav>
      <div className="logo">
        <img src={'https://www.uwindsor.ca/cleancombustion/sites/uwindsor.ca.cleancombustion/files/uwin_logo.jpg'} alt="logo" />
      </div>
      <div className="ask-button-container">
        <Link to="https://ask.uwindsor.ca/" className="ask-button">
          <span className="ask-text">ask</span>.Uwindsor
        </Link>
      </div>
    </nav> */}
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@uwindsor\.ca$"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
      <footer className="footer">
        <div className="soicon">
          <ul className="icon-list">
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <p>Contact us</p>
          <p>About us</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
