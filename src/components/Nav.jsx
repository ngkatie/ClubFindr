import { Box, Typography } from "@mui/material";

import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import ClubFindrLogo from "../../public/logo.png"
import { AuthContext } from "../context/AuthContext";
import { doSignOut } from "../firebase/FirebaseFunctions";

function Nav() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        width: "100%", 
        height: "120px", 
        color: "black", // Ensures all text is black
        position: "fixed", 
        top: 0, 
        left: 0, 
        zIndex: 1,
        backgroundColor: 'lightgrey', // Sets the background color to light grey
      }}
    >
        <Box sx={{
            width: "100%", 
            margin: "auto", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)", 
            paddingBottom: 2 
          }}
        >
            <Box
                component="img"
                src={ClubFindrLogo}
                alt="Club Findr Logo"
                sx={{
                    width: 50,
                    height: 50,
                    paddingLeft: 5,
                }}
                onClick={<Navigate to="/"/>}
            />
            <Box sx={{ paddingRight: 5 }}>
                <Link to="/profile" style={{ marginRight: 20, color: 'black' }}>Profile</Link>
                <Link to="/explore" style={{ marginRight: 20, color: 'black' }}>Explore</Link>
                {
                  currentUser
                  ? <Link to="/" onClick={doSignOut} style={{ marginRight: 50, color: 'black' }}>Logout</Link>
                  : <Link to="/login" style={{ marginRight: 50, color: 'black' }}>Login</Link>
                }
            </Box>
        </Box>
    </Box>
  );
}

export default Nav;
