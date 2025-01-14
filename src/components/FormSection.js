import React from "react";
import { Grid, TextField } from "@mui/material";

function FormSection({ sectionData, sectionName, onInputChange }) {
  if (!sectionData) return null;

  return (
    <Grid container spacing={2}>
      {Object.keys(sectionData).map((field, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <TextField
            fullWidth
            label={field.replace(/([A-Z])/g, " $1")}
            variant="outlined"
            value={sectionData[field]}
            onChange={(e) => onInputChange(sectionName, field, e.target.value)}
            type={
              field.includes("Email")
                ? "email"
                : field.includes("Telefone")
                ? "tel"
                : "text"
            }
            required
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default FormSection;

