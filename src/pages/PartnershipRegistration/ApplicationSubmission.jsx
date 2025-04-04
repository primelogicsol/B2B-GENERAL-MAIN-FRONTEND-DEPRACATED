/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import heroImage from '../../assets/images/sm.png'
import { Card, } from "@mui/material";

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { Box, Typography, Grid, Divider, Paper } from "@mui/material";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
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
const ApplicationForm = () => {
  // const [formData, setFormData] = useState({
  //   businessName: "",
  //   businessType: "",
  //   businessYear: "",
  //   registrationNumber: "",
  //   gstNumber: "",
  //   establishmentYear: "",
  //   annualTurnover: "",
  //   ownerName: "",
  //   email: "",
  //   phone: "",
  //   whatsapp: "",
  //   address: "",
  //   district: "",
  //   pinCode: "",
  //   primaryCategories: [],
  //   artisanCount: "",
  //   workshopArea: "",
  //   exportExperience: "",
  //   certifications: [],
  //   previousExhibitions: "",
  //   onlinePresence: "",
  //   references: "",
  //   bankInfo: [],
  // });

  const bussinessInformationFields = {
    title: "Bussiness Information",
    fields: [
      { name: "businessName", label: "Business Name*", type: "text", md: 12 },
      {
        name: "businessLegalStructure",
        label: "Business Legal Structure",
        type: "select",
        md: 6,
        options: [
          { value: "", label: "Select Legal Structure" },
          { value: "sole_proprietorship", label: "Sole Proprietorship" },
          { value: "partnership", label: "Partnership" },
          { value: "llp", label: "Limited Liability Partnership" },
          { value: "private_limited", label: "Private Limited" },
          { value: "public_limited", label: "Public Limited" },
          { value: "cooperative", label: "Cooperative Society" },
        ],
      },
      {
        name: "businessType",
        label: "Business Type",
        type: "select",
        md: 6,
        options: [
          { value: "", label: "Select Business Type" },
          { value: "online", label: "Online" },
          { value: "store_front", label: "Storefront" },
          { value: "manufacturer", label: "Manufacturer" },
          { value: "whole_saler", label: "Wholesaler" },
          { value: "distributor", label: "Distributor" },
          { value: "artisan", label: "Artisan" },
        ],
      },
      {
        name: "businessYear",
        label: "Business Established Year",
        type: "number",
        md: 6,
      },
      {
        name: "businessRegistrationNumber",
        label: "Business Registration Number / CIN *",
        type: "text",
        md: 12,
      },
      {
        name: "brandAffiliations",
        label: "Brand Affiliations (if any)",
        type: "text",
        md: 12,
      },
      {
        name: "streetAddress1",
        label: "Street Address Line 1",
        type: "text",
        md: 12,
      },
      {
        name: "streetAddress2",
        label: "Street Address Line 2",
        type: "text",
        md: 12,
      },
      { name: "city", label: "City", type: "text", md: 6 },
      {
        name: "state",
        label: "State/Region",
        type: "select",
        md: 6,
        options: [{ value: "jammu_kashmir", label: "Jammu and Kashmir" }],
      },
      {
        name: "country",
        label: "Country",
        type: "select",
        md: 6,
        options: [{ value: "usa", label: "USA" }],
      },
      { name: "postalCode", label: "Postal/Zip Code", type: "text", md: 6 },
      { name: "website", label: "Website (if any)", type: "text", md: 6 },
      {
        name: "annualTurnover",
        label: "Annual Turnover",
        type: "select",
        md: 6,
        options: [
          { value: "", label: "Select Annual Turnover" },
          { value: "below_50th", label: "Below 50 Thousands" },
          { value: "50th_1L", label: "50 Thousand - 1 Lakh" },
          { value: "50L_1Cr", label: "1 Lakh - 10 Lakh" },
          { value: "1Cr_5Cr", label: "10 Lakh - 1 Crore" },
          { value: "1Cr_5Cr", label: "1 Crore - 5 Crore" },
          { value: "above_5Cr", label: "Above 5 Crores" },
        ],
      },
      { name: "gstNumber", label: "GST Number (GSTIN)", type: "text", md: 6 },
      {
        name: "tin",
        label: "Tax Identification Number (TIN)",
        type: "text",
        md: 6,
      },
      {
        name: "import_export_code",
        label: "Import Export Code (IEC)",
        type: "text",
        md: 6,
      },
    ],
  };
  const contactInformationFields = {
    title: "Bussiness Contact Person Information",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        md: 6,
      },
      {
        name: "email",
        label: "Email",
        type: "text",
        md: 6,
      },
      {
        name: "phone",
        label: "Phone",
        type: "text",
        md: 6,
      },
      {
        name: "whatsapp",
        label: "Whatsapp (optional)",
        type: "text",
        md: 6,
      },
      {
        name: "bussinessAddress",
        label: "Business Address",
        type: "text",
        md: 12,
      },
      {
        name: "bussinessDistrict",
        label: "District",
        type: "select",
        md: 6,
        options: [{ value: "jammu_kashmir", label: "Jammu and Kashmir" }],
      },
      {
        name: "bussinessZip",
        label: "PIN Code",
        type: "text",
        md: 6,
      },
      {
        name: "bussinessState",
        label: "State",
        type: "text",
        md: 6,
        options: [{ value: "jammu_kashmir", label: "Jammu and Kashmir" }],
      },
      {
        name: "bussinessCountry",
        label: "Country",
        type: "text",
        md: 6,
        options: [{ value: "jammu_kashmir", label: "Jammu and Kashmir" }],
      },
    ],
  };

  const credibilityAssessmentFields = {
    title: "Business Credibility Assessment",
    fields: [
      {
        name: "authenticity",
        label: "Material Standard",
        type: "select",

        options: [
          { value: "mixed", label: "Use mixed or synthetic materials" },
          { value: "authentic", label: "Use mostly authentic materials" },
          { value: "verified", label: "Ensure full sourcing verification" },
          {
            value: "certified",
            label: "Rely on certified suppliers and traceability",
          },
          {
            value: "blockchain",
            label: "Use Blockchain-tagged materials with full certification",
          },
        ],
      },
      {
        name: "quality",
        label: "Quality Level",
        type: "select",
        options: [
          {
            value: "inconsistent",
            label: "Quality is inconsistent and unreliable",
          },
          {
            value: "acceptable",
            label: "Quality is generally acceptable with minor flaws",
          },
          {
            value: "high",
            label: "High quality with only minor imperfections",
          },
          {
            value: "industry",
            label: "Meets industry standards with solid quality",
          },
          {
            value: "exceptional",
            label: "Exceeds Indian standards with exceptional quality",
          },
        ],
      },
      {
        name: "sustainability",
        label: "Sustainability Level",
        type: "select",
        options: [
          {
            value: "no_focus",
            label: "No focus on sustainability in production",
          },
          {
            value: "some",
            label: "Use some sustainable materials in production",
          },
          {
            value: "significant",
            label: "Significant portion of materials are sustainable",
          },
          {
            value: "eco_friendly",
            label: "Primarily eco-friendly materials used in production",
          },
          {
            value: "zero_waste",
            label: "Fully committed to zero waste production practices",
          },
        ],
      },
      {
        name: "customer_experience",
        label: "Service Level",
        type: "select",
        options: [
          {
            value: "no_strategy",
            label: "No defined strategy for customer experience",
          },
          {
            value: "needs_improvement",
            label: "Customer experience strategy needs improvement",
          },
          {
            value: "satisfactory",
            label: "Customer experience is generally satisfactory",
          },
          {
            value: "well_managed",
            label:
              "Customer experience is well-managed with good communication",
          },
          {
            value: "exceptional",
            label: "Provide exceptional and personalized customer service",
          },
        ],
      },
      {
        name: "fair_trade",
        label: "Standards Level",
        type: "select",
        options: [
          {
            value: "no_policy",
            label: "No clear policy for fair wages and safety",
          },
          {
            value: "minimum",
            label: "Pay legal minimum wages with basic safety measures",
          },
          {
            value: "improvements",
            label: "Fair wages with some improvements needed in safety",
          },
          {
            value: "safe_conditions",
            label: "Fair wages with safe working conditions for all",
          },
          {
            value: "market_standard",
            label:
              "Standard market wages with safe, healthy working conditions",
          },
        ],
      },
    ],
  };

  const certifications = {
    title: "Are You Seeking Product Authenticity Certifications",
    fields: [
      {
        name: "certifications", // Keep the same name as before
        label: "Certification", // Label for the field
        type: "checkbox", // Type is checkbox

        options: [
          { value: "GI_Certification", label: "  GI Certification  " },
          { value: "Handloom_Mark", label: "Handloom Mark" },
          { value: "Craft_Mark", label: "Craft Mark" },
          { value: "India_Handmade", label: "India Handmade" },
          { value: "Quality_Council", label: "Quality Council" },
          { value: "Export_Council", label: "Export Council" },
          { value: "Block_Chain", label: "Block Chain" },
          {value:"None",label:"None"}
        ], // Each option has a `value` and `label`
      },
    ],
  };

  const bankingInformationFields = {
    title: "Banking Information",
    fields: [
      {
        name: "bankName",
        label: "Bank Name*",
        type: "text",
        md: 12,
        value: "Example Bank", // Example value for Bank Name
      },
      {
        name: "accountName",
        label: "Account Name*",
        type: "text",
        md: 12,
        value: "John Doe", // Example value for Account Name
      },
      {
        name: "accountType",
        label: "Account Type",
        type: "select",
        md: 12,
        options: [
          { value: "", label: "Select Account Type" },
          { value: "savings", label: "Savings Account" },
          { value: "current", label: "Current Account" },
          { value: "business_savings", label: "Business Savings Account" },
          { value: "fixed_deposit", label: "Fixed Deposit (FD) Account" },
          {
            value: "recurring_deposit",
            label: "Recurring Deposit (RD) Account",
          },
          { value: "overdraft", label: "Overdraft Account" },
          { value: "cash_credit", label: "Cash Credit Account" },
          { value: "merchant", label: "Merchant Account" },
          {
            value: "nre_nro",
            label: "NRE/NRO Account (For International Transactions)",
          },
          { value: "foreign_currency", label: "Foreign Currency Account" },
        ],
        value: "savings", // Example value for Account Type (savings)
      },
      {
        name: "accountNumber",
        label: "Account Number*",
        type: "text",
        md: 12,
        value: "123456789012345", // Example value for Account Number
      },
      {
        name: "ifscCode",
        label: "IFSC Code*",
        type: "text",
        md: 12,
        value: "EXMP0001234", // Example value for IFSC Code
      },
      {
        name: "swiftBisCode",
        label: "SWIFT / BIS CODE",
        type: "text",
        md: 12,
        value: "EXMPUS33XXX", // Example value for SWIFT/BIS CODE
      },
      {
        name: "ibanCode",
        label: "IBAN CODE",
        type: "text",
        md: 12,
        value: "GB29XABC10161234567801", // Example value for IBAN Code
      },
    ],
  };

  const bankingInoformationCheckbox = {
    title: "Banking Information",
    fields: [
      {
        name: "bankInfo",
        type: "checkbox",
        options: [
          {
            value: "kycChallenges",
            label: "Have you faced challenges with KYC regulations recently?",
          },
          {
            value: "gstComplianceIssues",
            label: "Any issues with GST compliance in transactions?",
          },
          {
            value: "femaChallenges",
            label:
              "Difficulties with FEMA for international payments recently?",
          },
          {
            value: "digitalBankingRegulations",
            label: "Have digital banking regulations impacted your operations?",
          },
          {
            value: "fraudCybersecurityIssues",
            label: "Encountered any fraud or cybersecurity issues recently?",
          },
          {
            value: "paymentGatewayCompliance",
            label:
              "Challenges with payment gateway compliance or security regulations?",
          },
          {
            value: "accountActivityIssues",
            label: "Any account activity issues or fraudulent claims made?",
          },
          {
            value: "regulatoryActions",
            label: "Have regulatory actions been taken against your account?",
          },
        ],
      },
    ],
  };

  const documentUploadConfig = {
    title: "Document Upload",
    fields: [
      {
        name: "businessRegistration",
        label: "Business Registration*",
        description: "Upload PDF or Image (max 2MB)",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "businessRegistration",
        type:"file",
        md:6 // File name key in `fileName` object
      },
      {
        name: "gstCertificate",
        label: "Adhaar Card*",
        description: "Upload PDF or Image (max 2MB)",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "gstCertificate",
        type:"file",
        md:6 // File name key in `fileName` object
      },
      {
        name: "artisanCard",
        label: "Artisan ID Card",
        description: "Upload PDF or Image (max 2MB)",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "artisanCard",
        type:"file",
        md:6 // File name key in `fileName` object
      },
      {
        name: "bankStatement",
        label: "Bank Statement",
        description: "Upload last 6 months statement (PDF only)",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "bankStatement",
        type:"file",
        md:6 // File name key in `fileName` object
      },
      {
        name: "productCatalog",
        label: "Craft Certifications",
        description: "Upload Craft Certifications",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "productCatalog",
        type:"file",
        md:6 // File name key in `fileName` object
      },
      {
        name: "businessLicense",
        label: "Business License",
        description: "Upload Bussiness License",
        acceptedFormats: ".pdf",
        buttonText: "Upload File",
        fileNameKey: "businessLicense", 
        type:"file",
        md:6// File name key in `fileName` object
      },
    ],
  };

  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "PartnerShip" },
  ];

  console.log(bussinessInformationFields);
