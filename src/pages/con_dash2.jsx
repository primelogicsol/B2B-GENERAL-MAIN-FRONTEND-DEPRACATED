import React, { useState } from 'react';
import { Shield, MapPin } from 'lucide-react';
import {
  Card, CardContent, CardHeader, Typography, Button, Select, MenuItem,
  FormControl, InputLabel, Grid, Alert, AlertTitle,
  ToggleButton, ToggleButtonGroup, Chip, Box
} from '@mui/material';
import logo from "../assets/images/logo_main.png"
const DKCPlatform = () => {
  const [userType, setUserType] = useState('consignor');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const listings = [
    {
        id: 1,
        title: "Basic Handicrafts Consignee - USA",
        businessName: "De Koshur Crafts USA",
        maskedLocation: "New York City, NY",
        categories: ["Papercraft"],
        terms: {
          commission: "10-15%",
          payment: "5 days after sale",
          price_range:"$5 - $10",
          minOrder: "1000 pieces"
        }
      },
    {
      id: 2,
      title: "Premium Handicrafts Consignee - USA",
      businessName: "De Koshur Crafts USA",
      maskedLocation: "Los Angeles, CA",
      categories: ["Scarfs", "Wraps"],
      terms: {
        commission: "15-20%",
        payment: "7 days after sale",
        minOrder: "200 pieces"
      }
    },
    {
        id: 3,
        title: "Luxury Handicrafts Consignee - USA",
        businessName: "De Koshur Crafts USA",
        maskedLocation: "San Francisco, CA",
        categories: ["Silk Carpets"],
        terms: {
          commission: "20-25%",
          payment: "5 days after sale",
          minOrder: "10 pieces"
        }
      },
      {
        id: 5,
        title: "Artisanal Handicrafts Consignee - USA",
        businessName: "De Koshur Crafts USA",
        maskedLocation: "Chicago, IL",
        categories: ["Embriodery Pashmina Scarfs"],
        terms: {
          commission: "15-20%",
          payment: "5 days after sale",
          minOrder: "50 pieces"
        }
      },
    {
        id: 3,
        title: "Eco-Friendly Handicrafts Consignee - USA",
        businessName: "De Koshur Crafts USA",
        maskedLocation: "Austin, TX",
        categories: ["Gold Painted Papermachie"],
        terms: {
          commission: "10-18%",
          payment: "7 days after sale",
          minOrder: "200 pieces"
        }
      },
      {
        id: 3,
        title: "Custom Handicrafts Consignee - USA",
        businessName: "De Koshur Crafts USA",
        maskedLocation: "Miami, FL",
        categories: ["Embroidered Pashmina Shawls"],
        terms: {
          commission: "20-30%",
          payment: "7 days after sale",
          minOrder: "100 pieces"
        }
      },
      {
        id: 4,
        title: "Cultural Handicrafts Consignee - USA",
        businessName: "De Koshur Crafts USA",
        maskedLocation: "Seattle, WA",
        categories: ["Kani Shawls"],
        terms: {
          commission: "15-20%",
          payment: "5 days after sale",
          minOrder: "50 pieces"
        }
      },
      {
        id: 5,
        title: "Artisanal Handicrafts Consignee - USA",
        businessName: "De Koshur Crafts USA",
        maskedLocation: "Seattle, WA",
        categories: ["Handicrafts", "Textiles"],
        terms: {
          commission: "15-20%",
          payment: "7 days after sale",
          minOrder: "100 pieces"
        }
      },

    
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', p: 4 }}>
        <div className='d-flex'> <img src={logo}/>
        <div><Typography className='mt-4' variant="h4" gutterBottom>DKC Integrated Consignment Management Dashboard</Typography>
        <Typography variant="subtitle1" gutterBottom>Bridging Kashmir Craft Consigners with US Consignees for Seamless Global Trade</Typography></div>
        </div>
       
      
      <h3 className='mt-5'>Welcome, <span style={{color:"#ff3c00"}}>Consigner </span>– Your Journey with De Koshur Crafts Begins Here</h3>
      <h5>Together, We’ll Ignite a New Global Movement of <span style={{color:"#ff3c00"}}>Kashmir Craft Consignment Business  in the USA.</span></h5>
      <div className='my-5' style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
  <Button sx={{ backgroundColor: '#ff3c00', color: 'white', flex: 1, margin: '0 5px' }}>
  Pick Consignee listed order 
  </Button>
  <Button sx={{ backgroundColor: "#e4ecf7", color: 'black', flex: 1, margin: '0 5px' }}>
    Create order for Consignee
  </Button>
  <Button sx={{ backgroundColor: '#ff3c00', color: 'white', flex: 1, margin: '0 5px' }}>
    Complete Consignee Deal
  </Button>
  <Button sx={{ backgroundColor: "#e4ecf7", color: 'black', flex: 1, margin: '0 5px' }}>
    Confirm Consignee Deal
  </Button>
  <Button sx={{ backgroundColor: '#ff3c00', color: 'white', flex: 1, margin: '0 5px' }}>
    Trading Dashboard
  </Button>
</div>

      <Card sx={{padding:2,marginBottom:2,backgroundColor:"#e4ecf7"}}>
        {/* <Shield size={20} style={{ marginRight: 8 }} /> */}
        <AlertTitle>DKC Secure Platform Notice</AlertTitle>
        
        All business identities on this platform have been thoroughly verified, ensuring a trusted environment for all users. Communications conducted through this platform are safeguarded by DKC security measures, providing an additional layer of protection and confidentiality.
        
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card sx={{backgroundColor:"#e4ecf7"}}>
            <CardHeader title="Filter Options" />
            <CardContent>
            <FormControl fullWidth >
        <InputLabel>Category</InputLabel>
        <Select value={selectedCategory} >
          <MenuItem value="">
            <em>Product Categories</em>
          </MenuItem>
          <MenuItem value="handicrafts">Handicrafts</MenuItem>
          <MenuItem value="textiles">Textiles</MenuItem>
          <MenuItem value="retail">Retail</MenuItem>
        </Select>
      </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>{userType === 'consignor' ? 'US States' : 'US State'}</InputLabel>
                <Select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                  <MenuItem value="">All Locations</MenuItem>
                  {userType === 'consignor' ? (
                    ["srinagar", "baramulla", "anantnag"].map((loc) => (
                      <MenuItem key={loc} value={loc}>{loc.charAt(0).toUpperCase() + loc.slice(1)}</MenuItem>
                    ))
                  ) : (
                    ["newyork", "california", "texas"].map((loc) => (
                      <MenuItem key={loc} value={loc}>{loc.charAt(0).toUpperCase() + loc.slice(1)}</MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </CardContent>
          </Card>

          <Card sx={{padding:2, marginTop:2,backgroundColor:"#e4ecf7" }}>
            <Typography> <b>DKC USA:</b><br/> Validates Consignee and Acts as Guarantor <br/><br/>
   Role: DKC USA serves as the guarantor for the consignee in the United States. It is responsible for validating the consignee's ability to sell the goods in the U.S. market.
   <br/><br/>
   <b>Responsibilities:</b>
   <br/><br/>
   <b>Consignee Validation:</b> DKC USA ensures that consignees (such as retailers or distributors in the U.S.) are legitimate, have the capacity to handle and sell the goods, and comply with U.S. regulations.
   <br/><br/>
   <b>Market Readiness:</b> DKC USA assesses the consignees' ability to reach target consumers and ensure proper marketing, display, and sales efforts for the consigned goods.
   <br/><br/>
   <b>Logistics and Distribution:</b> DKC USA assists the shipping, customs, and importation processes, making sure the products are delivered to the consignee in good condition and in compliance with U.S. trade regulations.
   <br/><br/>
   <b>Payments and Settlement:</b> DKC USA acts as an intermediary to ensure that the consignee pays for the goods sold after deductions (such as commissions), and payments are routed to DKC Kashmir for further distribution to the consigners.</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={9}>
          {listings.map((listing) => (
            <Card key={listing.id} sx={{ mb: 3,backgroundColor:"#e4ecf7" }}>
                
              <CardHeader sx={{paddingBottom:"0px"}}
                title={listing.title}
                // subheader={`Posted by: ${listing.businessName}`}
                action={
                  <Box display="flex" alignItems="center" color="gray.600">
                    <MapPin size={16} style={{ marginRight: 4 }} />
                    {listing.maskedLocation}
                  </Box>
                }
              />
              <h4 className='ms-3' style={{fontWeight:"400",fontSize:"16px"}}>Consignee Bussiness Name: ********* ***</h4>
              <h4 className='ms-3' style={{fontWeight:"400",fontSize:"16px"}}>Posted by: {listing.businessName}</h4>
              {/* <CardHeader sx4={{paddingBottom:"0px"}} subheader={}/> */}
             
              <CardContent>
              {/* <h5>Consign</h5> */}
              <Box display="flex" gap={1} flexWrap="nowrap" mb={2}>
  {listing.categories.map((cat) => (
    <Chip key={cat} label={cat} color="primary" />
  ))}
</Box>
<Grid container spacing={1} display="flex" alignItems="center" justifyContent="space-between">
  <Grid item xs="auto">
    <Typography variant="subtitle2">Commission</Typography>
    <Typography variant="body2">{listing.terms.commission}</Typography>
  </Grid>
  <Grid item xs="auto">
    <Typography variant="subtitle2">Payment Terms</Typography>
    <Typography variant="body2">{listing.terms.payment}</Typography>
  </Grid>
  <Grid item xs="auto">
    <Typography variant="subtitle2">Price Range</Typography>
    <Typography variant="body2">{listing.terms.price_range}</Typography>
  </Grid>
  <Grid item xs="auto">
    <Typography variant="subtitle2">
      {userType === 'consignor' ? 'Minimum Order' : 'Minimum Volume'}
    </Typography>
    <Typography variant="body2">
      {userType === 'consignor' ? listing.terms.minOrder : listing.terms.minVolume}
    </Typography>
  </Grid>
</Grid>

                <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
                  {/* <Button variant="outlined">View Details</Button> */}
                  <Button variant="contained" color="primary" sx={{ width: "250px", padding: "6px 12px", fontSize: "0.875rem" }}>Block this deal today</Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
      <Typography> <b>Copyright © 2025 De Koshur Crafts. All rights reserved.</b>   All content, including text, images, trademarks, business processes, and proprietary methods, are the property of De Koshur Crafts and are protected by copyright and intellectual property laws. Unauthorized reproduction, distribution, or use of any content or business processes from this site is strictly prohibited.</Typography>
    </Box>
  );
};

export default DKCPlatform;
