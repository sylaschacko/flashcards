"use client";
import FlashcardList from "../components/FlashcardList";
import { Grid, Container, Typography, Divider } from "@mui/material";
import NavBar from "../components/NavBar";

export default function Home() {
  const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: 'Who wrote "To Kill a Mockingbird"?', answer: "Harper Lee" },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ height: "100vh", backgroundColor: "#0A082B", margin: 0 }}
    >
      <NavBar />
      <FlashcardList flashcards={flashcards} />
      <Container sx={{ mt: 4 }}>
        {flashcards.map((flashcard, index) => (
          <Grid
            container
            key={index}
            alignItems="center"
            direction="row"
            sx={{
              mb: 2,
              padding: 2,
              backgroundColor: "#303754",
              borderRadius: 2,
              color: "white",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="h7" sx={{ color: "#fff" }}>
                {flashcard.question}
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Divider
                flexItem
                orientation="vertical"
                sx={{ bgcolor: "#666", height: "100%" }}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h7" sx={{ color: "#fff" }}>
                {flashcard.answer}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Container>
  );
}
