"use client";
import React, { useState, useEffect } from "react";
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
import { AppAuth } from "../context/AppContext";
import { useRouter } from "next/navigation";
import { doc, collection, setDoc, getDocs } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { db } from "../../firebase.js";

const FlashcardSet = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { flashcards, setFlashcards } = AppAuth();
  const router = useRouter();
  const [flashcardSets, setFlashcardSets] = useState([]);

  // useEffect(() => {
  //   async function getFlashcards() {
  //     if (!user) return;
  //     const docRef = doc(collection(db, "users"), user.id);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       const collections = docSnap.data().flashcards || [];
  //       setFlashcards(collections);
  //     } else {
  //       await setDoc(docRef, { flashcards: [] });
  //     }
  //   }
  //   getFlashcards();
  // }, [user]);

  useEffect(() => {
    if (!user) return;

    async function getFlashcardSets() {
      const userDocRef = collection(db, "users", user.id, "flashcardSets"); // Reference to flashcard sets collections
      const querySnapshot = await getDocs(userDocRef);

      const sets = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Set ID (name of the collection in Firebase)
        ...doc.data(), // Spread the data, including flashcards
      }));
      console.log(sets);
      setFlashcardSets(sets);
    }

    getFlashcardSets();
  }, [user]);

  const handleCardClick = (id) => {
    router.push(`/flashcard?id=${id}`);
  };
  // Example data
  // const flashcardSets = [
  //   {
  //     title: "U.S. State Capitals",
  //     terms: 5,
  //     username: "rlarner-quiz",
  //   },
  //   {
  //     title: "U.S. State Capitals",
  //     terms: 5,
  //     username: "rlarner-quiz",
  //   },
  //   {
  //     title: "U.S. State Capitals",
  //     terms: 5,
  //     username: "rlarner-quiz",
  //   },
  // ];

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
                onClick={() => handleCardClick(set.id)}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    {set.name || set.id}{" "}
                    {/* Display set name or fallback to the collection ID */}
                  </Typography>
                  {set.flashcards && (
                    <Chip
                      label={`${set.flashcards.length} terms`}
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "15px",
                    }}
                  >
                    <Avatar sx={{ bgcolor: "#03A9F4", width: 24, height: 24 }}>
                      {user.firstName?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography sx={{ color: "#B3B6E1", marginLeft: "10px" }}>
                      {user.username || user.email} {/* Display the username */}
                    </Typography>
                  </Box>
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
