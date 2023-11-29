import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

import Nav from "./Nav";

// Firebase
import { AuthContext } from "../context/AuthContext";
import { doSignIn } from "../firebase/FirebaseFunctions";

const Login = () => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await doSignIn(email, password);
    } catch (e) {
      alert(e);
    }
  };

  if (currentUser) {
    return <Navigate to="/"/>;
  }

  return (
    <>
      <Nav/>
      <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Log In
        </Typography>

        <form onSubmit={handleLogin} action={<Link to="/explore"/>}>
          <TextField 
            type="email" label="Email" fullWidth required sx={{mb:6}}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField 
            type="password" label="Password" fullWidth required sx={{mb:6}}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Log In</Button>
        </form>

      </Box>

      <br></br>

      <small>Don't have an account? <Link to="/registration">Register Here</Link></small>
    </>
  );
};

export default Login;
