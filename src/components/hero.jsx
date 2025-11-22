import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <Box
      id="hero-section"
      sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: "url('/assets/hero/hero-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 700 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Premium Guest Houses for Corporate & Individual Stays
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, fontSize: "1.25rem", color: "grey.700" }}>
          Clean, comfortable and fully managed guest houses with 24/7 support and corporate tie-ups.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          {/* Scroll to Properties */}
          <ScrollLink to="properties-section" smooth={true} duration={600}>
            <Button variant="contained" size="large">
              Explore Rooms
            </Button>
          </ScrollLink>

          {/* Scroll to Corporate Section */}
          <ScrollLink to="corporate-section" smooth={true} duration={600}>
            <Button variant="outlined" color="primary" size="large">
              Corporate Stays Enquiry
            </Button>
          </ScrollLink>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
