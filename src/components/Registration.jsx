import { Box, Typography, TextField, Stack, Button, Container } from "@mui/material";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

import Nav from "./Nav";

// Firebase
import { AuthContext } from "../context/AuthContext";
import { doCreateUser } from "../firebase/FirebaseFunctions";

const Registration = () => {
  const { currentUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await doCreateUser(
        email,
        password,
        displayName
      );
    } catch (e) {
      alert(e);
    }
  };

  if (currentUser) {
    return <Navigate to="/" replace={true}/>;
  }

  return (
    <div>
      <Nav/>
      <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            User Registration
        </Typography>

        <form onSubmit={handleRegistration} action={<Link to="/login"/>}>
          <TextField 
            type="text" label="Name" fullWidth required sx={{mb:6}}
            onChange={e => setDisplayName(e.target.value)} 
          />
          <TextField 
            type="email" label="Email" fullWidth required sx={{mb:6}}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField 
            type="password" label="Password" fullWidth required sx={{mb:6}}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </form>

      </Box>

      <br></br>

      <small>Already have an account? <Link to="/login">Login</Link></small>
    </div>
  );
};

export default Registration;
