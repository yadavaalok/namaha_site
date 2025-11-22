import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { label: "Home", to: "hero-section" },
    { label: "About", to: "about-section" },
    { label: "Properties", to: "properties-section" },
    { label: "Corporate Stays", to: "corporate-section" },
    { label: "Contact", to: "contact-section" },
  ];

  return (
    <AppBar position="fixed" elevation={0} color="inherit" sx={{ borderBottom: "1px solid #eee" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Brand / Logo */}
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          Namaha
        </Typography>

        {/* Navigation Links */}
        <Box>
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              duration={600}
            >
              <Button sx={{ mx: 1.5, fontWeight: 500 }}>
                {item.label}
              </Button>
            </ScrollLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
