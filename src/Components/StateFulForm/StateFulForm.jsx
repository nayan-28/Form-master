import React, { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 character");
    } else {
      setError("");
      console.log(name, password);
    }
  };

  const handleEmailChange = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleEmailChange} type="text" name="name"></input>
        <br />
        <input
          onChange={handlePassword}
          type="password"
          name="password"
        ></input>
        <br />
        <input type="submit" value="Submit"></input>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFulForm;
