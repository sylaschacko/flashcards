"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#0A082B", pt: 1 }} elevation={0}>
      <Toolbar>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Q
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        {/* Add Icon */}
        <Box>
          <Tooltip title="Create flashcard set">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="add"
              sx={{ mr: 2, bgcolor: "#3D56F0", color: "#fff", borderRadius: 2 }}
              onClick={() => {
                router.push("/");
              }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Profile Picture" sx={{ bgcolor: "#03A9F4" }}>
              V
            </Avatar>
          </IconButton>
          <Menu
            sx={{
              mt: "45px",
              "& .MuiPaper-root": {
                backgroundColor: "#303754",
              },
            }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem>
              <Typography
                textAlign="center"
                sx={{ color: "white" }}
                onClick={() => {
                  router.push("/flashcardset");
                }}
              >
                My Flashcard Sets
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center" sx={{ color: "white" }}>
                Log Out
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
