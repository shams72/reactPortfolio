import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-scroll";
import Home from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center",alignItems: "center", gap: 3 }}>
        <Button color="inherit">
          <Link to="greetings" smooth={true} duration={500} offset={-64}>
          <Home style={{ fontSize: 40, color: "goldenrod"}} />
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="about" smooth={true} duration={500} offset={-64}>
            About Me
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="timeline" smooth={true} duration={500} offset={-64}>
            Timeline +  Projects
          </Link>
        </Button>
       
        <Button color="inherit">
          <Link to="contact" smooth={true} duration={500} offset={-64}>
            Contact
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
