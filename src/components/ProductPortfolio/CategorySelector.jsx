/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Checkbox, FormControlLabel, Grid, Button, Typography, Card,Box } from "@mui/material";
import { ChevronDown,ChevronUp } from "lucide-react";
const CategorySelector = ({
  categories,
  selectedCategories,
  toggleCategory,
  selectAllCategories,
  clearAllCategories,
  expandMainCategory,
  toggleMainCategoryExpansion
}) => {
  return (
    <>
          <Typography variant="h3" gutterBottom style={{color:"#ff4208"}}>
            Available Product Profile
          </Typography>
    <Card className="mb-3 p-3" style={{ color: "black" }}>
        <Box marginBottom={2} display="flex" justifyContent="between">
          <Typography className="col-md-8" variant="h4" gutterBottom>
            Select Craft Category{" "}
            <span
              style={{ marginLeft: "15px", color: "#ff4208",cursor:'pointer' }}
              onClick={toggleMainCategoryExpansion}
            >
              {expandMainCategory ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </span>
          </Typography>
          <Grid
            item
            xs={12}
            sm={7}
            container
            justifyContent="flex-end"
            spacing={1}
          >
            <Grid item>
              <Button onClick={selectAllCategories} variant="outlined">
                Select All
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={clearAllCategories} variant="outlined">
                Clear All
              </Button>
            </Grid>
          </Grid>
        </Box>

        {expandMainCategory && (
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category.id}>
                <Card sx={{ pl: 2, borderRadius: 2, boxShadow: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        name={category.id}
                      />
                    }
                    label={category.name}
                    style={{ color: "black" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Card>

      </>
  );
};

export default CategorySelector;
