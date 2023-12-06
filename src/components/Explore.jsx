import React from "react";
import { Box, Card, CardMedia, CardContent, CardActions, IconButton, Typography, Button } from "@mui/material";
import Nav from "./Nav";
import wrongImage from '../../public/wrong.jpg'; // Replace with the actual path to your 'dislike' image
import rightImage from '../../public/right.jpg'; // Replace with the actual path to your 'like' image



// Dummy data for clubs - you would replace this with actual data, likely fetched from an API
const clubs = [
    {
        id: 1,
        name: "Student Government Association",
        imageUrl: "../../public/sga.png", // Make sure this path correctly points to the image file
    },
    // ... other clubs
];

function Explore() {
    return (
        <div>
            <Nav />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
                {clubs.map((club) => (
                    <Card key={club.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 345, mb: 2 }}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: 225, // Set width to 225px
                                height: 225, // Set height to 225px
                                objectFit: 'contain', // Image will be scaled correctly
                                margin: 'auto' // This will center the image in the card
                            }}
                            image={club.imageUrl}
                            alt={club.name}
                        />
                        <CardContent sx={{ width: '100%' }}>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                {club.name}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <IconButton 
                                sx={{
                                    borderRadius: '50%',
                                    border: '3px solid',
                                    width: 50,
                                    height: 50,
                                    padding: 0,
                                    borderColor: 'lightgrey'
                                }}
                            >
                                <img src={wrongImage} alt="Dislike" style={{ width: '70%' }} />
                            </IconButton>
                            <Button size="small" 
                                sx={{
                                    border: '3px solid', // Sets the border width to 3px
                                    borderColor: 'lightgrey', // Sets the border color to black
                                    // Add more styles as needed
                                }}>
                                    About
                            </Button>

                            <IconButton 
                                sx={{
                                    borderRadius: '50%',
                                    border: '3px solid',
                                    width: 50,
                                    height: 50,
                                    padding: 0,
                                    borderColor: 'lightgrey'
                                }}
                            >
                                <img src={rightImage} alt="Like" style={{ width: '72.5%' }} />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </div>
    );
}

export default Explore;
