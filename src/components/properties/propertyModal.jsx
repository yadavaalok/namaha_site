// src/components/Properties/PropertyModal.jsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Stack,
  Button,
  Chip,
  Divider,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";

/*
  Note: react-slick requires you to import the slick CSS in your root / index.css or App.
  See checklist below for the CSS lines to add.
*/

const PropertyModal = ({ open, property, onClose, onEnquire }) => {
  if (!property) return null;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Typography variant="h6">{property.name}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {property.city}
          </Typography>
        </Box>
        <IconButton onClick={onClose}><CloseIcon /></IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Slider {...sliderSettings}>
            {property.images.map((src, idx) => (
              <Box key={idx} sx={{ display: "flex", justifyContent: "center", p: 1 }}>
                {/* Use object-fit with a container to center images and handle varying sizes */}
                <Box component="img"
                  src={src}
                  alt={`${property.name} - ${idx}`}
                  sx={{ maxHeight: 420, width: "100%", objectFit: "cover", borderRadius: 2 }}
                  onError={(e) => {
                    // fallback for non-image or unreachable path
                    e.target.src = "/assets/properties/placeholder.jpg";
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <Typography variant="body1" sx={{ mb: 2 }}>
          {property.description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
          {property.amenities.map((a) => (
            <Chip key={a} label={a} />
          ))}
        </Stack>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Room Types</Typography>
          <Stack spacing={1}>
            {property.roomTypes.map((r, i) => (
              <Box key={i} sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2">{r.type}</Typography>
                <Typography variant="body2" color="text.secondary">{r.price}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button onClick={onClose}>Close</Button>
          <Button variant="contained" onClick={() => onEnquire(property)}>Enquire Now</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyModal;
