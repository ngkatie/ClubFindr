import React, { useState } from "react";
import { Box, Card, CardMedia, CardContent, CardActions, IconButton, Typography, Button, Modal } from "@mui/material";
import Nav from "./Nav";
import wrongImage from '../../public/wrong.jpg'; // Make sure this path is correct
import rightImage from '../../public/right.jpg'; // Make sure this path is correct

const clubs = [
    {
        id: 1,
        name: "Student Government Association",
        imageUrl: "../../public/sga.png", // Make sure this path is correct
        about: "The mission of the Student Government Association of Stevens Institute of Technology (SGA) is to advocate for the undergraduate student body and serve as a means of communication between students and faculty, administration, and staff. The SGA is committed to enhancing the student experience and quality of life on campus. Charging itself with being a voice for the student body, the SGA is responsive to the issues, rights, and concerns of Stevens students. The SGA promotes the image of the student body it serves with integrity and honor and the image of the university; it provides students with leadership development and the promotion of their general welfare." 
    },
    // ... other clubs
];

function Explore() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedClub, setSelectedClub] = useState(null);

    const handleOpenModal = (club) => {
        setSelectedClub(club);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedClub(null);
    };

    return (
        <div>
            <Nav />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
                {clubs.map((club) => (
                    <Card key={club.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 345, mb: 2 }}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: 225,
                                height: 225,
                                objectFit: 'contain',
                                margin: 'auto'
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
                                    borderColor: 'lightgrey',
                                    width: 50,
                                    height: 50,
                                    padding: 0
                                }}
                            >
                                <img src={wrongImage} alt="Dislike" style={{ width: '70%' }} />
                            </IconButton>
                            <Button size="small" onClick={() => handleOpenModal(club)} 
                                sx={{
                                    border: '3px solid',
                                    borderColor: 'lightgrey',
                                }}>
                                About
                            </Button>
                            <IconButton 
                                sx={{
                                    borderRadius: '50%',
                                    border: '3px solid',
                                    borderColor: 'lightgrey',
                                    width: 50,
                                    height: 50,
                                    padding: 0
                                }}
                            >
                                <img src={rightImage} alt="Like" style={{ width: '72.5%' }} />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))}
            </Box>

            {/* Modal */}
            <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    height: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 2,
                }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        About {selectedClub?.name}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 1 }}>
                        {selectedClub?.about}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Explore;
