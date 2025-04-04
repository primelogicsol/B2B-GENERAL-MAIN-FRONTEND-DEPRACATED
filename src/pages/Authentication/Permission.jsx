import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import {
  Store,
  Users,
  ArrowRight,
  Building2,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import main_logo from "../../assets/images/main_logo_icon.png";
import permission_bg from "../../assets/images/permission_bg.png"
import permission_logo from "../../assets/images/B2BLogo_permission.png";

import { useNavigate } from "react-router-dom";
const RegistrationRouter = () => {
    const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    console.log(`Routing to ${role} registration`);
  };
  const stats = [
    {
      title: "Total Vendors",
      value: "255",
      growth: "+12% this month",
      icon: <Store />,
      bg: "blue",
      color: "blue",
    },
    {
      title: "Active Buyers",
      value: "636",
      growth: "+15% this month",
      icon: <ShoppingBag />,
      bg: "blue",
      color: "blue",
    },
    {
      title: "Successful Trades",
      value: "92%",
      growth: "+5% this month",
      icon: <Store />,
      bg: "green",
      color: "green",
    },
    {
      title: "Active Categories",
      value: "1007",
      growth: "All categories active",
      icon: <Store />,
      bg: "blue",
      color: "blue",
    },
  ];

  return (
    <div>
      

    
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff3c00",
        backgroundImage: `url(${permission_bg})`,
        padding: "16px",
      }}
    >
      <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100px", // Adjust height as needed
      backgroundColor: "#fdbda9",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      zIndex: 1000,
    }}
  >
    <img src={permission_logo} alt="Logo" style={{ height: "254px",width:"304px" }} />
  </div>
      <Card
        sx={{ width: "100%", maxWidth: 700, padding: 2, borderRadius: "20px",marginTop:"100px",border:"2px solid #ff3c00" }}
      >
        <CardHeader
          title={
            <Typography
              variant="h6"
              align="center"
              style={{ fontSize: "14px" }}
            >
              Kashmir Handicrafts B2B Marketplace for North American Buyer
              Network
            </Typography>
          }
        />
        <div className="row d-flex justify-content-center">
          <div className="col-md-1">
            <img src={main_logo} className="mx-auto" />
          </div>
          <div className="col-md-8">
            <h4 className="mt-3">De Koshur Craft B2B Connect</h4>
          </div>
        </div>

        <CardHeader
          title={<Typography variant="h4" align="center"></Typography>}
        />

        <CardContent
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          {/* Vendor Card */}
          <Card
            sx={{
              padding: 2,
              border:
                selectedRole === "vendor"
                  ? "2px solid #1976d2"
                  : "1px solid #ddd",
              cursor: "pointer",
              color: "black",
              "&:hover": {
                backgroundColor: "#36454F",
                color: "white",
                "& *": { color: "white !important" },
                transition: "border-color 0.3s",
              },
            }}
            onClick={() => {
                handleRoleSelect("vendor");
                navigate("/index"); // Redirect to the registration page
              }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Building2
                size={32}
                style={{ color: "#ff3c00", transition: "color 0.3s" }}
              />
              <ArrowRight
                size={24}
                style={{ color: "#ff3c00", transition: "color 0.3s" }}
              />
            </div>
            <Typography variant="h6">Vendor</Typography>
            <Typography variant="body2" color="text.secondary">
              Join as a vendor to showcase and sell your products to businesses
              across our network.
              <ul className="mt-3">
                <li>Multiple business models supported</li>
                <li>Comprehensive market reach</li>
                <li>Flexible selling options</li>
                <li>Integrated business tools</li>
              </ul>
            </Typography>
          </Card>

          {/* Buyer Card */}
          <Card
            sx={{
              padding: 2,
              border:
                selectedRole === "buyer"
                  ? "2px solid #1976d2"
                  : "1px solid #ddd",
              cursor: "pointer",
              color: "black",
              "&:hover": {
                backgroundColor: "#36454F",
                color: "white",
                "& *": { color: "white !important" },
                transition: "border-color 0.3s",
              },
            }}
            onClick={() => {
              handleRoleSelect("vendor");
              navigate("/index"); // Redirect to the registration page
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
              onClick={() => {
                handleRoleSelect("vendor");
                // Redirect to the registration page
              }}
            >
              <ShoppingBag
                size={32}
                style={{ color: "#ff3c00", transition: "color 0.3s" }}
              />
              <ArrowRight
                size={24}
                style={{ color: "#ff3c00", transition: "color 0.3s" }}
              />
            </div>
            <Typography variant="h6">Buyer</Typography>
            <Typography variant="body2" color="text.secondary">
              Join as a buyer to access wholesale products and connect with
              verified vendors.
              <ul className="mt-3">
                <li>Bidding & auction access</li>
                <li>Vendor verification system</li>
                <li>Order management tools</li>
                <li>Bulk purchase discounts</li>
              </ul>
            </Typography>
          </Card>
        </CardContent>
        <p className="mt-2 text-center mb-0">
          <b>Unified Buyers & Vendors Dashboard</b>
        </p>
        
        <CardActions sx={{ justifyContent: "center", padding:0 ,marginTop:"0px" }}>
          <Typography variant="body2" color="text.secondary" sx={{marginLeft:"60px"}}>
            Already have an account?{" "}
            <a
              href="/login"
              style={{ color: "#1976d2", textDecoration: "none" }}
            >
              Sign in
            </a>
          </Typography>
        </CardActions>
              <br/>
        <CardHeader
          title={
            <Box display="flex" alignItems="center" gap={1}>
              <Users color="#ff3c00" size={20} />
              <Typography variant="h6" color="text.primary" sx={{fontSize:"18px"}}>
                Marketplace Statistics
              </Typography>
            </Box>
          }
          subheader={
            <Typography color="text.secondary">
              Real-time statistics of verified vendors and active buyers in our
              B2B marketplace
            </Typography>
          }
        />
        <CardContent>
          <Grid container spacing={2}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    backgroundColor: `${stat.bg}.50`,
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    {typeof stat.icon === "string" ? (
                      <Typography
                        variant="h6"
                        color={`${stat.color}.600`}
                        fontWeight="bold"
                      >
                        {stat.icon}
                      </Typography>
                    ) : (
                      React.cloneElement(stat.icon, {
                        color: `#ff3c00`,
                        size: 16,
                      })
                    )}
                    <TrendingUp color="#16A34A" size={16} />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                    style={{ fontSize: "13px" }}
                  >
                    {stat.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color={`${stat.color}.600`}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="#16A34A"
                    style={{ fontSize: "11px" }}
                  >
                    {stat.growth}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};

export default RegistrationRouter;
