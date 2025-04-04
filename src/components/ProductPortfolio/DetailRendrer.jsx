/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Typography, Grid, Button } from '@mui/material';
import { handleSave } from '../../utils/SaveUtils'; // Import the utility
import DetailCard from './DetailCard'; // Import DetailCard

// eslint-disable-next-line react/prop-types
const DetailsPage = ({ categories, selectedSubcategories, selectedValues, handleSelection, handleAddMoreCrafts }) => {
  if (selectedSubcategories.length === 0) {
    return (
      <Card sx={{ marginTop: 3, p: 3 }}>
        <Typography variant="h5" gutterBottom>No subcategory selected yet</Typography>
      </Card>
    );
  }

  const selectedSubcategoryId = selectedSubcategories[0];
  const subcategory = categories
    .flatMap((category) => category.subcategories)
    .find((subcat) => subcat.id === selectedSubcategoryId);

  if (!subcategory || !subcategory.details) {
    return (
      <Card sx={{ marginTop: 3, p: 3 }}>
        <Typography variant="h5" gutterBottom>No details available for {subcategory?.name}</Typography>
      </Card>
    );
  }

  const { name, details } = subcategory;

  const dynamicSections = Object.keys(details).map((key) => {
    const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
    return {
      key: key,
      title: (
        <span>
          <span style={{ color: "#ff4208" }}>{name} </span>{formattedKey}
        </span>
      ),
      values: details[key],
    };
  });

  return (
    <Card sx={{ marginTop: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom>Details for Selected Subcategory: {name}</Typography>

      {dynamicSections
        .filter(({ key }) => details[key] && details[key].length > 0)
        .map((filteredSection, filteredIndex, filteredSections) => {
          const { key, title, values } = filteredSection;
          const previousSectionSelected = filteredIndex === 0 || selectedValues[filteredSections[filteredIndex - 1]?.key]?.length > 0;

          if (values && previousSectionSelected) {
            return (
              <DetailCard
                key={key}
                title={title}
                items={values}
                onSelection={(value) => handleSelection(key, value)}
                selectedValues={selectedValues[key]}
              />
            );
          }
          return null;
        })}

      <Grid container spacing={2} justifyContent="left" alignItems="center">
        <Grid item>
          <Button variant="contained" color="primary">Review</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => handleSave(subcategory.id, selectedValues)}>Save</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAddMoreCrafts}>Add more Crafts</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" style={{ backgroundColor: "#ff4208" }}>Submit Now</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DetailsPage;
