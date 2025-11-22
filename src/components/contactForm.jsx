import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import properties from "../../data/propertiesData";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    property: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setSnackbar({
        open: true,
        message: "Your enquiry has been submitted!",
        severity: "success",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        property: "",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Error submitting form. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <Box
      id="contact-section"
      sx={{
        py: 10,
        px: 2,
        backgroundColor: "white",
        borderTop: "1px solid #eee",
      }}
    >
      <Box sx={{ maxWidth: "700px", mx: "auto" }}>
        <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              fullWidth
            />

            <TextField
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              fullWidth
            />

            <TextField
              select
              label="Property (Optional)"
              name="property"
              value={form.property}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">None</MenuItem>
              {properties.map((p) => (
                <MenuItem key={p.id} value={p.name}>
                  {p.name}
                </MenuItem>
              ))}
            </TextField>

            <Button type="submit" variant="contained" size="large">
              Submit Enquiry
            </Button>
          </Stack>
        </form>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert variant="filled" severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default ContactForm;
