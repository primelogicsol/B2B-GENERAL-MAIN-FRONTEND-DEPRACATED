/* eslint-disable no-unused-vars */
import React from "react";
import Breadcrumb from "../components/BookAppointment/BookAppointment";
import AppointmentServices from "../components/BookAppointment/AppointmentServices";
import heroImage from '../assets/images/sm.png'
import HeroSection from "../components/Shared-Components/HeroSection";
import  { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  Checkbox,
  InputLabel
} from "@mui/material";
import { Video, Building } from "lucide-react";
const BookAppointmentPage = () => {

  const [formData, setFormData] = useState({
    appointmentType: "",
    meetingFormat: "",
    officeLocation: "",
    purposeOfMeeting: "",
    appointmentDate: "",
    appointmentTime: "",
    timeZone: "",
    calendarSync: false,
    vendorDetails: {
      firstName: "",
      lastName: "",
      email: "",
      businessName: "",
      contactNumber: "",
    },
  });

  const timeZones = ["PST", "EST", "IST"];
  const meetingPurposes = [
    "Partnership Query",
    "Product Discussion",
    "Payment Issues",
    "General Inquiry",
  ];

  const officeLocations = {
    US: {
      address: "4445 Corporation Ln Ste 264, Virginia 23462",
      mapLink: "https://maps.google.com/?q=4445+Corporation+Ln+Ste+264",
    },
    Kashmir: {
      address: "2 Gousia Colony Ext Zakura, Srinagar 190006",
      mapLink: "https://maps.google.com/?q=Gousia+Colony+Ext+Zakura",
    },
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleVendorDetailsChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      vendorDetails: {
        ...prev.vendorDetails,
        [field]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    const appointmentData = {
      vendor_id: "12345", // This would come from auth context
      appointment_type: formData.meetingFormat,
      appointment_date: `${formData.appointmentDate}T${formData.appointmentTime}`,
      appointment_time_zone: formData.timeZone,
      purpose_of_meeting: formData.purposeOfMeeting,
      calendar_sync: formData.calendarSync,
      office_location: formData.officeLocation,
      ...formData.vendorDetails,
    };

    // This would be an actual API call
    console.log("Submitting appointment:", appointmentData);
    alert("Appointment booked successfully!");
  };
  return (
    <>
    <HeroSection
      subtitle="De K0SHUR CRAFTS B2B CONNECT"
      heading1="Welcome to DKC Buyer"
      heading2="Partnership Portal Hub"
      description="Join the largest offshore startup network revolutionizing Kashmiri crafts..."
      buttonText="Book Appointment"
      buttonLink=""
      videoLink="https://www.youtube.com/watch?v=Wx48y_fOfiY"
      heroImage={heroImage}
    />
     
     <Box className="p-1 md:p-4 min-h-screen bg-[#f9fafb]">
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 2,
        }}
        className="p-1 md:p-4"
      >
        <Typography gutterBottom  className="text-xs md:text-2xl lg:text-4xl" sx={{ fontWeight: "bold" }}>
          Book an Appointment
        </Typography>

        {/* Appointment Type Selection */}
        <Box sx={{ mb: 4 }}>
          <Typography gutterBottom className="text-xs md:text-2xl lg:text-4xl">
            Select Appointment Type
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant={formData.meetingFormat === "virtual" ? "contained" : "outlined"}
                fullWidth
                startIcon={<Video size={20} />}
                onClick={() => handleInputChange("meetingFormat", "virtual")}
                sx={{ fontWeight: "bold" }}
              >
                Virtual Meeting
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant={formData.meetingFormat === "in-person" ? "contained" : "outlined"}
                fullWidth
                startIcon={<Building size={20} />}
                onClick={() => handleInputChange("meetingFormat", "in-person")}
              >
                In-Person Meeting
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Office Location Selection */}
        {formData.meetingFormat === "in-person" && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Select Office Location
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(officeLocations).map(([location, details]) => (
                <Grid item xs={12} sm={6} key={location}>
                  <Paper
                    elevation={formData.officeLocation === location ? 3 : 1}
                    sx={{
                      p: 2,
                      cursor: "pointer",
                      border: formData.officeLocation === location ? "2px solid #2196f3" : "1px solid #ccc",
                    }}
                    onClick={() => handleInputChange("officeLocation", location)}
                  >
                    <Typography variant="subtitle1">{location} Office</Typography>
                    <Typography variant="body2">{details.address}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Purpose of Meeting */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Purpose of Meeting
          </Typography>
          <FormControl fullWidth>
            <Select
              value={formData.purposeOfMeeting}
              onChange={(e) => handleInputChange("purposeOfMeeting", e.target.value)}
            >
              <MenuItem value="">Select Purpose</MenuItem>
              {meetingPurposes.map((purpose) => (
                <MenuItem key={purpose} value={purpose}>
                  {purpose}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Date and Time Selection */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Select Date and Time
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                InputLabelProps={{ shrink: true }}
                value={formData.appointmentDate}
                onChange={(e) => handleInputChange("appointmentDate", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="time"
                label="Time"
                InputLabelProps={{ shrink: true }}
                value={formData.appointmentTime}
                onChange={(e) => handleInputChange("appointmentTime", e.target.value)}
              />
            </Grid>
          </Grid>
          <FormControl fullWidth sx={{ mt: 2 }}>
  {/* <InputLabel>Select Time Zone</InputLabel> */}
  <Select
    value={formData.timeZone}
    onChange={(e) => handleInputChange("timeZone", e.target.value)}
    displayEmpty
  >
    <MenuItem value="">Select Time Zone</MenuItem>
    {timeZones.map((zone) => (
      <MenuItem key={zone} value={zone}>
        {zone}
      </MenuItem>
    ))}
  </Select>
</FormControl>

        </Box>

        {/* Vendor Details */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Your Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                value={formData.vendorDetails.firstName}
                onChange={(e) => handleVendorDetailsChange("firstName", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.vendorDetails.lastName}
                onChange={(e) => handleVendorDetailsChange("lastName", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Business Name"
                value={formData.vendorDetails.businessName}
                onChange={(e) => handleVendorDetailsChange("businessName", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={formData.vendorDetails.email}
                onChange={(e) => handleVendorDetailsChange("email", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Number"
                value={formData.vendorDetails.contactNumber}
                onChange={(e) => handleVendorDetailsChange("contactNumber", e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Submit Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default BookAppointmentPage;
