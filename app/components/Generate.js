"use client";

import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Generate() {
  const [text, setText] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const router = useRouter();

  const handleSubmit = async () => {
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
