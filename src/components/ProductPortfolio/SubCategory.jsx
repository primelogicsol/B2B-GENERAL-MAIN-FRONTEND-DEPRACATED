/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardContent, Grid, Button, Typography ,FormControlLabel,Checkbox} from "@mui/material";
import { ChevronDown, ChevronUp } from "lucide-react";
const SubcategorySelector = ({
  selectedCategories,
  categories,
  toggleSubcategory,
  expandedCategories,
  toggleCategoryExpansion,
  selectedSubcategories,
  selectAllSubcategories,
  clearAllSubcategories
}) => {
  return selectedCategories.map((categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (!category) return null;

    return (
        <>
        <Card key={category.id} sx={{ marginBottom: 2 }} className="w-100">
         
               <Typography variant="h4">Select Sub Craft Categories</Typography>
 
          <CardContent>
            <Grid container alignItems="center">
              <Grid item xs={5}>
                <Typography variant="h6">
                  {category.name}
                  <span
                    style={{ marginLeft: "15px", color: "#ff4208",cursor:'pointer' }}
                    onClick={() => toggleCategoryExpansion(category.id)}
                  >
                    {expandedCategories[category.id] ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={7}
                container
                justifyContent="flex-end"
                spacing={1}
              >
                <Grid item>
                  <Button
                    onClick={() => selectAllSubcategories(category.id)}
                    variant="outlined"
                  >
                    Select All
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => clearAllSubcategories(category.id)}
                    variant="outlined"
                  >
                    Clear All
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {expandedCategories[category.id] && (
              <Grid container spacing={1} sx={{ marginTop: 2 }}>
                {category.subcategories.map((subcat) => (
                  <Grid item xs={12} sm={6} md={4} key={subcat.id}>
                    <Card sx={{ pl: 2, borderRadius: 2, boxShadow: 1 }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedSubcategories.includes(
                              subcat.id
                            )}
                            onChange={() => toggleSubcategory(subcat.id)}
                            name={subcat.name}
                          />
                        }
                        label={subcat.name}
                        style={{ color: "black" }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </CardContent>
        </Card>
      </>
    );
  });
};

export default SubcategorySelector;
