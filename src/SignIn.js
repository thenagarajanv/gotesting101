import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign in</h1>
        <span>Use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {email === "test@gmail.com" && password === "test123" ? (
          <Link to="/verification">Sign In</Link>
        ) : (
          <button type="button" disabled>
            Sign In
          </button>
        )}
      </form>
    </div>
  );
}

export default SignInForm;
