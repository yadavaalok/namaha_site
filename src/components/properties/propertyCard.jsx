// src/components/Properties/PropertyCard.jsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";

const PropertyCard = ({ property, onView }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* image */}
      <CardMedia
        component="img"
        height="180"
        image={property.mainImage}
        alt={property.name}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {property.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {property.city}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {property.amenities.slice(0, 4).map((a) => (
            <Chip key={a} label={a} size="small" sx={{ mb: 0.5 }} />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button size="small" onClick={() => onView(property)}>
          View Details
        </Button>
        <Button size="small" variant="contained" onClick={() => onView(property)}>
          Enquire
        </Button>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
