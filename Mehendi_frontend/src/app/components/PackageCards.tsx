"use client";

import { Box, Card, CardMedia, Typography } from "@mui/material";

interface PackageCardProps {
  image: string;
  title: string;
  height?: number;
}

const PackageCards: React.FC<PackageCardProps> = ({ image, title }) => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 4,
        width: 280,
        height: 300,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 8,
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardMedia component="img" image={image} alt={title} />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100px",
          color: "white",
          py: 1.5,
          px: 2,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <Typography variant="h6" fontWeight={"bold"} fontFamily={"inter"}>
          {title}
        </Typography>
      </Box>
    </Card>
  );
};

export default PackageCards;
