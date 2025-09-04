"use client";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const images = ["/Mehendi_hand.jpg", "/basic.jpg", "/bridalhand_11zon.jpg"];

export default function HomePageCarousel() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 3, sm: 5 },
      }}
    >
      <Carousel
        autoPlay={true} // 👈 enable autoplay
        interval={3000} // 👈 auto-scroll every 3 sec
        indicators={true} // 👈 show dots
        navButtonsAlwaysVisible // 👈 show prev/next buttons
        animation="slide"
        sx={{
          width: { xs: "95%", sm: "85%", md: "80%" },
          borderRadius: 2,
        }}
      >
        {images.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`Mehendi ${i}`}
            sx={{
              width: "100%",
              height: { xs: 350, sm: 450, md: 650 },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
}
