/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Card,
  Icon,
  CardContent,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
} from "@mui/material";
import { ChevronDown, ChevronUp } from "lucide-react";
const DetailCard = ({ key, title, items, onSelection, selectedValues }) => {
  const [expandedCategories, setExpandedCategories] = useState({}); // Store expanded state for each section

  // Toggle the expansion state for a specific section based on key
  const toggleCategoryExpansion = () => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the state for the given key
    }));
  };
  console.log(expandedCategories);
  

  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ display: "inline-flex", alignItems: "center" }}
        >
          {title}{" "}
          <Icon
            display="inline"
            style={{ marginLeft: "15px", color: "#ff4208", height: "41px",cursor:'pointer' }}
            onClick={toggleCategoryExpansion}
          >
            {expandedCategories[key] ? (
              <ChevronUp className=" w-5 mx-auto" />
            ) : (
              <ChevronDown
                className=" w-5 mx-auto"
                style={{ height: "32px" }}
              />
            )}
          </Icon>
        </Typography>

        {expandedCategories[key] && (
          <Grid container spacing={3}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ pl: 2 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={item}
                        checked={selectedValues.includes(item)} // Ensure the checkbox is checked based on selection
                        onChange={() => onSelection(item)} // Call the selection handler when toggled
                        sx={{
                          "&.Mui-checked": {
                            color: "#f44336", // Change the color here to any color you want
                          },
                        }}
                      />
                    }
                    label={item}
                    style={{ color: "black" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default React.memo(DetailCard);
