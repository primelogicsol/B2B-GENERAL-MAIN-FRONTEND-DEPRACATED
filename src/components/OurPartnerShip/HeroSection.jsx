/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import signup_logo from '../../assets/images/sign_up_logo.png'
import {Card,Box,TextField,Button,FormControlLabel,Checkbox,Typography} from '@mui/material'
import {Link} from 'react-router-dom'
const HeroSection = ({
  heading1,
  heading2,
  heading3,
  description,
  buttonText,
  buttonLink,
  heroImage,
  heroShapeImage
}) => {
  return (
    <div className="hero-area style-two d-flex align-items-center">
      <div className="container">
        <div className="row hero align-items-center" style={{marginTop:"200px"}}>
          <div className="col-lg-6">
            <div className="hero-contant asfasd">
              <h5>{heading1}</h5>
              <h4>{heading2}</h4>
              <h4>{heading3}</h4>
              <p>{description}</p>
               <div className="solutek-btn">
               <a href={buttonLink} className="btn-2" dangerouslySetInnerHTML={{ __html: buttonText }}></a>
                              
                            </div>
              
              <div className="hero-btn-shape bounce-animate-3 ms-0">
                <img src={heroShapeImage} alt="shape" />
              </div>
            </div>
            {/* <Card sx={{padding:"20px",maxWidth:"400px",backgroundColor:"#e4ecf7"}}>
            <h4 className='text-center' style={{fontSize:"18px"}}>DKC Consignment Trade Portal </h4>
            <h5 className='text-center' style={{fontSize:"14px"}}>Sign In into your account</h5>
            <FormControlLabel control={<Checkbox />} label={<Typography sx={{ color: "black" }}>I am Consigner</Typography>} />
            <FormControlLabel control={<Checkbox />} label={<Typography sx={{ color: "black" }}>I am Consignee</Typography>} />
            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
    <TextField label="Email" variant="outlined" fullWidth required />
    <TextField label="Password" type="password" variant="outlined" fullWidth required />
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <FormControlLabel control={<Checkbox />} label={<Typography sx={{ color: "black" }}>Remember Me</Typography>} />
      <Link href="#" variant="body2" sx={{}}>Forgot Password?</Link>
    </Box>
    <Button variant="contained" color="primary" fullWidth>
      <Link to='/con_dash2'>
      Sign In
      </Link>
    </Button>
  </Box>
          </Card> */}
          </div>
          <div className="col-lg-6">
            <div className="hero-thumb">
              <img src={heroImage} alt="hero-thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
