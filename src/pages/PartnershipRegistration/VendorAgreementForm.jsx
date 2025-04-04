import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  Alert,
} from "@mui/material";

const DynamicFormStepper = () => {
  const location = useLocation();
  const {
    steps = [],
    formFields = [],
    initialFormData = {},
    onSubmit = () => {},
    title = "Dynamic Form",
    subtitle = "",
  } = location.state || {};

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onSubmit(formData); // Trigger the submission callback
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const renderStepContent = (step) => {
    if (!formFields[step]) return null;

    if (step === 3) {
      // 4th step (Legal Terms)
      return (
        <Grid container spacing={3}>
          {formFields[step].map((field, index) => {
            if (field.type === "legalTerms") {
              // Render Legal Terms (terms and conditions)
              return field.terms.map((legalTerm, termIndex) => (
                <Grid item xs={12} key={termIndex}>
                  <Card sx={{
    backgroundColor:
      legalTerm.title ===
      "Here are the key reasons a 51/49% partnership is used for L-1 visas:" || legalTerm.title ==="We support the visa process"
        ? "lightblue" // Change this to your desired background color
        : "white" // Default background color
  }}
>
                    <CardContent>
                      <Typography variant="h6" gutterBottom color="primary">
                        {legalTerm.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        color="text.secondary"
                      >
                        <Box component="ul" sx={{ pl: 4 }}>
                          {legalTerm.terms.map((item, idx) => (
                            <li
                              key={idx}
                              style={{
                                listStyle: item.startsWith("-")
                                  ? "none"
                                  : "disc", // Hide dot for items starting with '-'
                                paddingLeft: item.startsWith("-")
                                  ? "30px"
                                  : "20px", // Remove padding for list items without a hyphen
                                marginTop: "5px",
                              }}
                            >
                              {item}
                            </li>
                          ))}
                        </Box>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ));
            }
            {
              /* Legal Disclaimers */
            }
            if (field.type === "disclaimer") {
              return (
                <>
                  <Grid item xs={12}>
                    <Alert severity="warning">
                      <Typography variant="subtitle2" gutterBottom>
                        Legal Disclaimers
                      </Typography>
                      <Typography variant="body2">{field.content}</Typography>
                    </Alert>
                  </Grid>
                </>
              );
            }
          })}

          {/* Digital Signature */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Digital Signature
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Authorized Signatory Name"
                      value={formData.signature}
                      onChange={handleInputChange("signature")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      type="date"
                      label="Date"
                      value={formData.signatureDate}
                      onChange={handleInputChange("signatureDate")}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Terms and Conditions Acceptance */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.acceptedTerms || false}
                  onChange={handleInputChange("acceptedTerms")}
                />
              }
              label="I accept the terms and conditions"
              style={{ color: "black" }}
            />
          </Grid>
        </Grid>
      );
    }

    // Default behavior for other steps (rendering input fields)
    return (
      <>
        <Grid container spacing={3}>
          {formFields[step].map(
            ({ label, type, name, options = [], ...rest }) => (
              <Grid item xs={12} md={6} key={name}>
                {type === "checkbox" ? (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData[name] || false}
                        onChange={handleInputChange(name)}
                      />
                    }
                    label={label}
                  />
                ) : (
                  <TextField
                    fullWidth
                    label={label}
                    value={formData[name] || ""}
                    onChange={handleInputChange(name)}
                    select={type === "select"}
                    type={type}
                    {...rest}
                  >
                    {type === "select" &&
                      options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                  </TextField>
                )}
              </Grid>
            )
          )}
        </Grid>
      </>
    );
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          style={{ color: "#ff3c00", fontWeight: "400" }}
        >
          De Koshur Crafts Bazaar LLC - United States of America
        </Typography>
        <Typography variant="h4" gutterBottom align="center">
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h6"
            gutterBottom
            align="center"
            color="textSecondary"
            style={{ color: "#ff3c00" }}
          >
            {subtitle}
          </Typography>
        )}
        <Stepper activeStep={activeStep} sx={{ my: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStepContent(activeStep)}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="contained"
            color="inherit"
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            color={activeStep === steps.length - 1 ? "success" : "primary"}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default DynamicFormStepper;
