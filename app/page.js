"use client";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  ThemeProvider,
  createTheme,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Box,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { raleway } from "./fonts";
import LandingPageCarousel from "./components/LandingPageCarousel";
import Head from "next/head";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const fontTheme = createTheme({
  typography: {
    fontFamily: raleway.style.fontFamily,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={fontTheme}>
      <Box sx={{ height: "100vh", backgroundColor: "#0A082B" }}>
        <Head>
          <title>Wizlet</title>
          <meta name="description" content="Create flashcard from your text" />
        </Head>

        <AppBar
          position="static"
          sx={{
            backgroundColor: "#00004d",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "700" }}>
              W
            </Typography>
            <SignedOut>
              <Button color="inherit" href="/sign-in">
                Login
              </Button>
              <Button color="inherit" href="/sign-up">
                Sign Up
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Toolbar>
        </AppBar>
        <Box sx={{ textAlign: "center", mt: 10, mb: 5 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Welcome to Wizlet
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            The easiest way to make flashcards from your queries.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Box>
        <LandingPageCarousel />
        <Box
          sx={{
            my: 6,
            textAlign: "center",
            backgroundColor: "#00004d",
            pt: 7,
          }}
        >
          <Typography variant="h4">Pricing</Typography>
          <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Box
                sx={{
                  p: 2,
                  border: "1px solid",
                  borderColor: "white",
                  borderRadius: 5,
                  mt: 3,
                  mx: 3,
                }}
              >
                <Typography variant="h5">Free Tier</Typography>
                <Typography variant="h6">Free</Typography>
                <Typography sx={{ my: 2 }}>
                  Acccess to basic flashcard features and limited storage
                </Typography>
                <Button variant="contained" color="primary">
                  Choose Free
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Box
                sx={{
                  p: 2,
                  border: "1px solid",
                  borderColor: "white",
                  borderRadius: 5,
                  mt: 3,
                  mx: 3,
                }}
              >
                <Typography variant="h5">Basic Plan</Typography>
                <Typography variant="h6">$5 / month</Typography>
                <Typography sx={{ my: 2 }}>
                  Access to more flashcard features and limited storage
                </Typography>
                <Button variant="contained" color="primary">
                  Choose Basic
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Box
                sx={{
                  p: 2,
                  border: "1px solid",
                  borderColor: "white",
                  borderRadius: 5,
                  mt: 3,
                  mx: 3,
                }}
              >
                <Typography variant="h5">Pro</Typography>
                <Typography variant="h6">$10 / month</Typography>
                <Typography sx={{ my: 2 }}>
                  Access to all flashcard features and unlimited storage
                </Typography>
                <Button variant="contained" color="primary">
                  Choose Pro
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
