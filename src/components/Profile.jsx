import React, { useContext, useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import Nav from "./Nav";

// Firebase
import { AuthContext } from "../context/AuthContext";
import { doSignIn } from "../firebase/FirebaseFunctions";

import noImage from "../assets/no_image.jpeg";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [editableUser, setEditableUser] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Fetch user data when the component mounts
    if (currentUser) {
        setUser(currentUser.email);
        console.log(currentUser);
        // setEditableUser(userData);
    }
  }, [currentUser]);

//   const handleInputChange = (e) => {
//     setEditableUser({ ...editableUser, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     try {
//       // Update user profile on the server
//       await updateUserProfile(currentUser.uid, editableUser);
//       setIsEditMode(false);
//     } catch (error) {
//       console.error("Error updating user profile:", error);
//     }
//   };

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Nav />
      <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          {/* {isEditMode ? "Edit Your Profile" : "Your Profile"} */}
          Your Profile
        </Typography>

        {/* {isEditMode ? (
          <form onSubmit={handleSave}>
            <TextField
              type="text"
              label="Username"
              fullWidth
              required
              sx={{ mb: 2 }}
              name="username"
              value={editableUser.username || ""}
              onChange={handleInputChange}
            />
            <TextField
              type="email"
              label="Email"
              fullWidth
              required
              sx={{ mb: 2 }}
              name="email"
              value={editableUser.email || ""}
              onChange={handleInputChange}
            />
            <Button type="submit">Save</Button>
          </form>
        ) : (
          <>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Username: {user.username}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Email: {user.email}
            </Typography>
            <Button onClick={() => setIsEditMode(true)}>Edit Profile</Button>
          </>
        )} */}

        <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Name: {currentUser.displayName}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Email: {currentUser.email} 
            {currentUser.emailVerified ? " (Verified)" : " (Not Verified)"}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Phone Number: {currentUser.phoneNumber ? currentUser.phoneNumber : " N/A"}
        </Typography>

        {currentUser.photoURL ? currentUser.photoURL : <img src={noImage}/>}

      </Box>
    </>
  );
};

export default Profile;
