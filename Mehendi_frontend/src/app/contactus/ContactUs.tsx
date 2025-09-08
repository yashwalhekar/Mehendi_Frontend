"use client";

import { useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

export default function ContactUs() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "";
  const price = searchParams.get("price") || "";
  const description = searchParams.get("description") || "";
  const featuresParam = searchParams.get("features") || "[]";
  const features: string[] = JSON.parse(featuresParam);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const ownerNumber = "919834503365"; // Replace with owner's WhatsApp number

    const whatsappMessage = `
*New Mehendi Booking Request* 🌸

*Service:* ${title}
*Price:* ${price}
*Description:* ${description}
*Features:* ${features.join(", ")}

*Customer Info*
👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
💬 Message: ${form.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${ownerNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        p: { xs: 2, sm: 3, md: 4 },
        color: "black",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/backgrounImg.jpg)", // ✅ your background stays
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15, // keep lighter for readability
          zIndex: -1,
        },
      }}
    >
      {/* Service details */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontFamily: "'Playfair Display', serif",
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
          color: { xs: "#A7124D", sm: "#8A0F3F", md: "#5C0A2C" },
        }}
      >
        {title || "No Service Selected"}
      </Typography>

      {description && (
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            mb: 3,
            maxWidth: 700,
            mx: "auto",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            lineHeight: { xs: 1.4, sm: 1.6, md: 1.8 },
            color: "#222",
          }}
        >
          {description}
        </Typography>
      )}

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
          color: { xs: "#444", md: "#111" },
        }}
      >
        Price: {price || "N/A"}
      </Typography>

      {/* {features.length > 0 && (
        <>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
              color: "#A7124D",
            }}
          >
            Features:
          </Typography>
          <List
            sx={{
              maxWidth: 600,
              mx: "auto",
              textAlign: "left",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              color: "#333",
            }}
          >
            {features.map((f, i) => (
              <ListItem
                key={i}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  pl: { xs: 2, sm: 3 },
                }}
              >
                {f}
              </ListItem>
            ))}
          </List>
        </>
      )} */}

      {/* Contact Form */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
          mt: 4,
          width: "100%",
          maxWidth: { xs: "100%", sm: 500 },
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          background: "rgba(255,255,255,0.8)", // ✅ keeps text readable on bg
          boxShadow: { xs: "none", sm: "0 4px 20px rgba(0,0,0,0.1)" },
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          size={isMobile ? "small" : "medium"}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          size={isMobile ? "small" : "medium"}
        />
        <TextField
          label="Phone Number"
          name="phone"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          size={isMobile ? "small" : "medium"}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          rows={isMobile ? 3 : 4}
          onChange={handleChange}
          size={isMobile ? "small" : "medium"}
        />
        <Button
          type="submit"
          variant="contained"
          size={isMobile ? "medium" : "large"}
          sx={{
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
            py: { xs: 1, sm: 1.2 },
            bgcolor: "#A7124D",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            "&:hover": { bgcolor: "#8a0f3f" },
          }}
        >
          Book Now via Whatsapp
        </Button>
      </Box>
    </Box>
  );
}
