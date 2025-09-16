"use client";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { bridalServices, festivalMehendiServices } from "@/Data/bridalService";

export default function ServiceDetail() {
  const { id } = useParams();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const allServices = [...bridalServices, ...festivalMehendiServices];
  const service = allServices.find((s) => s.id.toString() === id);

  if (!service) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", mt: 5 }}>
        Service not found
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "1vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        py: { xs: 2, sm: 3, md: 5 },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "700px", // 👈 adjust this height as needed
          backgroundImage: `url(${service.bgImage || "/bg/bg2/jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat", // 👈 no repetition
          opacity: { md: 0.7, sm: 0.3, xs: 0.3 }, // 👈 reduce opacity
          zIndex: 0,
        }}
      />

      {/* Overlay content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          width: "100%",
          bgcolor: "rgba(255,255,255,0.2)", // optional light overlay for better readability
          p: { xs: 2, sm: 3, md: 5 },
          borderRadius: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontFamily: "serif",
            color: { xs: "#A7124D", sm: "#8A0F3F", md: "#5C0A2C" },
          }}
        >
          {service.title}
        </Typography>

        <Typography
          sx={{
            mb: 2,
            fontFamily: "serif",
            color: "text.secondary",
            fontWeight: "bold",
          }}
        >
          {service.description}
        </Typography>

        <Typography
          sx={{
            mb: 2,
            fontFamily: "serif",
            color: "text.secondary",
            fontWeight: "bold",
          }}
        >
          {service.price}
        </Typography>

        <Typography sx={{ fontWeight: "bold", color: "primary.main" }}>
          Features:
        </Typography>
        <List sx={{ pl: 2 }}>
          {service.features.map((f, i) => (
            <ListItem
              key={i}
              sx={{
                display: "list-item",
                color: "black",
                fontFamily: "serif",
                listStyleType: "disc",
                fontWeight: "bold",
              }}
            >
              {f}
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            onClick={() => router.back()}
            sx={{ flex: 1 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ flex: 1 }}
            onClick={() =>
              router.push(
                `/contactus?title=${encodeURIComponent(
                  service.title || ""
                )}&price=${encodeURIComponent(
                  service.price || ""
                )}&description=${encodeURIComponent(
                  service.description || ""
                )}&features=${encodeURIComponent(
                  JSON.stringify(service.features || [])
                )}`
              )
            }
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
