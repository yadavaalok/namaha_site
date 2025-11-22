import React from "react";
import { Box, Typography, Grid, Paper, Avatar, Stack } from "@mui/material";
import testimonials from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <Box
      id="testimonials-section"
      sx={{
        py: 10,
        px: 2,
        backgroundColor: "background.default",
      }}
    >
      <Box sx={{ maxWidth: "1100px", mx: "auto", textAlign: "center" }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Testimonials
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mb: 6,
            color: "grey.700",
          }}
        >
          Here’s what our guests and corporate partners say about their experience with Namaha Stays.
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((t, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                <Stack spacing={2} alignItems="center">
                  <Avatar
                    src={t.image}
                    alt={t.name}
                    sx={{ width: 64, height: 64 }}
                  />

                  <Typography variant="h6">{t.name}</Typography>

                  <Typography variant="body2" sx={{ color: "grey.600", textAlign: "center" }}>
                    {t.message}
                  </Typography>

                  {t.company && (
                    <Typography variant="subtitle2" sx={{ color: "primary.main", fontWeight: 600 }}>
                      {t.company}
                    </Typography>
                  )}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
