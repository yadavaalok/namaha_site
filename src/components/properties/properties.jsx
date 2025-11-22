// src/components/Properties/Properties.jsx
import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import propertiesData from "../../data/propertiesData";
import PropertyCard from "./propertyCard";
import PropertyModal from "./propertyModal";
import { scroller } from "react-scroll";

const Properties = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleView = (property) => {
    setSelected(property);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  const handleEnquire = (property) => {
    // Scroll to contact section and prefill (if you add prefill later)
    scroller.scrollTo("contact-section", { smooth: true, duration: 600, offset: -80 });
    // You can pass property info to the contact form via global state/context or query params
    handleClose();
  };

  return (
    <Box id="properties-section" sx={{ py: 10, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
          Our Properties
        </Typography>

        <Grid container spacing={3}>
          {propertiesData.map((p) => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <PropertyCard property={p} onView={handleView} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <PropertyModal open={open} property={selected} onClose={handleClose} onEnquire={handleEnquire} />
    </Box>
  );
};

export default Properties;
