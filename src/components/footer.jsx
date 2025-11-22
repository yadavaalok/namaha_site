import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        textAlign: "center",
        backgroundColor: "white",
        borderTop: "1px solid #eee",
      }}
    >
      <Stack spacing={1}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Namaha
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Email: contact@namahastays.com
        </Typography>

        <Typography variant="body2" color="text.secondary">
          WhatsApp: +91 98765 43210
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 1 }}>
          <Link href="#" target="_blank" underline="none">
            Instagram
          </Link>
          <Link href="#" target="_blank" underline="none">
            Facebook
          </Link>
          <Link href="#" target="_blank" underline="none">
            LinkedIn
          </Link>
        </Stack>

        <Typography variant="caption" color="grey.600" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Namaha Stays. All Rights Reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
