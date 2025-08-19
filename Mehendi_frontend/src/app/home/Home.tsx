import { Box, Typography, Button, Divider } from "@mui/material";
import PackageCards from "../components/PackageCards";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"; // 🏆 Professionalism
import VerifiedIcon from "@mui/icons-material/Verified"; // ✅ Quality assurance
import HomeIcon from "@mui/icons-material/Home"; // 🏡 Customer comfort

export default function Home() {
  const pkgData = [
    { image: "/bridal.jpg", title: "Bridal Package" },
    { image: "/basic.jpg", title: "Basic Package" },
    { image: "/festival.jpg", title: "Festival Package" },
  ];
  return (
    <>
      {/* First Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // stack vertically
          alignItems: "center", // center horizontally
          justifyContent: "center", // center vertically
          height: "80vh",
          textAlign: "center",
          p: 2,
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src="/mehendiLogo.jpg"
          alt="Logo"
          sx={{
            width: { xs: 150, sm: 200, md: 200 },
            height: "auto",
            mb: 3,
            borderRadius: 16,
          }}
        />

        {/* Heading */}
        <Typography variant="h4" fontFamily={"Inria Serif"} gutterBottom>
          Mehendees
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          fontFamily={"Judson"}
          sx={{
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Let your hands tell a story of celebration, culture, and joy with
          intricate mehendi art
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            mt: 3,
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
      </Box>

      {/* Second Section (Image centered) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 5,
        }}
      >
        <Box
          component="img"
          src="/Mehendi_hand.jpg"
          alt="Mehendi Hand"
          sx={{
            width: { xs: "100%", sm: "90%", md: "80%" }, // responsive full width
            height: 950, // fixed height to allow cropping
            objectFit: "cover", // crop instead of stretching
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />
      </Box>
      {/* {About us} */}
      <Box
        sx={{
          backgroundColor: "#4B8052",
          color: "white",
          textAlign: "center",
          px: 4,
          py: 8,
          mt: 4,
          clipPath: "ellipse(100% 100% at 40% 100%)", // 👈 curve from middle
        }}
      >
        <Typography
          variant="h4"
          letterSpacing={"10px"}
          fontWeight={"medium"}
          fontFamily={"inter"}
          my={2}
          gutterBottom
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          maxWidth="940px"
          mx="auto"
          fontFamily={"inter"}
          fontSize={20}
        >
          We are passionate about the art of Mehendi and believe that every
          celebration deserves a touch of tradition and elegance. Our platform
          connects you with skilled and trained Mehendi artists who bring
          creativity, precision, and love for design to every occasion. Whether
          it’s a wedding, engagement, festival, or any special event, we make
          sure your day is made more beautiful with stunning Mehendi designs.
          Our goal is not just to decorate your hands but to create an
          experience that stays in your memory forever.
        </Typography>
      </Box>

      {/* {Packages} */}
      <Box sx={{ px: 7, py: 8, mt: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            maxWidth: 600,
            fontSize: 30,
            fontWeight: "bold",
            letterSpacing: "7px",
            fontFamily: "inter",
          }}
        >
          Crafting Traditions with a Modern Touch
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            mt: 4,
            justifyContent: "center",
          }}
        >
          {pkgData &&
            pkgData.map((pkg, i) => (
              <PackageCards key={i} image={pkg.image} title={pkg.title} />
            ))}
        </Box>
      </Box>

      {/* { what we serve} */}
      <Box
        sx={{
          mt: 3,
          bgcolor: "#EEA700",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 5,
          p: 4,
          mx: 4,
        }}
      >
        {/* Image */}
        <Box
          component={"img"}
          src="/footMehendi.jpg"
          alt="Mehendi Hand"
          sx={{ width: 450, height: 500, borderRadius: 4 }}
        />

        {/* Right Section - Centered */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          // textAlign="center"
          gap={3}
          flex={1}
        >
          {/* Title */}
          <Typography
            variant="h1"
            fontFamily="karma"
            fontWeight="bold"
            fontSize={35}
            color="white"
          >
            What We Serve
          </Typography>

          <Divider sx={{ bgcolor: "white", width: "60%" }} />

          {/* Professionalism */}
          <Box display="flex" alignItems="center" gap={1}>
            <WorkspacePremiumIcon sx={{ color: "white", fontSize: 35 }} />
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ fontSize: 28, fontFamily: "karma" }}
            >
              Professionalism
            </Typography>
          </Box>

          <Divider sx={{ bgcolor: "white", width: "60%" }} />

          {/* Quality Assurance */}
          <Box display="flex" alignItems="center" gap={1}>
            <VerifiedIcon sx={{ color: "white", fontSize: 35 }} />
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ fontSize: 28, fontFamily: "karma" }}
            >
              Quality Assurance
            </Typography>
          </Box>

          <Divider sx={{ bgcolor: "white", width: "60%" }} />

          {/* Customer Comfort */}
          <Box display="flex" alignItems="center" gap={1}>
            <HomeIcon sx={{ color: "white", fontSize: 35 }} />
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ fontSize: 28, fontFamily: "karma" }}
            >
              Customer Comfort
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* why to choose us */}
      {/* Why Choose Us */}
      <Box
        sx={{
          mt: 6,
          mx: 4,
          borderRadius: 4,
          bgcolor: "#4B8052",
          color: "white",
          textAlign: "center",
          p: 5,
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            boxShadow: "0px 8px 30px rgba(0,0,0,0.4)",
            transform: "scale(1.01)",
          },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          fontFamily="karma"
          fontWeight="bold"
          fontSize={35}
          gutterBottom
          sx={{
            letterSpacing: "5px",
          }}
        >
          Why Choose Us
        </Typography>

        {/* Hidden Text - Reveals on Hover */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: 950,
            mx: "auto",
            mt: 3,
            fontSize: 20,
            fontFamily: "inter",
            // opacity: 0,
            // transform: "translateY(15px)", // slide-in effect
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              opacity: 1,
              transform: "translateY(0)",
            },
          }}
        >
          At Mehendees, we believe Mehendi is more than just an art – it’s a
          tradition that adds beauty, joy, and meaning to your special moments.
          That’s why we bring you a team of trained and professional Mehendi
          artists who combine creativity with precision. We use only premium
          quality, natural Mehendi to ensure deep, long-lasting color without
          any harmful effects. Our service is designed to be hassle-free,
          punctual, and personalized, so you can focus on enjoying your
          celebration while we handle the details. From intricate bridal designs
          to festive and modern patterns, we make sure every stroke reflects
          elegance and perfection. Choosing us means choosing trust, quality,
          and unforgettable memories.
        </Typography>
      </Box>
    </>
  );
}
