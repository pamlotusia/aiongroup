import React from "react";
import { Button } from "@mui/material";

function NavigationMenu({ sections, currentSection, onSectionChange }) {
  return (
    <nav className="bank-app-nav">
      {sections.map((section, index) => (
        <Button
          key={index}
          variant="outlined"
          color="primary"
          sx={{
            my: 1,
            width: "100%",
            borderRadius: "8px",
            textAlign: "center",
            backgroundColor: currentSection === section ? "#3f51b5" : "transparent",
            color: currentSection === section ? "#fff" : "black",
          }}
          onClick={() => onSectionChange(section)}
        >
          {section}
        </Button>
      ))}
    </nav>
  );
}

export default NavigationMenu;