console.log(contactInformationFields);
console.log(credibilityAssessmentFields);
console.log(certifications);
console.log(bankingInformationFields);
console.log(bankingInoformationCheckbox);
console.log(documentUploadConfig);

  const formSections = [
    bussinessInformationFields,
    contactInformationFields,
    credibilityAssessmentFields,
    certifications,
    bankingInformationFields,
    bankingInoformationCheckbox,
    documentUploadConfig
  ];

  const {handleInputChange,handleSubmit,formData,errors} = FormHandler(formSections)
  console.log("formData:", formData);
console.log("errors:", errors);
console.log(handleInputChange,handleSubmit);



  // const [fileName, setFileName] = useState({
  //   bankStatement: "",
  //   productCatalog: "",
  //   businessRegistration: "",
  //   gstCertificate: "",
  //   artisanCard: "",
  // });

  // const [errors, setErrors] = useState({});

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked, files } = e.target;

  //   if (type === "file") {
  //     // Handling file input change
  //     const file = files[0]; // Get the selected file
  //     if (file) {
  //       // Update the file name in the state
  //       setFileName((prevState) => ({
  //         ...prevState,
  //         [name]: file.name, // Update the state for the selected field
  //       }));
  //     }
  //   } else if (type === "checkbox") {
  //     // Handling checkbox inputs
  //     const newValue = checked
  //       ? [...(formData[name] || []), value] // Add value if checked
  //       : (formData[name] || []).filter((item) => item !== value); // Remove value if unchecked
  //     setFormData({ ...formData, [name]: newValue });
  //   } else {
  //     // Handling all other inputs (text, number, select, etc.)
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.businessName)
  //     newErrors.businessName = "Business name is required";
  //   if (!formData.registrationNumber)
  //     newErrors.registrationNumber = "Registration number is required";
  //   if (!formData.ownerName) newErrors.ownerName = "Owner name is required";
  //   if (!formData.email) newErrors.email = "Email is required";
  //   if (!formData.phone) newErrors.phone = "Phone number is required";

  //   if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  //     newErrors.email = "Invalid email format";
  //   }

  //   if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
  //     newErrors.phone = "Invalid phone number";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("Form submitted:", formData);
  //   }
  // };

  return (

    <>
    <Breadcrumb title="Buyer Partnership Registration Portal" links={breadcrumbLinks} />
    <div className="project-area style-three mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <h5 className="section-sub-title">
                Begin your journey with De Koshur Crafts
              </h5>
              <h1 className="section-main-title">Registration Form</h1>
              <h4 className="">
                Fill the form as per your bussiness type & legal structure <br />{" "}
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
                  Process 2
                </h1>
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <Card
      className="max-w-6xl mt-5 p-4 w-full mx-auto "
      style={{ maxWidth: "660px" }}
    >
      <h3 className="text-2xl font-bold mb-0" style={{color:"#F44336"}}>Buyer Onboarding Registration Form</h3>
      <p>Connecting you with DKC B2B network of trusted Kashmiri craft artisans & vendors</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Information */}
        <ApplicationFormFields
          handleInputChange={handleInputChange}
          title={bussinessInformationFields.title}
          errors={errors}
          formData={formData}
          fields={bussinessInformationFields.fields}
        />

        {/* Contact Information */}
        <ApplicationFormFields
          handleInputChange={handleInputChange}
          title={contactInformationFields.title}
          errors={errors}
          formData={formData}
          fields={contactInformationFields.fields}
          icon={Phone}
        />

        {/* Business Credibility Evaluation */}
        <ApplicationFormFields
          handleInputChange={handleInputChange}
          title={credibilityAssessmentFields.title}
          errors={errors}
          formData={formData}
          fields={credibilityAssessmentFields.fields}
          icon={Shield}
        />

        {/* Product Authenticity Certifications */}
        <ApplicationFormFields
          handleInputChange={handleInputChange}
          title={certifications.title}
          errors={errors}
          formData={formData}
          fields={certifications.fields}
          icon={Award}
        />

        {/* Payment Information */}
        <ApplicationFormFields
          handleInputChange={handleInputChange}
          title={bankingInformationFields.title}
          errors={errors}
          formData={formData}
          fields={bankingInformationFields.fields}
          icon={CreditCard}
        />

        <ApplicationFormFields
          handleInputChange={handleInputChange}
          title={bankingInoformationCheckbox.title}
          errors={errors}
          formData={formData}
          fields={bankingInoformationCheckbox.fields}
          icon={CreditCard}
        />

        {/* Documentation Upload */}


        {/* <ApplicationFormFields
          handleInputChange={handleInputChange}
          title={documentUploadConfig.title}
          errors={errors}
          formData={formData}
          fields={documentUploadConfig.fields}
          icon={FileUploadIcon}
          // fileName={fileName}
        /> */}

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="px-6 py-2 text-white rounded-md transition-colors"
            style={{ backgroundColor: "#F44336" }}
          >
            Submit Application
          </Button>
        </div>
      </form>
    </Card>

    </>
  );
};

export default ApplicationForm;
