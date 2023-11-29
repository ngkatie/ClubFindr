import React from "react";
import { Box } from "@mui/material";
import Nav from "./Nav";

function Landing() {
    return (
        <div>
            <Nav/>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Box m="auto" sx={{width: "60%"}}>
                <h1>ClubFindr</h1>
                <p>
                    Welcome to ClubFindr! This is a student involvement app that matches you to clubs on 
                    your college campus based on your shared interests. Happy exploring!
                </p>
                </Box>
            </Box>
        </div>
    );
}

export default Landing