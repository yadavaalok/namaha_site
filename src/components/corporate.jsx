import React from "react";
import { Box, Typography, Grid, Paper, Button, Stack } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const corporatePoints = [
  "Long-term corporate stays",
  "Bulk booking options for teams",
  "Special corporate pricing plans",
  "Fully managed accommodations",
  "Daily housekeeping & maintenance",
  "GST Billing & Invoice support"
];

const CorporateSection = () => {
  return (
    <Box
      id="corporate-section"
      sx={{
        py: 10,
        px: 2,
        backgroundColor: "white",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
      }}
    >
      <Box sx={{ maxWidth: "1100px", mx: "auto", textAlign: "center" }}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Corporate Stays
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mb: 5,
            color: "grey.700",
            fontSize: "1.15rem",
          }}
        >
          We offer dedicated corporate accommodation solutions designed for comfort, 
          convenience and cost-efficiency. From long-term stays to team travel, 
          we ensure a seamless experience for employees and corporate partners.
        </Typography>

        {/* Corporate Points */}
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {corporatePoints.map((point, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  height: "100%",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {point}
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <Stack justifyContent="center" direction="row">
          <ScrollLink to="contact-section" smooth={true} duration={600}>
            <Button variant="contained" size="large">
              Request a Corporate Quote
            </Button>
          </ScrollLink>
        </Stack>
      </Box>
    </Box>
  );
};

export default CorporateSection;
