import React from "react";
import { Box, Button, Typography } from "@mui/material";

function ErrorPage () {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: "auto" }}>
                <Typography variant="h3" sx={{ marginBottom: 2 }}>
                404: Page Not Found
                </Typography>
                <Button href="/" variant="outlined" sx={{ fontSize: 30 }}>Return Home</Button>
            </Box>
        </>
    )
}

export default ErrorPage