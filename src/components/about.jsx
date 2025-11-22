import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const uspList = [
  { title: "Clean & Fully Managed Guest Houses", desc: "Hygienic rooms, regular housekeeping, and well-maintained amenities." },
  { title: "Corporate Tie-ups", desc: "Trusted by companies for long-term and short-term accommodation." },
  { title: "24/7 Support", desc: "Round-the-clock assistance for all guest needs." },
  { title: "Custom Packages", desc: "Flexible pricing and tailored packages for individuals and corporate teams." },
];

const About = () => {
  return (
    <Box
      id="about-section"
      sx={{
        py: 10,
        px: 2,
        maxWidth: "1200px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 3 }}>
        About Us
      </Typography>

      <Typography
        variant="body1"
        sx={{ maxWidth: "800px", mx: "auto", mb: 6, color: "grey.700" }}
      >
        We provide clean, comfortable, and fully managed guest houses tailored for both corporate and individual stays. 
        Our focus is on convenience, reliability, and top-class hospitality to ensure every guest feels at home.
      </Typography>

      {/* USP Grid */}
      <Grid container spacing={4} justifyContent="center">
        {uspList.map((usp, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {usp.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                {usp.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
