import React from "react";
import { LogIn, UserCircle, LayoutDashboard, ChevronRight } from "lucide-react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import SignatureImage from "../../assets/images/signature.png"
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
const WelcomePartnershipPage = () => {
  return (
    <>
    <Breadcrumb title="Buyer Partnership Registration Portal"  />
        <div className="project-area style-three mt-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="section-title text-left">
                  <h5 className="section-sub-title">
                    Begin your journey with De Koshur Crafts
                  </h5>
                  <h1 className="section-main-title">Partnership Activation</h1>
                  <h4 className="">
                  Welcome Onboard <br />{" "}
                    <span>
                      <b style={{ color: "#ff3b00;" }}>
                        
                      </b>
                    </span>{" "}
                  </h4>
                </div>
              </div>
    
              <div className="col-lg-5">
                <div className="section-title text-left">
                  <p className="section-des " style={{ color: "black" }}>
                    <b> Buyer Partnership Registration Process </b>
                    <h1 className="section-main-title" style={{ fontSize: "40px" }}>
                      Process 7
                    </h1>
                  </p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", p: 4 }}>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        {/* Welcome Header */}
        <Paper sx={{ p: 4, mb: 4 }} elevation={3}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#ff3c00"
            gutterBottom
          >
            Welcome to Your Partnership Activation!
          </Typography>
          <Typography variant="body1" gutterBottom>
            {/* <strong>Congratulations on completing the previous process!</strong>{" "}
            We're excited to have you on board. Your partnership with{" "}
            <strong>De Koshur Crafts</strong> is almost ready to begin. <br/> */}
            <br/>
            Dear Buyer Partner,
            <br/><br/>
Thank you for choosing De Koshur Crafts as your trusted partner. We deeply appreciate the effort and vision that has brought you to this moment, and we are thrilled to move forward together in building a lasting and fruitful partnership.
<br/><br/>
At De Koshur Crafts, we are driven by a profound commitment to the legacy of Kashmiri craftsmanship, a tradition that reflects centuries of heritage, passion, and exceptional skill. By joining us, you are not only showcasing your artistry to the world but also helping preserve and elevate the rich cultural heritage of Kashmiri craftsmanship.
<br/><br/>
We value your dedication and are excited to support your business growth, innovation, and success. Together, we will continue to share the beauty and authenticity of Kashmiri handmade crafts with global markets, ensuring that the craftsmanship behind each piece is celebrated far and wide.
We are proud to embark on this journey with you, and look forward to what we will achieve together.
<br/><br/>
Congratulations on completing the process! We're again excited to have you on board. Your partnership with De Koshur Crafts begins TODAY !<br/><br/>
Best regards, <br/>

<img  src={SignatureImage} />
<br/>
Director De Koshur Crafts / B2B Connect USA
          </Typography>
             
          
        </Paper>

        {/* Partnership Details Card */}
        <Paper sx={{ p: 4, mb: 4 }} elevation={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Your Partnership Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
                elevation={1}
              >
                <Typography color="text.secondary">Application ID:</Typography>
                <Typography fontWeight="medium">VND-2024-001</Typography>
              </Paper>
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 2,
                  mt: 2,
                }}
                elevation={1}
              >
                <Typography color="text.secondary">User ID:</Typography>
                <Typography fontWeight="medium">[Your Unique User ID]</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
                elevation={1}
              >
                <Typography color="text.secondary">Last Updated:</Typography>
                <Typography fontWeight="medium">
                  1/25/2025, 5:57:07 PM
                </Typography>
              </Paper>
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 2,
                  mt: 2,
                }}
                elevation={1}
              >
                <Typography color="text.secondary">Password:</Typography>
                <Typography fontWeight="medium">
                  [Your Temporary Password]
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {/* Next Steps */}
        <Paper sx={{ p: 4, mb: 4 }} elevation={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Next Steps
          </Typography>
          <Box sx={{ mt: 3 }}>
            {/* Step 1 */}
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "#ff3c00",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LogIn size={20} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography fontWeight="bold">1. Login to Your Account</Typography>
                <Typography color="text.secondary" variant="body2">
                  Platform Access:{" "}
                  {/* <Typography
                    variant="text"
                    size="small"
                    color="#ff3c00"
                    sx={{ textTransform: "none" }}
                  >
                    Login Here
                  </Typography> */}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Use the User ID and Password provided above to access your account.
                </Typography>
              </Box>
            </Box>

            {/* Step 2 */}
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box
                sx={{
                  width: 54,
                  height: 40,
                  bgcolor: "#ff3c00",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <UserCircle size={20} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography fontWeight="bold">
                  2. Complete Your Profile
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  After logging in, please complete your buyer profile by
                  updating your business details, product offerings, and
                  certifications. This will ensure your account is fully
                  activated.
                </Typography>
              </Box>
            </Box>

            {/* Step 3 */}
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box
                sx={{
                  width: 47,
                  height: 40,
                  bgcolor: "#ff3c00",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LayoutDashboard size={20} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography fontWeight="bold">3. Access Dashboard</Typography>
                <Typography color="text.secondary" variant="body2">
                  Your personalized dashboard will provide insights into your
                  partnership journey, including access to analytics, sales
                  data, and communications.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Get Started Button */}
        
  <Button
 
    variant="contained"
    // color="primary" // Replace with your desired color (e.g., "primary", "secondary", etc.)
    size="medium"
    endIcon={<ChevronRight size={20} />}
    sx={{ backgroundColor:"#ff3c00"}}
  >
    Get Started
  </Button>


      </Box>
    </Box>
    </>
  );
};

export default WelcomePartnershipPage;
