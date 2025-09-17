import { Box, Typography, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import { Phone, Email } from "@mui/icons-material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import Link from "next/link";

const Page = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/bg/bg2.jpg')", // 👈 put your image in public folder
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(255, 255, 255, 0.85)", // 👈 overlay for readability
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 4 },
          position: "relative",
          zIndex: 1, // 👈 content above overlay
          p: 2,
        }}
      >
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
          <Box
            sx={{
              flex: 1,
              bgcolor: "rgba(255, 255, 255, 0.5)",
              borderRadius: 3,
              p: { xs: 2.5, sm: 3, md: 5 },
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
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
                color: "black",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                textAlign: { xs: "center", md: "justify" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              repellendus veniam ipsum voluptates! Possimus, autem
              necessitatibus reiciendis totam repellendus tempore quo, iure nam
              debitis porro nobis, eveniet asperiores nemo omnis...
            </Typography>
          </Box>
        </Box>

        {/* Section 2 */}
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
          <Box
            sx={{
              flex: 1,
              bgcolor: "rgba(255, 255, 255, 0.5)",
              borderRadius: 3,
              p: { xs: 2.5, sm: 3, md: 5 },
              textAlign: { xs: "center", md: "left" },
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
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
                color: "black",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              repellendus veniam ipsum voluptates! Possimus, autem
              necessitatibus reiciendis totam repellendus tempore quo, iure nam
              debitis porro nobis, eveniet asperiores nemo omnis...
            </Typography>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box
          sx={{
            mt: 6,
            py: { xs: 4, md: 6 },
            px: { xs: 2, sm: 4, md: 6 },
            bgcolor: "rgba(255, 255, 255, 0.5)",
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
    </Box>
  );
};

export default Page;
