import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          px: { md: 4, xs: 1 },
          py: 2,
          mt: 3,
          bgcolor: "#4B8052",
          opacity: "90%",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          textAlign={"center"}
          sx={{
            fontFamily: "jomolhari",
            fontWeight: "medium",
            color: "white",
            fontSize: { xs: 16, md: 26 },
          }}
        >
          Elegance in Every Stroke
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "jomolhari",
            fontWeight: "medium",
            color: "white",
            fontSize: 12,
            display: "flex",
            gap: 2,
            justifyContent: "center",
          }}
          textAlign={"center"}
        >
          <span style={{ marginRight: "40px" }}>
            <LocalPhoneIcon
              fontSize="small"
              sx={{ marginRight: 1, fontSize: { xs: 10 } }}
            />
            +91 7350304508
          </span>
          <span>
            <MailIcon
              fontSize="small"
              sx={{ marginRight: 1, fontSize: { xs: 15 } }}
            />
            mehendees@gmail.com
          </span>
        </Typography>

        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 5,
          }}
        >
          <span>
            <InstagramIcon
              fontSize="large"
              sx={{
                color: "white",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { color: "#E1306C", transform: "scale(1.2)" },
              }}
            />
          </span>

          <span>
            <FacebookIcon
              fontSize="large"
              sx={{
                color: "white",
                mx: 7,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { color: "#1877F2", transform: "scale(1.2)" },
              }}
            />
          </span>

          <span>
            <WhatsAppIcon
              fontSize="large"
              sx={{
                color: "white",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { color: "#25D366", transform: "scale(1.2)" },
              }}
            />
          </span>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Link
            href="/services"
            underline="hover"
            sx={{ color: "white", fontSize: 14, cursor: "pointer" }}
          >
            Services
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "rgba(255,255,255,0.6)" }}
          />
          <Link
            href="/about"
            underline="hover"
            sx={{ color: "white", fontSize: 14, cursor: "pointer" }}
          >
            About Us
          </Link>
        </Box>

        <Typography
          sx={{ mt: 5, textAlign: "center", color: "white" }}
          variant="body2"
          fontFamily={"inter"}
          gutterBottom
        >
          © 2025 Mehendees . All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
