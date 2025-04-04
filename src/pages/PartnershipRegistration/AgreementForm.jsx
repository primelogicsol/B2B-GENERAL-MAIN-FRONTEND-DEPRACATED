/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import heroImage from '../../assets/images/sm.png'
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
  MenuItem,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Divider,
  Alert
} from '@mui/material';
import {
  Business,
  Person,
  Email,
  Phone,
  AccountBalance,
  Description,
  Gavel
} from '@mui/icons-material';

const VendorAgreementUI = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    gstNumber: '',
    panNumber: '',
    contactPerson: '',
    email: '',
    phone: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    branch: '',
    acceptedTerms: false,
    signature: '',
    signatureDate: ''
  });

  const steps = [
    'Business Information',
    'Contact Details',
    'Banking Information',
    'Legal Terms'
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const BusinessInformation = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Business Information
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Business Name"
          value={formData.businessName}
          onChange={handleInputChange('businessName')}
          InputProps={{
            startAdornment: <Business sx={{ mr: 1, color: 'action.active' }} />
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          text
          label="Business Type"
          value={formData.businessType}
          onChange={handleInputChange('businessType')}
        >
          {/* <MenuItem value="private">Private Limited</MenuItem>
          <MenuItem value="partnership">Partnership</MenuItem>
          <MenuItem value="proprietorship">Proprietorship</MenuItem> */}
        </TextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="GST Number"
          value={formData.gstNumber}
          onChange={handleInputChange('gstNumber')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="PAN Number"
          value={formData.panNumber}
          onChange={handleInputChange('panNumber')}
        />
      </Grid>
    </Grid>
  );

  const ContactInformation = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Contact Person"
          value={formData.contactPerson}
          onChange={handleInputChange('contactPerson')}
          InputProps={{
            startAdornment: <Person sx={{ mr: 1, color: 'action.active' }} />
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          InputProps={{
            startAdornment: <Email sx={{ mr: 1, color: 'action.active' }} />
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Phone Number"
          value={formData.phone}
          onChange={handleInputChange('phone')}
          InputProps={{
            startAdornment: <Phone sx={{ mr: 1, color: 'action.active' }} />
          }}
        />
      </Grid>
    </Grid>
  );

  const BankingInformation = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Banking Information
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Bank Name"
          value={formData.bankName}
          onChange={handleInputChange('bankName')}
          InputProps={{
            startAdornment: <AccountBalance sx={{ mr: 1, color: 'action.active' }} />
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Account Number"
          value={formData.accountNumber}
          onChange={handleInputChange('accountNumber')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="IFSC Code"
          value={formData.ifscCode}
          onChange={handleInputChange('ifscCode')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Branch"
          value={formData.branch}
          onChange={handleInputChange('branch')}
        />
      </Grid>
    </Grid>
  );

  const LegalTerms = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Legal Terms & Conditions
        </Typography>
      </Grid>

      {/* Legal Terms Cards */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              1. Platform Commission & Payments
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              <Box component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
                <li>Platform commission: 5-15% based on product category</li>
                <li>Bi-weekly payment settlement</li>
                <li>Payment processing fees: 2% per transaction</li>
                <li>Minimum payout threshold: ₹5,000</li>
                <li>Late payment penalty: 1% per week</li>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              2. Service Level Agreements
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              <Box component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
                <li>Order processing within 24 hours</li>
                <li>Customer query response: 4 hours maximum</li>
                <li>Minimum 95% fulfillment rate</li>
                <li>Maximum cancellation rate: 5%</li>
                <li>Platform uptime guarantee: 99.9%</li>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              3. Quality Standards & Compliance
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              <Box component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
                <li>Product quality certification required</li>
                <li>Compliance with industry standards</li>
                <li>Regular quality audits</li>
                <li>Safety standards adherence</li>
                <li>Quality control documentation</li>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              4. Inventory Management
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              <Box component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
                <li>Real-time stock updates required</li>
                <li>Minimum stock level maintenance</li>
                <li>Stock verification process</li>
                <li>Inventory audit compliance</li>
                <li>Stock reconciliation reports</li>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              5. Returns & Refunds
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              <Box component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
                <li>7-day return policy</li>
                <li>Quality check requirements</li>
                <li>Refund processing within 48 hours</li>
                <li>Return shipping responsibility</li>
                <li>Damage assessment procedure</li>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              6. Marketing & Promotions
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              <Box component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
                <li>Participation in platform promotions</li>
                <li>Marketing material guidelines</li>
                <li>Promotional pricing rules</li>
                <li>Brand representation standards</li>
                <li>Seasonal campaign requirements</li>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              7. Data Protection & Privacy
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              <Box component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
                <li>GDPR and data protection compliance</li>
                <li>Customer data confidentiality</li>
                <li>Data security measures</li>
                <li>Privacy policy adherence</li>
                <li>Data breach notification protocol</li>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              8. Intellectual Property Rights
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              <Box component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
                <li>Trademark usage guidelines</li>
                <li>Copyright protection</li>
                <li>Content ownership rights</li>
                <li>License agreements</li>
                <li>IP infringement handling</li>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              9. Dispute Resolution
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              <Box component="ul" sx={{ listStyle: 'disc', pl: 2 }}>
                <li>Mediation process</li>
                <li>Arbitration procedures</li>
                <li>Jurisdiction: Local courts</li>
                <li>Notice period requirements</li>
                <li>Resolution timeframes</li>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Legal Disclaimers */}
      <Grid item xs={12}>
        <Alert severity="warning">
          <Typography variant="subtitle2" gutterBottom>
            Legal Disclaimers
          </Typography>
          <Typography variant="body2">
            This agreement constitutes a legally binding contract under Indian law.
            Digital signatures collected comply with IT Act, 2000.
          </Typography>
        </Alert>
      </Grid>

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
                  onChange={handleInputChange('signature')}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date"
                  value={formData.signatureDate}
                  onChange={handleInputChange('signatureDate')}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.acceptedTerms}
              onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
            />
          }
          label="I accept the terms and conditions"
        />
      </Grid>
    </Grid>
  );

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BusinessInformation />;
      case 1:
        return <ContactInformation />;
      case 2:
        return <BankingInformation />;
      case 3:
        return <LegalTerms />;
      default:
        return  <Box sx={{ padding: 3, textAlign: 'left' }}>
        <Typography variant="body1" gutterBottom>
          Your vendor agreement has been successfully submitted and is now under review.
        </Typography>
        <Typography variant="body1" gutterBottom>
          A confirmation email has been sent to your registered email address. 
        </Typography>
        <Typography variant="body1" gutterBottom>
         You'll receive login credentials once your account is approved.
        </Typography>
        <p>Please keep your Agreement ID for future reference.</p>
      </Box>;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center" >
          Vendor Partnership Agreement
        </Typography>
        <Typography variant="h6" gutterBottom align="center" color="#ff3b00"
        >
          DKC B2B Connect Ecommerce Platform
        </Typography>
        <Stepper activeStep={activeStep} sx={{ my: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {getStepContent(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="contained"
            color="inherit"
            sx={{ display: activeStep === steps.length  ? 'none' : 'inline-flex' }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            color={activeStep === steps.length - 1 ? 'success' : 'primary'}
            disabled={activeStep === steps.length - 1 && !formData.acceptedTerms}
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            

          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default VendorAgreementUI;