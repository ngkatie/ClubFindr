import React from "react";
import { Grid, Card, CardMedia, CardContent, CardActions, IconButton, Typography, Button } from "@mui/material";
import Nav from "./Nav";

// Import assets
import wrongImage from '../assets/wrong.jpg'; // Replace with the actual path to your 'dislike' image
import rightImage from '../assets/right.jpg'; // Replace with the actual path to your 'like' image
import sgaLogo from '../assets/sga.png';
import aphiLogo from '../assets/aphi.png';
import aicheLogo from "../assets/aiche.png";
import blueprintLogo from "../assets/blueprint.png";
import ecLogo from "../assets/entertainmentCommittee.jpeg";
import gdscLogo from "../assets/gdsc.png";
import stevensLogo from "../assets/sports.png";

// Dummy data for clubs - you would replace this with actual data, likely fetched from an API
const clubs = [
    {
        id: 1,
        name: "Student Government Association",
        image: sgaLogo
    },
    {
        id: 2,
        name: "Alpha Phi",
        image: aphiLogo
    },
    // {
    //     id: 3,
    //     name: "American Institute of Chemical Engineers",
    //     image: aicheLogo
    // },
    {
        id: 4,
        name: "Blueprint",
        image: blueprintLogo
    },
    {
        id: 5,
        name: "Entertainment Committee",
        image: ecLogo
    },
    {
        id: 6,
        name: "Google Student Developer Club",
        image: gdscLogo
    },
    {
        id: 7,
        name: "Men's Club Volleyball",
        image: stevensLogo
    }
    // ... other clubs
];

function Explore() {
    return (
        <div>
            <Nav />
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{backgroundColor: '#f6f6f6'}}>
                {clubs.map((club) => (
                    <Card key={club.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 345, height: 500, margin: 2, mt: 20, padding: 2}}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: 225, // Set width to 225px
                                height: 225, // Set height to 225px
                                objectFit: 'contain', // Image will be scaled correctly
                                margin: 'auto' // This will center the image in the card
                            }}
                            image={club.image}
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
            </Grid>
        </div>
    );
}

export default Explore;
