"use client";

import { Box, Typography, Button, Divider, Skeleton } from "@mui/material";
import PackageCards from "../components/PackageCards";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VerifiedIcon from "@mui/icons-material/Verified";
import HomeIcon from "@mui/icons-material/Home";
import { JSX, useState } from "react";
import Footer from "../components/layout/Footer";
import {
  pkgData,
  aboutUs,
  whatWeServe,
  whyChooseUs,
} from "../../Data/homeContent";
import Link from "next/link";

export default function Home() {
  const iconMap: Record<string, JSX.Element> = {
    WorkspacePremiumIcon: (
      <WorkspacePremiumIcon
        sx={{ color: "white", fontSize: { xs: 25, sm: 30, md: 35 } }}
      />
    ),
    VerifiedIcon: (
      <VerifiedIcon
        sx={{ color: "white", fontSize: { xs: 25, sm: 30, md: 35 } }}
      />
    ),
    HomeIcon: (
      <HomeIcon sx={{ color: "white", fontSize: { xs: 25, sm: 30, md: 35 } }} />
    ),
  };

  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <>
      {/* Background wrapper with overlay */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/backgrounImg.jpg')", // 👈 put your bg image here
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.65, // 👈 control opacity here
            zIndex: -1,
          },
        }}
      >
        {/* First Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: "60vh", sm: "70vh", md: "80vh" },
            textAlign: "center",
            p: { xs: 1, sm: 2, md: 4 },
          }}
        >
          {/* Logo */}
          {!loaded && (
            <Skeleton
              variant="rounded"
              width={200}
              height={60}
              sx={{
                mb: 3,
                borderRadius: 4,
              }}
            />
          )}
          <Box
            component="img"
            src="/newLogo.jpg"
            alt="Logo"
            onLoad={() => setLoaded(true)}
            sx={{
              width: { xs: 130, sm: 160, md: 250 },
              height: "auto",
              mb: -3,
              borderRadius: 2,
              display: loaded ? "block" : "none",
            }}
          />

          {/* Heading */}
          <Typography
            variant="h4"
            fontFamily={"Serif"}
            gutterBottom
            sx={{
              fontSize: { xs: 22, sm: 28, md: 34 },
              color: "black",
            }}
          >
            Mehendees
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            fontFamily={"Serif"}
            sx={{
              maxWidth: { xs: "90%", sm: 600 },
              mx: "auto",
              fontSize: { xs: 16, sm: 18, md: 20 },
              color: "black",
            }}
          >
            Let your hands tell a story of celebration, culture, and joy with
            intricate mehendi art
          </Typography>

          {/* CTA Button */}
          <Link href={"/categories"}>
            <Button
              variant="contained"
              size="small"
              sx={{
                mt: 3,
                px: { xs: 2, sm: 3, md: 4 },
                py: { sm: 1.2 },
                fontSize: { xs: 12, sm: 14, md: 16 },
                background: "#FF5B0A",
                opacity: "0.9",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: "#e04e08",
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 15px rgba(255, 91, 10, 0.5)",
                },
              }}
            >
              Make It Mehendi Perfect ! Book Now
            </Button>
          </Link>
        </Box>

        {/* Second Section (Image) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: { xs: 3, sm: 5 },
          }}
        >
          <Box
            component="img"
            src="/Mehendi_hand.jpg"
            alt="Mehendi Hand"
            sx={{
              width: { xs: "95%", sm: "85%", md: "80%" },
              height: { xs: 250, sm: 450, md: 950 },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          />
        </Box>

        {/* About Us */}
        <Box
          sx={{
            backgroundColor: "#4B8052",
            color: "white",
            textAlign: "center",
            px: { xs: 2, sm: 4 },
            py: { xs: 5, sm: 8 },
            mt: 4,
            clipPath: { xs: "none", sm: "ellipse(100% 100% at 40% 100%)" },
          }}
        >
          <Typography
            variant="h4"
            letterSpacing={"5px"}
            fontWeight={"medium"}
            fontFamily={"Serif"}
            my={2}
            gutterBottom
            sx={{ fontSize: { xs: 22, sm: 28, md: 34 } }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            maxWidth="940px"
            mx="auto"
            fontFamily={"Serif"}
            sx={{ fontSize: { xs: 14, sm: 16, md: 20 } }}
          >
            {aboutUs}
          </Typography>
        </Box>

        {/* Packages */}
        <Box sx={{ px: { xs: 2, sm: 4, md: 7 }, py: { xs: 5, sm: 8 }, mt: 3 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              maxWidth: 600,
              fontSize: { xs: 22, sm: 26, md: 30 },
              fontWeight: "bold",
              letterSpacing: "7px",
              fontFamily: "Serif",
              textAlign: { xs: "center", sm: "left" },
              color: "black",
            }}
          >
            Crafting Traditions with a Modern Touch
          </Typography>

          {/* Scrollable Container */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 1, md: 6 },
              mt: 4,
              justifyContent: {
                xs: "flex-start",
                sm: "flex-start",
                md: "center",
              },
              overflowX: { xs: "auto", sm: "auto" }, // scroll only on mobile
              scrollSnapType: { xs: "x mandatory", sm: "x mandatory" }, // snap effect
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar
              px: { xs: 1, sm: 0 }, // padding for partial visibility
            }}
          >
            {pkgData.map((pkg, i) => (
              <Box
                key={i}
                sx={{
                  flex: { xs: "0 0 85%", sm: "0 0 45%", md: "0 0 auto" }, // ✅ less than 100% on mobile
                  scrollSnapAlign: { xs: "start", sm: "center", md: "center" }, // snap start looks better for partial visibility
                }}
              >
                <PackageCards image={pkg.image} title={pkg.title} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* What We Serve */}
        <Box
          sx={{
            mt: 3,
            bgcolor: "#EEA700",
            borderRadius: 4,
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            gap: { xs: 3, sm: 3, md: 5 },
            p: { xs: 2, sm: 2 },
            mx: { xs: 2, sm: 2 },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <Box
            component={"img"}
            src="/footMehendi.jpg"
            alt="Mehendi Hand"
            sx={{
              width: { xs: "100%", sm: 400, md: 450 },
              height: { xs: 250, sm: 400, md: 500 },
              borderRadius: 4,
              objectFit: "cover",
            }}
          />
          {/* Right Section */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
            flex={1}
          >
            <Typography
              variant="h1"
              fontFamily="Serif"
              fontWeight="bold"
              sx={{ fontSize: { xs: 24, sm: 27, md: 35 }, color: "white" }}
            >
              What We Serve
            </Typography>
            <Divider
              sx={{
                bgcolor: "white",
                width: { xs: "100%", sm: "80%", md: "60%" },
              }}
            />

            {whatWeServe.map((item, i) => (
              <Box
                key={i}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
                width="100%"
              >
                {/* Row with icon + text */}
                <Box display="flex" alignItems="center" gap={1}>
                  {iconMap[item.icon]}
                  <Typography
                    color="white"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: 18, sm: 20, md: 28 },
                      fontFamily: "Serif",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                {/* Divider (skip after last item) */}
                {i < whatWeServe.length - 1 && (
                  <Divider
                    sx={{
                      bgcolor: "white",
                      width: { xs: "100%", sm: "80%", md: "60%" },
                      my: 1,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Why Choose Us */}
        <Box
          sx={{
            mt: 6,
            mx: { xs: 2, sm: 4 },
            borderRadius: 4,
            bgcolor: "#4B8052",
            color: "white",
            textAlign: "center",
            p: { xs: 3, sm: 4, md: 5 },
            transition: "all 0.4s ease-in-out",
            "&:hover": {
              boxShadow: "0px 8px 30px rgba(0,0,0,0.4)",
              transform: "scale(1.01)",
            },
          }}
        >
          <Typography
            variant="h4"
            fontFamily="Serif"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: 24, sm: 30, md: 35 },
              letterSpacing: "5px",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 950,
              mx: "auto",
              mt: 3,
              fontSize: { xs: 14, sm: 16, md: 20 },
              fontFamily: "Serif",
              transition: "all 0.3s ease-in-out",
              "&:hover": { opacity: 1, transform: "translateY(0)" },
            }}
          >
            {whyChooseUs}
          </Typography>
        </Box>

        <Footer />
      </Box>
    </>
  );
}
