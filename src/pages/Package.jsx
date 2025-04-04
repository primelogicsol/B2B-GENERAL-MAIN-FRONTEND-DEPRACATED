import React, { useState } from 'react';
import { CreditCard, ShoppingCart, CheckCircle,ArrowLeft,ArrowRight } from 'lucide-react';
import { Box,Card, CardContent, Typography ,Divider,Grid,TextField,Button} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from 'react-router-dom';

// MUI-style Button component
// const Button = ({ children, variant = 'contained', onClick, disabled = false }) => {
//   const baseStyles = "px-4 py-2 rounded font-medium transition-colors duration-200 disabled:opacity-50";
//   const variants = {
//     contained: "bg-blue-600 text-white hover:bg-blue-700",
//     outlined: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
//     text: "text-blue-600 hover:bg-blue-50"
//   };
 

//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

// MUI-style TextField component
// const TextField = ({ label, type = "text", value, onChange, name, fullWidth = false, error = false }) => {
//   return (
//     <div className={`relative ${fullWidth ? 'w-full' : 'w-auto'}`}>
//       <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
//         {label}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`
//           w-full px-3 py-2 border-2 rounded
//           focus:outline-none focus:border-blue-500
//           ${error ? 'border-red-500' : 'border-gray-300'}
//         `}
//       />
//     </div>
//   );
// };

// MUI-style Stepper
const Stepper = ({ activeStep }) => {
  const steps = ['Cart', 'Payment', 'Confirmation'];

  return (
    <Card sx={{ mb: 3, p: 2, boxShadow: 2 }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" width="100%">
        {steps.map((label, index) => (
          <Box key={label} display="flex" alignItems="center">
            {/* Step Number */}
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: index <= activeStep ? '#ff3c00' : 'grey.300',
                color: index <= activeStep ? 'white' : 'black',
                fontWeight: 'bold',
              }}
            >
              {index + 1}
            </Box>
            
            {/* Step Label */}
            <Typography sx={{ ml: 1, fontSize: '0.875rem' }}>{label}</Typography>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <Box
                sx={{
                  width: 96,
                  height: 4,
                  mx: 1,
                  backgroundColor: index < activeStep ? '#ff3c00' : 'grey.300',
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
  );
};

const PaymentWizard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    quantity: 1,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  function CartStep() {
    const location = useLocation();
  const service = location.state?.service; // Get the passed service data

  if (!service) return <p>No service selected.</p>;
    return (
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          {service.title}
        </Typography>
      
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div>
            <Typography variant="body2" color="textSecondary">
              Price per unit
            </Typography>
            <Typography variant="h6">{service.fee}</Typography>
          </div>
      
          {/* <TextField
            label="Quantity"
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            size="small"
          /> */}
        </div>
      
        <Divider />
      
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "16px" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Total
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            {service.fee}
          </Typography>
        </div>
      </Card>
    );
  }

  function PaymentStep() {
    const theme = createTheme({
        components: {
          MuiInputLabel: {
            styleOverrides: {
              root: {
                color: "black !important", // Force black label color
              },
            },
          },
        },
      });
    return (
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }} >
        <Typography variant="h6" gutterBottom>
          Payment Details
        </Typography>
      
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField
  label="Card Number"
  name="cardNumber"
  value={formData.cardNumber}
  onChange={handleInputChange}
  fullWidth
 
/>

          </Grid>
      
          <Grid item xs={6}>
            <TextField
              label="Expiry Date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              fullWidth
            //   InputLabelProps={{ style: { color: "black" } }}
            />
          </Grid>
      
          <Grid item xs={6}>
            <TextField
              label="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              fullWidth
            //   InputLabelProps={{ style: { color: "black" } }}
            />
          </Grid>
      
          <Grid item xs={12}>
            <TextField
              label="Cardholder Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ style: { color: "black" } }}
            />
          </Grid>
      
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ style: { color: "black" } }}
            />
          </Grid>
        </Grid>
      </Card>
    );
  }

  function ConfirmationStep() {
    return (
        <Card sx={{ textAlign: 'center', p: 3, boxShadow: 2 }}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <CheckCircle size={64} color="#ff3c00" />
          </div>
          <Typography variant="h5" fontWeight="medium">
            Payment Successful!
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
            Thank you for your purchase. You will receive a confirmation email shortly.
          </Typography>
          <div style={{ marginTop: '24px' }}>
            <Typography fontWeight="medium">Order Summary:</Typography>
            <Typography>Starter Package x {formData.quantity}</Typography>
            <Typography variant="h6" fontWeight="medium" sx={{ mt: 2 }}>
              Total: ${(550 * formData.quantity).toFixed(2)}
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }

  const steps = [
    <CartStep />,
    <PaymentStep />,
    <ConfirmationStep />
  ];

  return (
    <Card className=" mx-auto p-6 space-y-6 my-5  w-full md:w-1/2"  style={{
        width: "100%",
        maxWidth: "800px", // Optional: Restricts max width on larger screens
        margin: "0 auto",
        padding: "24px",
       
      }}>
      <Stepper activeStep={activeStep} />

      {steps[activeStep]}

      <div className="d-flex justify-content-between pt-6 mt-5">
  <div className="mx-3">
    <Button
      variant="outlined"
      size="small"
      onClick={() => setActiveStep(prev => prev - 1)}
      disabled={activeStep === 0}
      startIcon={<ArrowLeft size={18} color="#ff3c00" />} 
      sx={{
        borderColor: "#ff3c00",
        padding:"10px",
        color: "#ff3c00",
        "&:hover": { borderColor: "#ff3c00", backgroundColor: "rgba(255, 60, 0, 0.1)" },
      }}
    />
  </div>
  <div className="mx-3">
    <Button
      variant="outlined"
      size="small"
      
      onClick={() => setActiveStep(prev => prev + 1)}
      disabled={activeStep === steps.length - 1}
      endIcon={<ArrowRight size={18} color="#ff3c00" />} 
      sx={{
        padding:"10px",
        borderColor: "#ff3c00",
        color: "#ff3c00",
        "&:hover": { borderColor: "#ff3c00", backgroundColor: "rgba(255, 60, 0, 0.1)" },
      }}
      >
  {activeStep === 0 ? "Pay" : activeStep===1 ? "Checkout":""}
</Button>

  </div>
</div>
    </Card>
  );
};

export default PaymentWizard;
