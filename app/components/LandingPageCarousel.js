import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Card, Typography, Button, useMediaQuery } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const LandingPageCarousel = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        textAlign: "center",
        zIndex: 0,
        position: "relative",
      }}
    >
      <Swiper
        spaceBetween={25} // Space between the slides
        slidesPerView={4} // Default number of slides visible
        centeredSlides // Allows slight peeking of other slides
        navigation // Enables navigation buttons
        pagination={{ clickable: true }}
        loop // Enables infinite scrolling
        breakpoints={{
          320: {
            slidesPerView: 1.5, // For small screens, show 1.5 slides
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3, // For medium screens, show 2 slides
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4, // For larger screens, show 3 slides
            spaceBetween: 20,
            centeredSlides: false,
          },
        }}
        modules={[Navigation, Pagination]} // Include necessary modules
      >
        <SwiperSlide>
          <Card
            sx={{
              backgroundColor: "#B3E5FC",
              height: matches ? "auto" : "300px",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ padding: "20px", fontWeight: "600" }}
            >
              Learn
            </Typography>
            <Box sx={{ padding: "20px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4185/4185714.png"
                alt="Learn"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              backgroundColor: "#A5D6A7",
              height: matches ? "auto" : "300px",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ padding: "20px", fontWeight: "600" }}
            >
              Smart Flashcards
            </Typography>
            <Box sx={{ padding: "20px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3813/3813696.png"
                alt="Smart Flashcards"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              backgroundColor: "#CE93D8",
              height: matches ? "auto" : "300px",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ padding: "20px", fontWeight: "600" }}
            >
              Easily Accessible
            </Typography>
            <Box sx={{ padding: "20px", borderRadius: "20px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2620/2620620.png"
                alt="Easily Accessible"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              backgroundColor: "#7986CB",
              height: matches ? "auto" : "300px",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ padding: "20px", fontWeight: "600" }}
            >
              Easy to Use
            </Typography>
            <Box sx={{ padding: "20px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5110/5110198.png"
                alt="Easy to Use"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              backgroundColor: "#FAC898",
              height: matches ? "auto" : "300px",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ padding: "20px", fontWeight: "600" }}
            >
              Generated by AI
            </Typography>
            <Box sx={{ padding: "20px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png"
                alt="Generated by AI"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default LandingPageCarousel;
