import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ClubFindrLogo from "../../public/logo.png"

function Nav() {

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%", height: "120px", color: "black", position: "fixed", top: 0, left: 0, zIndex: 1}}>
        <Box sx={{width: "100%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", paddingBottom: 2 }}>
            <Box
                component="img"
                src={ClubFindrLogo}
                alt="Club Findr Logo"
                sx={{
                    width: 50,
                    height: 50,
                    paddingLeft: 5,
                }}
            >
            </Box>
            <Box sx={{ paddingRight: 5 }}>
                <Link to="/profile" style={{ marginRight: 20 }}>Profile</Link>
                <Link to="/explore" style={{ marginRight: 20 }}>Explore</Link>
                <Link to="/login" style={{ marginRight: 50 }}>Login</Link>
            </Box>
      </Box>
    </Box>
  );
}

export default Nav;
