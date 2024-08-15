"use client";

import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { AppAuth } from "../context/AppContext";
import { useUser } from "@clerk/nextjs";

export default function Generate() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { setFlashcards } = AppAuth();
  const [text, setText] = useState("");
  const router = useRouter();
  const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: 'Who wrote "To Kill a Mockingbird"?', answer: "Harper Lee" },
  ];

  const handleSubmit = async () => {
    // if (!text.trim()) {
    //   alert("Please enter some text to generate flashcards.");
    //   return;
    // }

    // try {
    //   const response = await fetch("/api/generate", {
    //     method: "POST",
    //     body: text,
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to generate flashcards");
    //   }

    //   const data = await response.json();
    //   setFlashcards(data);
    //   router.push("/flashcard");
    // } catch (error) {
    //   console.error("Error generating flashcards:", error);
    //   alert("An error occurred while generating flashcards. Please try again.");
    // }
    setFlashcards(flashcards);
    router.push("/flashcard");
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        backgroundColor: "#0A082B",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Flashcards
        </Typography>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Enter text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          sx={{
            mb: 2,
            backgroundColor: "#303754",
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              // "& fieldset": {
              //   borderColor: "#303754",
              // },
              // "&:hover fieldset": {
              //   borderColor: "#303754",
              // },
              // "&.Mui-focused fieldset": {
              //   borderColor: "#303754",
              // },
              "& input": {
                color: "white",
              },
              "& textarea": {
                color: "white",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
          }}
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Generate Flashcards
        </Button>
      </Container>
    </Container>
  );
}
