/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Card } from "@mui/material";

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  Button,
  FormControlLabel,
  Typography,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
import { Box, Grid, Divider, Paper } from "@mui/material";

import {
  Building,
  Mail,
  Phone,
  MapPin,
  FileText,
  Shield,
  Award,
  CreditCard,
} from "lucide-react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ApplicationFormFields from "../../components/PartnershipRegistration/ApplicationSubmission/ApplicationFomr";
import FormHandler from "../../hooks/FormHandler";
export default function DocumentSubmission() {
  const documentUploadConfig = {
    title: "Document Upload",
    fields: [
      {
        name: "businessRegistration",
        label: "Business Registration*",
        // description: "Upload PDF or Image (max 2MB)",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "businessRegistration",
        type: "file",
        md: 6, // File name key in `fileName` object
      },
      {
        name: "businessLicense",
        label: "Business License",
        // description: "Upload Bussiness License (PDF only/)",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "businessLicense",
        type: "file",
        md: 6, // File name key in `fileName` object
      },
      {
        name: "gstCertificate",
        label: "Contact Person - Adhaar Card*",
        // description: "Upload PDF or Image (max 2MB)",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "gstCertificate",
        type: "file",
        md: 6, // File name key in `fileName` object
      },
      {
        name: "artisanCard",
        label: "Artisan ID Card (If applicable)",
        // description: "Upload PDF or Image (max 2MB)",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "artisanCard",
        type: "file",
        md: 6, // File name key in `fileName` object
      },
      {
        name: "bankStatement",
        label: "Bank Statement",
        description: "Upload last 3 months statement",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "bankStatement",
        type: "file",
        md: 6, // File name key in `fileName` object
      },
      {
        name: "productCatalog",
        label: "Product Catalog",
        // description: "Upload Craft Certifications",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "productCatalog",
        type: "file",
        md: 6, // File name key in `fileName` object
      },
      {
        name: "certifications",
        label: "Certifications",
        // description: "Upload Craft Certifications",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "productCatalog",
        type: "file",
        md: 12, // File name key in `fileName` object
      },
    ],
  };

  const formSections = [documentUploadConfig];
  const { handleInputChange, handleSubmit, formData, errors } =
    FormHandler(formSections);
  console.log("formData:", formData);
  console.log("errors:", errors);
  console.log(handleInputChange, handleSubmit);
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
              <h1 className="section-main-title">Documentation</h1>
              <h4 className="">
               Upload required documents as per guideline <br />{" "}
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
                  Process 4
                </h1>
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
      <Card
        className="max-w-6xl mt-5 p-4 mx-auto "
        style={{ maxWidth: "660px" }}
      >
        <h3 className="text-2xl font-bold mb-0" style={{color:"#F44336"}}>Buyer Document Submission Portal</h3>
        <p>Upload Required Documents for a Quick Onboarding Process</p>
        <form action="" className="space-y-6">
          <ApplicationFormFields
            handleInputChange={handleInputChange}
            title={documentUploadConfig.title}
            errors={errors}
            formData={formData}
            fields={documentUploadConfig.fields}
            icon={FileUploadIcon}
            // fileName={fileName}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              className="px-6 py-2 text-white rounded-md transition-colors"
              style={{ backgroundColor: "#F44336", }}
            >
              Submit Application
            </Button>
          </div>
        </form>
      </Card>
      <Card className=" mt-5 p-4 w-50 mx-auto" style={{}}>
        <Card className="p-2">
          <h3 style={{ color: "#ff4208" }}>
            Document Upload Request & Catalog Interface Guideline Checklist
          </h3>
          
        </Card>

        <div className="row">
          <div className="col-lg-6 col-sm-5 grid-item">
            <div className="case-study-single-box">
              <div className="case-study-content case-sds mt-2">
                <div className="case-study-title">
                  <h5>
                    <b>Document Accepted Formats</b>
                  </h5>
                  <h3></h3>
                  <ul>
                    <li>PDF (Preferred)</li>
                    <li>PNG, JPEG</li>
                    <li>DOC, DOCX</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-5 grid-item">
            <div className="case-study-single-box">
              <div className="case-study-content case-sds mt-2">
                <div className="case-study-title">
                  <h5>
                    <b>File Specifications</b>
                  </h5>
                  <h3></h3>
                  <ul>
                    <li>Size: 1MB to 50MB</li>
                    <li>Image Resolution: 300 DPI+</li>
                    <li>Clear, Uncorrupted Files</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-5 grid-item">
            <div className="case-study-single-box">
              <div className="case-study-content case-sds mt-2">
                <div className="case-study-title">
                  <h5>
                    <b>File Naming Convention Ex.</b>
                  </h5>
                  <h3></h3>
                  <ul>
                    <li>CompanyRegistration.pdf</li>
                    <li>ProductCatalog.docx</li>
                    <li>Adhaar.png</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-5 grid-item">
            <div className="case-study-single-box">
              <div className="case-study-content case-sds mt-2">
                <div className="case-study-title">
                  <h5>
                    <b>Catalog Content Introduction</b>
                  </h5>
                  <h3></h3>
                  <ul>
                    <li>Product Description & Price</li>
                    <li>Certifications (if any)</li>
                    <li>Bussiness & Contact Info</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 grid-item">
            <div className="case-study-single-box">
              <div className="case-study-content case-sds mt-2">
                <div className="case-study-title">
                  <h5>
                    <b>Catalog Layout & Design</b>
                  </h5>
                  <h3></h3>
                  <ul>
                    <li>Page Size: A4</li>
                    <li>Orientation: Portriat</li>
                    <li>Font Size: 12 pt</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 grid-item">
            <div className="case-study-single-box">
              <div className="case-study-content case-sds mt-2">
                <div className="case-study-title">
                  <h5>
                    <b>Catalog Standard Margins</b>
                  </h5>
                  <h3></h3>
                  <ul>
                    <li>Top: 1 inch (25.4 mm)</li>
                    <li>Bottom: 1 inch (25.4 mm)</li>
                    <li>Left / Right: 1 inch (25.4 mm)</li>
                    {/* <li>Right: 1 inch (25.4 mm)</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
