"use client";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
    <Box sx={{ p: { xs: 2, sm: 3, md: 5 }, maxWidth: "900px", mx: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        {/* <IconButton onClick={() => router.back()}>
          <ArrowBackIcon />
        </IconButton> */}
        <Typography
          variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
          sx={{
            fontWeight: "bold",
            ml: 1,
            fontFamily: "serif",
            color: { xs: "#A7124D", sm: "#8A0F3F", md: "#5C0A2C" },
          }}
        >
          {service.title}
        </Typography>
      </Box>

      <Typography sx={{ mb: 3, fontFamily: "serif", color: "text.secondary" }}>
        {service.description}
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
          variant="outlined"
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
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
