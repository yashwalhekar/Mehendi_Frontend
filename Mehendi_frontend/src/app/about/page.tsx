import { Box, Typography, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import { Phone, Email } from "@mui/icons-material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import Link from "next/link";

const Page = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Section 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: { xs: 2, md: 6 },
          mb: { xs: 6, md: 8 },
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", sm: "50%", md: "50%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/Mehendi_hand.jpg"
            alt="Mehendi Hand"
            sx={{
              width: { xs: "100%", sm: "90%", md: "100%" },
              height: { xs: 220, sm: 350, md: 550 },
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "background.paper",
            borderRadius: 3,
            p: { xs: 2.5, sm: 3, md: 5 },
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Elegant Mehendi Art
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.7,
              color: "text.secondary",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
              textAlign: { xs: "center", md: "justify" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            repellendus veniam ipsum voluptates! Possimus, autem necessitatibus
            reiciendis totam repellendus tempore quo, iure nam debitis porro
            nobis, eveniet asperiores nemo omnis...
          </Typography>
        </Box>
      </Box>

      {/* Section 2 (Alternating Layout) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: { xs: 2, md: 6 },
          mb: { xs: 6, md: 8 },
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "background.paper",
            borderRadius: 3,
            p: { xs: 2.5, sm: 3, md: 5 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Elegant Mehendi Art
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.7,
              color: "text.secondary",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            repellendus veniam ipsum voluptates! Possimus, autem necessitatibus
            reiciendis totam repellendus tempore quo, iure nam debitis porro
            nobis, eveniet asperiores nemo omnis...
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            minWidth: { xs: "100%", sm: "50%", md: "50%" },
          }}
        >
          <Box
            component="img"
            src="/Mehendi_hand.jpg"
            alt="Mehendi Hand"
            sx={{
              width: { xs: "100%", sm: "90%", md: "100%" },
              height: { xs: 320, sm: 350, md: 550 },
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          mt: 6,
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4, md: 6 },
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem" },
          }}
        >
          Celebrate Elegance, Connect With Us
        </Typography>

        {/* Contact Info */}
        <Stack spacing={2} alignItems="center" sx={{ mb: 3, mt: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Phone color="primary" />
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
            >
              +91 98765 43210
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Email color="primary" />
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
            >
              mehendi.art@gmail.com
            </Typography>
          </Stack>
        </Stack>

        {/* Social Links */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={{ xs: 2, sm: 3 }}
        >
          <IconButton
            component={Link}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            sx={{ color: "#E4405F" }}
          >
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            sx={{ color: "#1877F2" }}
          >
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener"
            sx={{ color: "#25D366" }}
          >
            <WhatsApp fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default Page;
