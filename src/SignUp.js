import React, { useState } from "react";
import axios from "axios";

function SignUpForm() {
  const [rollnumber, setRollNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", { rollnumber : rollnumber, email : email, password : password})
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={Submit}>
        <h1>Create Account</h1>
        <span>Use your email for registration</span>
        <input
          type="text"
          name="RollNumber"
          value={rollnumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Roll Number"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
