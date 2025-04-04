/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  CardContent,
  Card,
  CardHeader,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from "@mui/material";

const ApplicationForm = ({
  title,
  fields,
  formData,
  errors,
  handleInputChange,
  icon: Icon,
  fileName
}) => {
  return (
    <Card className="mb-4">
      <CardHeader
        title={
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {Icon ? (
              <Icon
                style={{ width: "20px", height: "20px", color: "#F44336" }}
              />
            ) : (
              <div
                style={{ width: 20, height: 20, backgroundColor: "#f44336" }}
              />
            )}

            <Typography variant="h6">{title}</Typography>
          </div>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          {/* Dynamically render the fields */}
          {fields.map((field, index) => (
            <Grid item xs={12} md={field.md} key={index}>
              {field.type === "select" ? (
                <FormControl fullWidth error={Boolean(errors[field.name])}>
                  <InputLabel>{field.label}</InputLabel>
                  <Select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    label={field.label}
                  >
                    {field.options.map((option, idx) => (
                      <MenuItem key={idx} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors[field.name] && (
                    <FormHelperText>{errors[field.name]}</FormHelperText>
                  )}
                </FormControl>
              ) : field.type === "checkbox" ? (
                <Grid className="my-0">
                  {field.options.map((option, idx) => (
                    <FormControlLabel
                      key={idx}
                      control={
                        <Checkbox
                          name={field.name}
                          value={option.value}
                          checked={
                            formData[field.name]?.includes(option.value) ||
                            false
                          }
                          onChange={handleInputChange}
                          sx={{
                            "&.Mui-checked": {
                              color: "#f44336", // Change the color here to any color you want
                            },
                          }}
                          className="mx-auto my-0"
                        />
                      }
                      label={option.label}
                      style={{ color: "black", margin: "0px" }}
                    />
                  ))}
                </Grid>
              ) : field.type=="file" ? (
                <div>
              <Typography variant="body1" gutterBottom>
                {field.label}
              </Typography>

              <Button
                variant="contained"
                component="label"
                color="#F44336"
                startIcon={<Icon style={{ color: "#F44336" }} />}
              >
                {field.buttonText}
                <input
                  type="file"
                  name={field.name}
                  onChange={handleInputChange}
                  accept={field.acceptedFormats}
                  hidden
                />
              </Button>

              {formData[field.name] && (
                <Typography variant="body2" color="textSecondary" mt={1} ml={2}>
                   {formData[field.name]}
                </Typography>
              )}

              <Typography variant="body2" color="textSecondary" mt={1}>
                {field.description}
              </Typography>
              </div>

              ) : (
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  error={Boolean(errors[field.name])}
                  helperText={errors[field.name]}
                  type={field.type}
                  inputProps={
                    field.type === "number"
                      ? { min: 1900, max: new Date().getFullYear() }
                      : {}
                  }
                />
              )}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;
