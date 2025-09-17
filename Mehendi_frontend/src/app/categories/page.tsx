"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";

import {
  bridalServices,
  festivalMehendiServices,
  regularServices,
} from "@/Data/bridalService";
import Footer from "../components/layout/Footer";
import { useSearchParams } from "next/navigation";

const ServicesPage = () => {
  const bridalRef = useRef<HTMLDivElement | null>(null);

  const festivalRef = useRef<HTMLDivElement | null>(null);
  const basicRef = useRef<HTMLDivElement | null>(null);

  const [festivalScroll, setFestivalScroll] = useState({
    left: false,
    right: true,
  });
  const [basicScroll, setBasicScroll] = useState({ left: false, right: true });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [bridalScroll, setBridalScroll] = useState({
    left: false,
    right: true,
  });

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const checkScroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    setState: React.Dispatch<
      React.SetStateAction<{ left: boolean; right: boolean }>
    >
  ) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      setState({
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth - 1,
      });
    }
  };

  useEffect(() => {
    const handleScrollSetup = (
      ref: React.RefObject<HTMLDivElement | null>,
      setState: React.Dispatch<
        React.SetStateAction<{ left: boolean; right: boolean }>
      >
    ) => {
      if (ref.current) {
        checkScroll(ref, setState);
        const handleScroll = () => checkScroll(ref, setState);
        ref.current.addEventListener("scroll", handleScroll);
        return () => ref.current?.removeEventListener("scroll", handleScroll);
      }
    };

    const cleanupBridal = handleScrollSetup(bridalRef, setBridalScroll);
    const cleanupFestival = handleScrollSetup(festivalRef, setFestivalScroll);
    const cleanupBasic = handleScrollSetup(basicRef, setBasicScroll);

    return () => {
      cleanupBridal && cleanupBridal();
      cleanupFestival && cleanupFestival();
      cleanupBasic && cleanupBasic();
    };
  }, []);

  const scroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // ----------- Card Component ----------
  type Service = {
    id: number | string;
    title: string;
    description: string;
    price: string;
    image: string;
  };
  const ServiceCard = ({ service, bg }: { service: Service; bg: string }) => (
    <Box
      sx={{
        minWidth: { xs: "85%", sm: "48%", md: "40%", lg: "25%" },
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        bgcolor: bg,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={service.image}
        alt={service.title}
        sx={{ width: "100%", height: 200, objectFit: "cover" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", p: 2, flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Serif",
            fontSize: 20,
            color: { xs: "#A7124D", sm: "#8A0F3F", md: "#5C0A2C" },
          }}
          gutterBottom
        >
          {service.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: "serif", color: "black" }}
          gutterBottom
        >
          {service.description}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", mb: 2, color: "black" }}
        >
          {service.price}
        </Typography>

        {/* View Details instead of showing full features */}
        <Box sx={{ mt: "auto" }}>
          <Link href={`/categories/${service.id}`} passHref>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#A7124D",
                color: "white",
              }}
              fullWidth
            >
              View Details
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Box sx={{ position: "relative", minHeight: "100vh", p: 2 }}>
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('/backgrounImg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        <Box sx={{ py: 2, mb: 4, width: { xs: "100%", sm: "70%", lg: "40%" } }}>
          <Typography variant="h4" sx={{ fontFamily: "Serif", color: "black" }}>
            Elegant Mehendi Packages for Every Celebration
          </Typography>
        </Box>

        {/* ---------------- BRIDAL SECTION ---------------- */}

        {(!type || type === "bridal") && (
          <Box sx={{ position: "relative", zIndex: 1, mb: 6 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              fontSize={20}
              sx={{ color: "black" }}
              gutterBottom
            >
              Bridal Section
            </Typography>
            <Divider sx={{ fontWeight: "bold", my: 2 }} />

            {/* Arrows */}
            {isDesktop && bridalScroll.left && (
              <IconButton
                onClick={() => scroll(bridalRef, "left")}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: -15,
                  transform: "translateY(-50%)",
                  bgcolor: "white",
                  opacity: 0.5,
                  boxShadow: 2,
                  "&:hover": { opacity: 0.9 },
                }}
              >
                <ArrowBackIos />
              </IconButton>
            )}
            {isDesktop && bridalScroll.right && (
              <IconButton
                onClick={() => scroll(bridalRef, "right")}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: -15,
                  transform: "translateY(-50%)",
                  bgcolor: "white",
                  opacity: 0.5,
                  boxShadow: 2,
                  "&:hover": { opacity: 0.9 },
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            )}

            <Box
              ref={bridalRef}
              sx={{
                display: "flex",
                gap: 3,
                overflowX: "auto",
                pb: 2,
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {bridalServices.map((service) => (
                <ServiceCard key={service.id} service={service} bg="#FFFCF4" />
              ))}
            </Box>
          </Box>
        )}

        {/* ---------------- OTHER SERVICES SECTION ---------------- */}
        {(!type || type === "festival") && (
          <Box sx={{ position: "relative", zIndex: 1, mb: 6 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="start"
              gutterBottom
              fontSize={20}
              sx={{ color: "black", fontFamily: "Serif" }}
            >
              Festival Services
            </Typography>
            <Divider sx={{ fontWeight: "bold", my: 2 }} />
            {/* Arrows */}
            {isDesktop && festivalScroll.left && (
              <IconButton
                onClick={() => scroll(festivalRef, "left")}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: -15,
                  transform: "translateY(-50%)",
                  bgcolor: "white",
                  opacity: 0.5,
                  boxShadow: 2,
                  "&:hover": { opacity: 0.9 },
                }}
              >
                <ArrowBackIos />
              </IconButton>
            )}
            {isDesktop && festivalScroll.right && (
              <IconButton
                onClick={() => scroll(festivalRef, "right")}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: -15,
                  transform: "translateY(-50%)",
                  bgcolor: "white",
                  opacity: 0.5,
                  boxShadow: 2,
                  "&:hover": { opacity: 0.9 },
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            )}

            <Box
              ref={festivalRef}
              sx={{
                display: "flex",
                gap: 3,
                overflowX: "auto",
                pb: 2,
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {festivalMehendiServices.map((service) => (
                <ServiceCard key={service.id} service={service} bg="#FFFAF4" />
              ))}
            </Box>
          </Box>
        )}

        {/* Basic Section */}
        {(!type || type === "regular") && (
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="start"
              gutterBottom
              fontSize={20}
              sx={{ color: "black", fontFamily: "serif" }}
            >
              Regular Services
            </Typography>
            <Divider sx={{ fontWeight: "bold", my: 2 }} />
            {/* Arrows */}
            {isDesktop && basicScroll.left && (
              <IconButton
                onClick={() => scroll(basicRef, "left")}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: -15,
                  transform: "translateY(-50%)",
                  bgcolor: "white",
                  opacity: 0.5,
                  boxShadow: 2,
                  "&:hover": { opacity: 0.9 },
                }}
              >
                <ArrowBackIos />
              </IconButton>
            )}
            {isDesktop && basicScroll.right && (
              <IconButton
                onClick={() => scroll(basicRef, "right")}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: -15,
                  transform: "translateY(-50%)",
                  bgcolor: "white",
                  opacity: 0.5,
                  boxShadow: 2,
                  "&:hover": { opacity: 0.9 },
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            )}

            <Box
              ref={basicRef}
              sx={{
                display: "flex",
                gap: 3,
                overflowX: "auto",
                pb: 2,
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {regularServices.map((service) => (
                <ServiceCard key={service.id} service={service} bg="#FFFAF4" />
              ))}
            </Box>
          </Box>
        )}
      </Box>

      <Footer />
    </>
  );
};

export default ServicesPage;
