import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ClubFindrLogo from "../../public/logo.png";
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
        color: "black",
        position: "fixed", 
        top: 0, 
        left: 0, 
        zIndex: 1,
        backgroundColor: 'lightgrey',
      }}
    >
        <Box sx={{
            width: "100%", 
            margin: "auto", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)", 
            padding: 2 
          }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={ClubFindrLogo}
                    alt="Club Findr Logo"
                    style={{
                        width: 50,
                        height: 50
                    }}
                />
                <Typography sx={{ fontSize: '15px', marginLeft: '8px' }}>
                    ClubFindr
                </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Link to="/profile" style={{ marginRight: 20, color: 'black', fontSize: '15px' }}>Profile</Link>
                <Link to="/explore" style={{ marginRight: 20, color: 'black', fontSize: '15px' }}>Explore</Link>
                {
                  currentUser
                  ? <Link to="/" onClick={doSignOut} style={{ marginRight: 20, color: 'black', fontSize: '15px' }}>Logout</Link>
                  : <Link to="/login" style={{ marginRight: 20, color: 'black', fontSize: '15px' }}>Login</Link>
                }
            </Box>
        </Box>
    </Box>
  );
}

export default Nav;
