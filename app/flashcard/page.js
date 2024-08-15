"use client";
import FlashcardList from "../components/FlashcardList";
import { Grid, Container, Typography, Divider } from "@mui/material";
import NavBar from "../components/NavBar";
import { AppAuth } from "../context/AppContext";

export default function Home() {
  const { flashcards } = AppAuth();

  // const saveFlashcards = async () => {
  //   if (!setName.trim()) {
  //     alert("Please enter a name for your flashcard set.");
  //     return;
  //   }

  //   try {
  //     const userDocRef = doc(collection(db, "users"), user.id);
  //     const userDocSnap = await getDoc(userDocRef);

  //     const batch = writeBatch(db);

  //     if (userDocSnap.exists()) {
  //       const userData = userDocSnap.data();
  //       const updatedSets = [
  //         ...(userData.flashcardSets || []),
  //         { name: setName },
  //       ];
  //       batch.update(userDocRef, { flashcardSets: updatedSets });
  //     } else {
  //       batch.set(userDocRef, { flashcardSets: [{ name: setName }] });
  //     }

  //     const setDocRef = doc(collection(userDocRef, "flashcardSets"), setName);
  //     batch.set(setDocRef, { flashcards });

  //     await batch.commit();

  //     alert("Flashcards saved successfully!");
  //     handleCloseDialog();
  //     setSetName("");
  //   } catch (error) {
  //     console.error("Error saving flashcards:", error);
  //     alert("An error occurred while saving flashcards. Please try again.");
  //   }
  // };

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
