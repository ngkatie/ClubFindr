import { Box } from "@mui/material";
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
            paddingBottom: 2
          }}
        >
            <Box sx={{ paddingLeft: 5 }}>
                <img
                    src={ClubFindrLogo}
                    alt="Club Findr Logo"
                    style={{
                        width: 50,
                        height: 50
                    }}
                />
            </Box>
            <Box sx={{ paddingRight: 5 }}>
                {
                  currentUser
                  ? <Link to="/" onClick={doSignOut} style={{ marginRight: 50, color: 'black' }}>Logout</Link>
                  : null // No link displayed if there is no current user
                }
            </Box>
        </Box>
    </Box>
  );
}

export default Nav;
