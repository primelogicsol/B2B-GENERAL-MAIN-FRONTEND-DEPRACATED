import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Button, Select, MenuItem,
    FormControl, InputLabel, Grid, Alert, AlertTitle,
    ToggleButton, ToggleButtonGroup, Chip, Box,TextField,FormControlLabel,Checkbox} from '@mui/material';
    import { Shield, MapPin } from 'lucide-react';
const ConsignerDealForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    quantity: '',
    minOrderQuantity: '',
    minPrice: '',
    maxPrice: '',
    commissionRate: '',
    paymentTerms: '',
    description: '',
    specifications: '',
    shippingTerms: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };
  
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
    <Typography variant="h4" gutterBottom>DKC Consignment Dashboard</Typography>
    <Typography variant="subtitle1" gutterBottom>Connect Kashmir Craft Consigner with US Consignee</Typography>

    <ToggleButtonGroup
      value={userType}
      exclusive
      onChange={(e, newValue) => newValue && setUserType(newValue)}
      sx={{ mb: 3 }}
    >
      <ToggleButton value="consignor">Consigner</ToggleButton>
      <ToggleButton value="consignee">Consignee</ToggleButton>
    </ToggleButtonGroup>

    <Alert severity="info" sx={{ mb: 3,color:"#ff3c00" }}>
      {/* <Shield size={20} style={{ marginRight: 8 }} /> */}
      <AlertTitle >DKC Protected Platform</AlertTitle>
      
      All business identities on this platform have been thoroughly verified, ensuring a trusted environment for all users. Communications conducted through this platform are safeguarded by DKC security measures, providing an additional layer of protection and confidentiality.
      
    </Alert>

    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Card sx={{backgroundColor:"#e4ecf7"}}>
          <CardHeader title="Filter Options" />
          <CardContent>
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="handicrafts">Handicrafts</MenuItem>
                <MenuItem value="textiles">Textiles</MenuItem>
                <MenuItem value="retail">Retail</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>{userType === 'consignor' ? 'Kashmir District' : 'US State'}</InputLabel>
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

      <Box maxWidth={700} mx="auto" p={2}>
        
      <Card>
       <CardHeader title="Create Consignment Listing" />
      <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Product Name"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              margin="normal"
              required
            />
            
            <TextField
              select
              fullWidth
              label="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              margin="normal"
              required
            >
              <MenuItem value="papercraft">Papercraft</MenuItem>
              <MenuItem value="textiles">Textiles</MenuItem>
              <MenuItem value="pottery">Pottery</MenuItem>
              <MenuItem value="jewelry">Jewelry</MenuItem>
            </TextField>
            
            <TextField
              fullWidth
              label="Product Description"
              multiline
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              margin="normal"
            />
            
            <TextField
              fullWidth
              label="Product Specifications"
              multiline
              rows={3}
              value={formData.specifications}
              onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
              margin="normal"
            />
            
            <Box display="flex" gap={2}>
              <TextField
                fullWidth
                label="Minimum Price"
                type="number"
                value={formData.minPrice}
                onChange={(e) => setFormData({ ...formData, minPrice: e.target.value })}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Maximum Price"
                type="number"
                value={formData.maxPrice}
                onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
                margin="normal"
              />
            </Box>
            
            <TextField
              select
              fullWidth
              label="Commission Rate (%)"
              value={formData.commissionRate}
              onChange={(e) => setFormData({ ...formData, commissionRate: e.target.value })}
              margin="normal"
              required
            >
              <MenuItem value="10">10%</MenuItem>
              <MenuItem value="12">12%</MenuItem>
              <MenuItem value="15">15%</MenuItem>
            </TextField>
            
            <TextField
              fullWidth
              label="Minimum Order Quantity"
              type="number"
              value={formData.minOrderQuantity}
              onChange={(e) => setFormData({ ...formData, minOrderQuantity: e.target.value })}
              margin="normal"
            />
            
            <TextField
              fullWidth
              label="Available Quantity"
              type="number"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              margin="normal"
            />
            
            <TextField
              select
              fullWidth
              label="Payment Terms"
              value={formData.paymentTerms}
              onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
              margin="normal"
              required
            >
              <MenuItem value="5days">5 days after sale</MenuItem>
              <MenuItem value="7days">7 days after sale</MenuItem>
              <MenuItem value="10days">10 days after sale</MenuItem>
            </TextField>
            
            <TextField
              fullWidth
              label="Shipping Terms"
              multiline
              rows={3}
              value={formData.shippingTerms}
              onChange={(e) => setFormData({ ...formData, shippingTerms: e.target.value })}
              margin="normal"
            />
            
            <FormControlLabel
              control={<Checkbox />}
              label="I agree to the consignment terms and policies."
            />
            
            {showSuccess && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Your consignment listing has been submitted successfully! Our team will review it shortly.
              </Alert>
            )}
            
            <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
              <Button variant="outlined">Save as Draft</Button>
              <Button type="submit" variant="contained" color="primary">
                Submit Listing
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
    </Grid>
  </Box>
    
  );
};

export default ConsignerDealForm;
