"use client";
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { useRouter } from "next/navigation";

const FlashcardSet = () => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/flashcard"); // Navigate to the desired route
  };
  // Example data
  const flashcardSets = [
    {
      title: "U.S. State Capitals",
      terms: 5,
      username: "rlarner-quiz",
    },
    {
      title: "U.S. State Capitals",
      terms: 5,
      username: "rlarner-quiz",
    },
    {
      title: "U.S. State Capitals",
      terms: 5,
      username: "rlarner-quiz",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#0A082B", height: "100vh" }}>
      <NavBar />
      <Box sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5 }}>
        <Typography variant="h4" sx={{ color: "#fff", marginBottom: "20px" }}>
          My Flashcard Set
        </Typography>
        <Grid container spacing={3}>
          {flashcardSets.map((set, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#303754",
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
                onClick={handleCardClick}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    {set.title}
                  </Typography>
                  {set.terms && (
                    <Chip
                      label={`${set.terms} terms`}
                      sx={{
                        marginTop: "10px",
                        backgroundColor: "#5962D9",
                        color: "#fff",
                        fontSize: "14px",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                  {set.description && (
                    <Typography
                      variant="body2"
                      sx={{ color: "#B3B6E1", marginTop: "10px" }}
                    >
                      {set.description}
                    </Typography>
                  )}
                  {set.username && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "15px",
                      }}
                    >
                      <Avatar
                        sx={{ bgcolor: "#03A9F4", width: 24, height: 24 }}
                      >
                        {set.username.charAt(0).toUpperCase()}
                      </Avatar>
                      <Typography sx={{ color: "#B3B6E1", marginLeft: "10px" }}>
                        {set.username}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FlashcardSet;
