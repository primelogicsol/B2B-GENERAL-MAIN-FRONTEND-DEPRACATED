/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Button,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { ChevronDown, ChevronUp } from "lucide-react";
import DetailCard from "../../components/ProductPortfolio/DetailCard";
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
const ProductionPortfolio = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandMainCategory, setExpandMainCategory] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [subcategoryDetails, setSubcategoryDetails] = useState(null);
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "PartnerShip" },
  ];
  // const [selectedValues, setSelectedValues] = useState({
  //   material_type: [],
  //   quality: [],
  //   production_process: [],
  //   product_certifications: [],
  //   type_of_weaving: [],
  //   design_pattern_types: [],
  //   dye_types: [],
  //   embellishments: [],
  //   product_line_size: [],
  //   color_shades: [],
  //   embroidery_types: [],
  //   other_dye_type: [],
  //   bright_bold_shades: [],
  //   pastel_shades: [],
  //   size_available: [],
  //   traditional_tones: [],
  //   design_shapes: [],
  //   design_carvings: [],
  //   dimensions: [],
  //   installation_services: [],
  //   service_options: [],
  //   packaging: [],
  //   logistics: [],
  //   vendor_able_to_handle_following_services_on_DKC_platform: [],
  //   labeling_type: [],
  //   vendor_able_to_handle_product_labeling: [],
  //   Passport_Status_for_Vendor_Staff_Required_for_international_projects: [],
  //   embroidery_stitch_techniques: [],
  //   overlocked_edges: [],
  //   weighted_hem: [],
  //   curtain_lining: [],
  //   certifications: [],
  //   product_name_and_dimensions: [],
  //   weight: [],
  //   knot_per_inch: [],
  //   scale_of_carving: [],
  //   finishings:[],
  //   stain:[],
  //   product_line:[]

  // });

  const toggleMainCategoryExpansion = () => {
    setExpandMainCategory((prev) => !prev);
  };
  const categories = [
    {
      name: "Boutique",
      id: "cat1",
      subcategories: [
        {
          name: "Pashmina",
          id: "pashmina",
          details: {
            material_type: [
              "Ultra-Fine Pashmina (10-12 microns)",
              "Fine Pashmina (12-14 microns)",
              "Standard Pashmina (14-16 microns)",
            ],
            quality: [
              "Pure Pashmina (100% Pashmina)",
              "Blend: 50% Pashmina, 50% Cashmere",
              "Blend: 70% Pashmina, 30% Angora",
              "Blend: 80% Pashmina, 20% Vicuna",
              "Blend: 70% Pashmina, 30% Acrylic",
              "Blend: 60% Pashmina, 40% Merino Wool",
              "Blend: 50% Pashmina, 50% Modal",
              "Blend: 60% Pashmina, 40% Tussar Silk",
              "Blend: 50% Pashmina, 50% Polyester",
            ],
            production_process: [
              "Hand Spinning, Hand Weaving",
              "Hand Spinning, Machine Weaving",
              "Machine Spinning, Machine Weaving",
            ],
            product_certifications: [
              "GI Certificate",
              "Responsible Wool Standard (RWS)",
              "Blockchain Traceability",
              "Handloom Mark",
              "Woolmark Certification",
              "Global Organic Textile Standard (GOTS)",
              "OEKO-TEX Standard 100",
              "Fair Trade Certification",
              "Customs and Import Certifications",
              "Cradle to Cradle Certification*",
              "None",
            ],

            type_of_weaving: [
              "Twill Weave ",
              "Diamond Weave ",
              "Herringbone Weave",
              "Jacquard Weave",
              "Plain Weave",
              "Honeycomb Weave",
            ],
            dye_types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            product_line_size: [
              "Shawls  (203 cm x 102 cm)",
              "Stoles  (178 cm x 76 cm)",
              "Scarves (152 cm x 51 cm)",
              "Wraps (229 cm x 89 cm)",
              "Ponchos (86 cm x 102 cm) ",
              "Sarees (550 cm x 115 cm)",
            ],
            color_shades: [
              "Natural Shades",
              "Classic Neutrals",
              "Pastel Shades",
              "Jewel Tones",
              "Earthy Tones",
              "Bold and Vibrant Shades",
              "Metallic Shades",
              "Dual-Tone and Gradient Shades",
              "Soft Whites and Off-Whites",
            ],
            embellishments: [
              "Full Dense Embroidery",
              "Full Border Embroidery",
              "Allover Embroidery",
              "Motif Embroidery",
              "End Panel Embroidery",
              "Narrow Border Embroidery",
              "Wide Border Embroidery",
              "Dense Allover Embroidery",
              "Double Border Embroidery",
              "Reverse Embroidery",
              "Metal Thread Embroidery",
              "Papier Mâché Embroidery",
            ],
            packaging: [
              "Fabric Wrapping",
              "Luxury Gift Boxes",
              "Protective Sleeves",
              "Hang Tags",
            ],
            vendor_able_to_handle_product_labeling: [
              "Product Name",
              "Materials Information",
              "Storage Instructions",
              "Care Instructions",
              "Certification Logos",
              "Barcode & Contact Information",
              "Sustainability Message",
              "Product Story",
              "Size and Measurement Guide",
              "Special Care Symbols",
              "Product Guarantee",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Cashmere",
          id: "cashmere",
          details: {
            material_type: [
              "Ultra-Fine Cashmere (13-15 microns)",
              "Fine Cashmere (15-17 microns)",
              "Standard Cashmere (17-19 microns)",
            ],
            quality: [
              "Pure Cashmere (100% Cashmere)",
              "Blend: 50% Cashmere, 50% Pashmina",
              "Blend: 70% Cashmere, 30% Angora",
              "Blend: 80% Cashmere, 20% Vicuna",
              "Blend: 70% Cashmere, 30% Acrylic",
              "Blend: 60% Cashmere, 40% Merino Wool",
              "Blend: 50% Cashmere, 50% Modal",
              "Blend: 60% Cashmere, 40% Tussar Silk",
              "Blend: 50% Cashmere, 50% Polyester",
            ],
            Production_Process: [
              "Hand Spinning, Hand Weaving",
              "Hand Spinning, Machine Weaving",
              "Machine Spinning, Machine Weaving",
            ],
            Product_Certifications: [
              "Cashmere Certification Program (CCP)",
         
              "Sustainable Cashmere Certification",
              "The Good Cashmere Standard®",
              "Global Organic Textile Standard (GOTS)",
              "Fair Trade Certification",
              "OEKO-TEX® Standard 100",
              "Customs and Import Certifications",
              "Cradle to Cradle Certification*",
              "None",
            ],
            Type_of_Weaving: [
              "Twill Weave ",
              "Diamond Weave ",
              "Herringbone Weave",
              "Jacquard Weave",
              "Plain Weave",
              "Honeycomb Weave",
            ],
            Dye_Types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            Product_Line_Size: [
              "Shawls  (203 cm x 102 cm)",
              "Stoles  (178 cm x 76 cm)",
              "Scarves (152 cm x 51 cm)",
              "Wraps (229 cm x 89 cm)",
              "Ponchos (86 cm x 102 cm) ",
              "Sarees (550 cm x 115 cm)",
            ],
            Color_Shades: [
              "Natural Shades",
              "Classic Neutrals",
              "Pastel Shades",
              "Jewel Tones",
              "Earthy Tones",
              "Bold and Vibrant Shades",
              "Metallic Shades",
              "Dual-Tone and Gradient Shades",
              "Soft Whites and Off-Whites",
            ],
            Embellishments: [
              "Full Dense Embroidery",
              "Full Border Embroidery",
              "Allover Embroidery",
              "Motif Embroidery",
              "End Panel Embroidery",
              "Narrow Border Embroidery",
              "Wide Border Embroidery",
              "Dense Allover Embroidery",
              "Double Border Embroidery",
              "Reverse Embroidery",
              "Metal Thread Embroidery",
              "Papier Mâché Embroidery",
            ],
            packaging: [
              "Fabric Wrapping",
              "Luxury Gift Boxes",
              "Protective Sleeves",
              "Hang Tags",
            ],
            vendor_able_to_handle_product_labeling: [
              "Product Name",
              "Materials Information",
              "Storage Instructions",
              "Care Instructions",
              "Certification Logos",
              "Barcode & Contact Information",
              "Sustainability Message",
              "Product Story",
              "Size and Measurement Guide",
              "Special Care Symbols",
              "Product Guarantee",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Kani",
          id: "kani",
          details: {
            material_type: [
              "Ultra-Fine Pashmina (10-12 microns)",
              "Fine Pashmina (12-14 microns)",
              "Standard Pashmina (14-16 microns)",
            ],
            quality: [
              "Pure Pashmina (100% Pashmina)",
              "Blend: 50% Pashmina, 50% Cashmere",
              "Blend: 60% Pashmina, 40% Tussar Silk",
            ],
            Production_Process: [
              "Hand Spinning, Hand Weaving",
              "Hand Spinning, Machine Weaving",
              "Machine Spinning, Machine Weaving",
            ],
            Product_Certifications: [
              "GI Certificate",
              "Responsible Wool Standard (RWS)",
              "Blockchain Traceability",
              "Handloom Mark",
              "Woolmark Certification",
              "Global Organic Textile Standard (GOTS)",
              "OEKO-TEX Standard 100",
              "Fair Trade Certification",
              "Customs and Import Certifications",
              "Cradle to Cradle Certification*",
              "None",
            ],
            Design_Pattern_Types: [
              "Paisley",
              "Floral Patterns",
              "Geometric Patterns",
              "Tree of Life",
              "Abstract Patterns",
            ],
            Dye_Types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            Product_Line_Size: [
              "Shawls  (203 cm x 102 cm)",
              "Stoles  (178 cm x 76 cm)",
              "Scarves (152 cm x 51 cm)",
              "Wraps (229 cm x 89 cm)",
              "Ponchos (86 cm x 102 cm) ",
              "Sarees (550 cm x 115 cm)",
            ],
            Color_Shades: [
              "Traditional Kani Colors",
              "Classic Neutrals",
              "Pastel Shades",
              "Jewel Tones",
              "Earthy Tones",
              "Bold and Vibrant Shades",
              "Metallic Shades",
            ],
            Embellishments: ["Kani Tassels", "Traditional Knotting"],
            packaging: [
              "Fabric Wrapping",
              "Luxury Gift Boxes",
              "Protective Sleeves",
              "Hang Tags",
            ],
            vendor_able_to_handle_product_labeling: [
              "Product Name",
              "Materials Information",
              "Storage Instructions",
              "Care Instructions",
              "Certification Logos",
              "Barcode & Contact Information",
              "Sustainability Message",
              "Product Story",
              "Size and Measurement Guide",
              "Special Care Symbols",
              "Product Guarantee",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        }, //Dining & Serving Ware
        {
          name: "Silk",
          id: "silk",
          details: {
            material_type: [
              "Mulberry Silk",
              "Tussar Silk",
              "Eri Silk",
              "Muga Silk",
              "Raw Silk",
              "Organza Silk",
            ],
            quality: [
              "Pure Silk (100% Silk)",
              "Blend: 50-70% Silk, 30-50% Cotton",
              "Blend: 50-70% Silk, 30-50% Wool",
              "Blend: 50-70% Silk, 30-50% Cashmere",
              "Blend: 50-70% Silk, 30-50% Polyester",
              "Blend: 50-70% Silk, 30-50% Linen",
              "70% Silk, 30% Bamboo",
              "Blend: 60-70% Silk, 30-40% Modal",
              "Blend: 60% Silk, 40% Tussar Silk",
            ],
            Production_Process: [
              "Hand Spinning, Hand Weaving",
              "Hand Spinning, Machine Weaving",
              "Machine Spinning, Machine Weaving",
            ],
            Product_Certifications: [[
              "Silk Mark Certification",
    "OEKO-TEX® Standard 100",
    "Global Organic Textile Standard (GOTS)",
    "Fair Trade Certification",
    "ISO 14001",
    "Sustainable Apparel Coalition’s Higg Index",
    "Customs and Import Certifications",
      "Cradle to Cradle Certification*",

    "None"
          ]
          ],
            Type_of_Weaving: [
              "Satin Weave",
              "Twill Weave",
              "Plain Weave",
              "Jacquard Weave",
              "Organza Weave",
              "Brocade Weave",
              "Crepe Weave",
              "Chiffon Weave",
              "Georgette Weave",
            ],
            Design_Pattern_Types: [
              "Paisley",
              "Floral Patterns",
              "Geometric Patterns",
              "Tree of Life",
              "Abstract Patterns",
            ],
            Dye_Types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            Product_Line_Size: [
              "Shawls - 203 cm x 102 cm",
              "Stoles - 178 cm x 76 cm",
              "Scarves - 152 cm x 51 cm",
              "Wraps - 229 cm x 89 cm",
              "Ponchos - 86 cm x 102 cm",
              "Sarees - 550 cm x 115 cm",
              "Dupattas - 254 cm x 102 cm",
            ],
            Color_Shades: [
              "Traditional Kani Colors",
              "Classic Neutrals",
              "Pastel Shades",
              "Jewel Tones",
              "Earthy Tones",
              "Bold and Vibrant Shades",
              "Metallic Shades",
            ],
            Embellishments: [
              "End Panel Embroidery",
              "Metal Thread Embroidery",
              "Narrow Border Embroidery",
            ],
            packaging: [
              "Fabric Wrapping",
              "Luxury Gift Boxes",
              "Protective Sleeves",
              "Hang Tags",
            ],
            vendor_able_to_handle_product_labeling: [
              "Product Name",
              "Materials Information",
              "Storage Instructions",
              "Care Instructions",
              "Certification Logos",
              "Barcode & Contact Information",
              "Sustainability Message",
              "Product Story",
              "Size and Measurement Guide",
              "Special Care Symbols",
              "Product Guarantee",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Sarongs",
          id: "sarongs",
          details: {
            material_type: ["Pashmina", "Cashmere", "Cotton", "Silk", "Linen"],
            quality: [
              "Pure Pahmina",
              "Pure Cashmere",
              "Khadi Cotton",
              "Pure Silk",
              "Handwoven Linen",
            ],
            production_process: ["Hand Weaving", "Machine Weaving"],
            product_certifications:[
              "Global Organic Textile Standard (GOTS)",
    "OEKO-TEX® Standard 100",
    "Organic Content Standard (OCS)",
    "Fair Trade Certification",
    "Cradle to Cradle Certification*",
    "Customs and Import Certifications",
    "None"
            ],
            design_pattern_types: [
              "Floral Motifs",
              "Geometric Patterns",
              "Abstract Art",
              "Cultural and Traditional Designs",
            ],
            dye_types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
            ],

            product_line_size: [
              "Long Sarong - 152-178 cm",
              "Short Sarong - 102-127 cm",
              "Wrap Skirt Style - 127-152 cm",
            ],

            color_shades: [
              "Classic Neutrals",
              "Traditional Tones",
              "Pastel Shades",
              "Bright Bold Shades",
            ],

            embellishments: [
              "Beaded Borders",
              "Embroidered Panels",
              "Fringe Detailing",
              "Tassels",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Bags & Purses",
          id: "bags",
          details: {
            material_type: [
              "Wool",
              "Silk",
              "Cotton",
              "Leather",
              "Canvas",
              "Jute",
              "Velvet",
            ],
            quality: [
              "Pure Wool",
              "Silk-Cotton Blend",
              "Embroidered Leather",
              "Kashmiri Pashmina",
            ],
            Production_Process: ["Handcrafted", "Machine Stitching"],
            Product_Certifications: [
              "Leather Working Group (LWG) Certification",
              "Global Organic Textile Standard (GOTS)",
              "OEKO-TEX® Standard 100",
              "Cradle to Cradle Certification",
              "PETA-Approved Vegan Certification",
              "ISO 14001",
              "Sustainable Apparel Coalition (SAC) Higg Index",
              "Fair Trade Certification",
              "Customs and Import Certifications",
              "None"
            ],
            Embroidery_Types: [
              "Aari Work",
              "Chain Stitch Embroidery",
              "Papier Mâché Inspired Embroidery",
              "Sozni Embroidery",
              "Zardozi Embroidery",
            ],
            Type_of_Weaving: [
              "Satin Weave",
              "Twill Weave",
              "Plain Weave",
              "Jacquard Weave",
              "Organza Weave",
              "Brocade Weave",
              "Crepe Weave",
              "Chiffon Weave",
              "Georgette Weave",
            ],
            Design_Pattern_Types: [
              "Paisley",
              "Floral Patterns",
              "Geometric Patterns",
              "Traditional Kashmiri Motifs",
              "Abstract Patterns",
            ],
            Dye_Types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            Product_Line_Size: [
              "Clutch - 20 cm x 10 cm",
              "Shoulder Bag - 30 cm x 25 cm x 10 cm",
              "Tote Bag - 40 cm x 35 cm x 12 cm",
              "Sling Bag - 20 cm x 25 cm x 5 cm",
              "Backpack - 40 cm x 30 cm x 15 cm",
              "Coin Purse - 10 cm x 8 cm",
            ],
            Color_Shades: [
              "Classic Neutrals",
              "Traditional Kashmiri Colors",
              "Bright and Bold Shades",
              "Pastel Shades",
              "Metallic Shades",
            ],
            Embellishments: [
              "Tassels",
              "Mirror Work",
              "Beaded Detailing",
              "Sequins",
              "Metallic Threads",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Jackets",
          id: "jackets",
          details: {
            material_type: [
              "Pashmina",
              "Cashmere",
              "Silk",
              "Cotton",
              "Velvet",
              "Leather",
            ],
            quality: [
              "Pure Pashmina",
              "Pure Cashmere",
              "Wool-Cotton Blend",
              "Silk-Wool Blend",
              "Embossed or Embroidered Leather",
            ],
            Production_Process: [
              "Hand Spinning, Hand Weaving",
              "Machine Weaving",
              "Handcrafted",
              "Machine Stitching",
            ],
            Product_Certifications: [
              "GI Certification",
              "OEKO-TEX® Standard 100",
              "Global Organic Textile Standard (GOTS)",
              "Leather Working Group (LWG) Certification",
              "Cradle to Cradle Certification",
               "Fair Trade Certification",
              "ISO 14001",
              "Sustainable Apparel Coalition (SAC) Higg Index",
              "ISO 9001",
              "Customs and Import Certifications",
              "None"
            ],
            Embroidery_Types: [
              "Aari Work",
              "Sozni Embroidery",
              "Tilla Work (Gold/Silver Thread Embroidery)",
              "Chain Stitch Embroidery",
              "Zardozi Embroidery",
            ],
            Type_of_Weaving: [
              "Satin Weave",
              "Twill Weave",
              "Plain Weave",
              "Jacquard Weave",
              "Organza Weave",
              "Brocade Weave",
              "Crepe Weave",
              "Chiffon Weave",
              "Georgette Weave",
            ],
            Design_Pattern_Types: [
              "Paisley",
              "Floral Patterns",
              "Geometric Patterns",
              "Traditional Kashmiri Motifs",
              "Minimalist Designs",
            ],
            Dye_Types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            Product_Line_Size: [
              "Short Jacket - 61-66 cm",
              "Long Coat - 91-102 cm",
              "Overcoat - 107-122 cm",
              "Bomber Jacket - 56-61 cm",
              "Blazer - 71-76 cm",
            ],
            Color_Shades: [
              "Classic Neutrals",
              "Traditional Kashmiri Colors",
              "Bright and Bold Shades",
              "Pastel Shades",
              "Metallic Shades",
            ],

            Size_Available: [
              "Small (S)",
              "Medium (M)",
              "Large (L)",
              "Extra Large (XL)",
              "Custom Fit",
            ],
            Embellishments: [
              "Tilla Borders",
              "Embroidered Cuffs and Collars",
              "Mirror Work",
              "Beaded Detailing",
              "Sequins",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Kaftans",
          id: "kaftans",
          details: {
            material_type: [
              "Pashmina",
              "Silk",
              "Cotton",
              "Linen",
              "Velvet",
              "Chiffon",
            ],
            quality: [
              "Pure Pashmina",
              "Pure Silk",
              "Cotton-Linen Blend",
              "Embroidered Velvet",
            ],
            Production_Process: [
              "Hand Spinning, Hand Weaving",
              "Machine Weaving",
              "Handcrafted",
              "Machine Stitching",
            ],
            Product_Certifications: [
              "GI",
              "OEKO-TEX® Standard 100",
              "Global Organic Textile Standard (GOTS)",
               "Fair Trade Certification",
               "Customs and Import Certifications",
              "Cradle to Cradle Certification",
              "Sustainable Apparel Coalition (SAC) Higg Index",
              "ISO 14001",
              "ISO 9001",
              "None"
            ],
            Embroidery_Types: [
              "Aari Work",
              "Sozni Embroidery",
              "Tilla Work (Gold/Silver Thread Embroidery)",
              "Chain Stitch Embroidery",
              "Zardozi Embroidery",
            ],
            Type_of_Weaving: [
              "Satin Weave",
              "Twill Weave",
              "Plain Weave",
              "Jacquard Weave",
              "Organza Weave",
              "Brocade Weave",
              "Crepe Weave",
              "Chiffon Weave",
              "Georgette Weave",
            ],
            Design_Pattern_Types: [
              "Floral Patterns",
              "Paisley",
              "Geometric Patterns",
              "Traditional Kashmiri Motifs",
              "Abstract Designs",
            ],
            Dye_Types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            Product_Line_Size: [
              "Long Kaftan - 127-137 cm",
              "Short Kaftan - 102-112 cm",
              "Kimono Style Kaftan - 122-132 cm",
            ],
            Color_Shades: [
              "Classic Neutrals",
              "Traditional Kashmiri Colors",
              "Bright and Bold Shades",
              "Pastel Shades",
              "Metallic Shades",
            ],

            Size_Available: [
              "Small (S)",
              "Medium (M)",
              "Large (L)",
              "Extra Large (XL)",
              "Custom Fit",
            ],
            Embellishments: [
              "Tilla Borders",
              "Embroidered Sleeves",
              "Mirror Work",
              "Beaded Detailing",
              "Sequins",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Kurtas",
          id: "kurtas",
          details: {
            material_type: [
              "Wool",
              "Silk",
              "Cotton",
              "Linen",
              "Velvet",
              "Khadi",
            ],
            quality: [
              "Pure Wool",
              "Pure Silk",
              "Cotton-Linen Blend",
              "Handwoven Khadi",
            ],
            Production_Process: [
              "Hand Spinning, Hand Weaving",
              "Machine Weaving",
              "Handcrafted",
              "Machine Stitching",
            ],
            Product_Certifications: [
              "OEKO-TEX® Standard 100",
              "GOTS",
              "Cradle to Cradle Certification","Customs and Import Certifications",
              "Fair Trade Certifications",
              "None"

            ],
            Embroidery_Types: [
              "Aari Work",
              "Sozni Embroidery",
              "Tilla Work (Gold/Silver Thread Embroidery)",
              "Chain Stitch Embroidery",
              "Zardozi Embroidery",
            ],
            Type_of_Weaving: [
              "Satin Weave",
              "Twill Weave",
              "Plain Weave",
              "Jacquard Weave",
              "Organza Weave",
              "Brocade Weave",
              "Crepe Weave",
              "Chiffon Weave",
              "Georgette Weave",
            ],
            Design_Pattern_Types: [
              "Floral Patterns",
              "Paisley",
              "Geometric Patterns",
              "Traditional Kashmiri Motifs",
              "Minimalist Designs",
            ],
            Dye_Types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            Product_Line_Size: [
              "Long Kaftan - 127-137 cm",
              "Short Kaftan - 102-112 cm",
              "Kimono Style Kaftan - 122-132 cm",
            ],
            Color_Shades: [
              "Classic Neutrals",
              "Traditional Kashmiri Colors",
              "Bright and Bold Shades",
              "Pastel Shades",
              "Metallic Shades",
            ],

            Size_Available: [
              "Small (S)",
              "Medium (M)",
              "Large (L)",
              "Extra Large (XL)",
              "Custom Fit",
            ],
            Embellishments: [
              "Tilla Borders",
              "Embroidered Sleeves",
              "Mirror Work",
              "Beaded Detailing",
              "Sequins",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Pherans",
          id: "pherans",
          details: {
            material_type: [
              "Wool",
              "Cashmere",
              "Silk",
              "Cotton",
              "Khadi",
              "Tweed",
              "Blazer Fabric",
              "Funnel Fabric",
            ],
            quality: [
              "Pure Wool",
              "Pure Cashmere",
              "Wool-Cotton Blend",
              "Handwoven Khadi",
              "Tweed Quality",
              "Blazer Quality",
            ],
            Production_Process: [
              "Hand Spinning, Hand Weaving",
              "Machine Weaving",
              "Handcrafted",
              "Machine Stitching",
            ],
            Product_Certifications: [
              "Woolmark",
              "OEKO-TEX® Standard 100",
              "Fair Trade Certification",
              "Cradle to Cradle Certification","Customs and Import Certifications",
              "Fair Trade",
              "GOTS",
              "None"
            ],
            Embroidery_Types: [
              "Aari Work",
              "Sozni Embroidery",
              "Tilla Work (Gold/Silver Thread Embroidery)",
              "Chain Stitch Embroidery",
              "Zardozi Embroidery",
            ],
            Type_of_Weaving: [
              "Satin Weave",
              "Twill Weave",
              "Plain Weave",
              "Jacquard Weave",
              "Organza Weave",
              "Brocade Weave",
              "Crepe Weave",
              "Chiffon Weave",
              "Georgette Weave",
            ],
            Design_Pattern_Types: [
              "Floral Patterns",
              "Paisley",
              "Geometric Patterns",
              "Traditional Kashmiri Motifs",
              "Minimalist Designs",
            ],
            Dye_Types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            Product_Line_Size: [
              "Long Pheran - 114-127 cm",
              "Short Pheran - 91-102 cm",
            ],
            Color_Shades: [
              "Classic Neutrals",
              "Traditional Kashmiri Colors",
              "Bright and Bold Shades",
              "Pastel Shades",
              "Metallic Shades",
            ],

            Size_Available: [
              "Small (S)",
              "Medium (M)",
              "Large (L)",
              "Extra Large (XL)",
              "Custom Fit",
            ],
            Embellishments: [
              "Tilla Borders",
              "Embroidered Sleeves",
              "Mirror Work",
              "Beaded Detailing",
              "Sequins",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Jewelry",
          id: "jewelry",
          details: {
            material_type: [
              "Silver",
              "Gold",
              "Copper",
              "Brass",
              "Semi-precious Stones",
              "Pearls",
              "Enamel",
            ],
            quality: [
              "Pure Silver",
              "22K Gold",
              "Brass with Silver Plating",
              "Handcrafted Silver",
            ],
            Production_Process: [
              "Handcrafted",
              "Machine-Made",
              "Traditional Techniques",
            ],
            Jewerly_Types: [
              "Necklaces",
              "Earrings",
              "Bracelets",
              "Rings",
              "Bangles",
              "Anklets",
            ],
            Product_Certifications: [
              "Hallmarking, RJC Certification, Fairmined, Conflict-Free (e.g., Kimberley Process)",
              "Gemological Institute of America (GIA) Certification",
              "International Gemological Institute (IGI) Certification",
              "Colored Gemstone Certification",
              "ISO 9001 Certification",
              "American Gem Society (AGS) Certification",
              "Jewelry Council of America (JCA) Certification",
              "Ethical Gemstone Certification",
              "ISO 14001",
              "Fair Trade Certification","Cradle to Cradle Certification","Customs and Import Certifications",
              "None"
            ],
            Embroidery_Types: [
              "Aari Work",
              "Sozni Embroidery",
              "Tilla Work (Gold/Silver Thread Embroidery)",
              "Chain Stitch Embroidery",
              "Zardozi Embroidery",
            ],
            Type_of_Weaving: [
              "Satin Weave",
              "Twill Weave",
              "Plain Weave",
              "Jacquard Weave",
              "Organza Weave",
              "Brocade Weave",
              "Crepe Weave",
              "Chiffon Weave",
              "Georgette Weave",
            ],
            Design_Pattern_Types: [
              "Traditional Kashmiri Motifs",
              "Floral Patterns",
              "Geometric Designs",
              "Filigree Work",
              "Kundan Work",
            ],

            Finishing_Techniques: [
              "Polished Finish",
              "Matte Finish",
              "Oxidized Finish",
              "Hammered Finish",
              "Enamel Work",
            ],
            Dye_Types: [
              "Natural-Dyed",
              "Vegetable-Dyed",
              "Chemical-Dyed",
              "Acid-Dyed",
              "Eco-Dyed",
              "Azo-Free Dyed",
              "Tie-Dyed",
              "Ombre-Dyed",
              "Hand-Painted or Brush-Dyed",
            ],
            Product_Line_Size: [
              "Necklaces - 41-51 cm",
              "Earrings - 2.5-7.5 cm",
              "Bracelets - 18-20 cm",
              "Rings - Sizes: 6-10 (US Sizes)",
              "Bangles - 6.5-7.5 cm",
              "Anklets - 23-28 cm",
            ],
            Color_Shades: [
              "Classic Metallics",
              "Gemstone Colors",
              "Enamel Colors",
            ],

            Size_Available: [
              "Small (S)",
              "Medium (M)",
              "Large (L)",
              "Extra Large (XL)",
              "Custom Fit",
            ],
            Embellishments: [
              "Filigree Work",
              "Stone Inlays",
              "Enamel Detailing",
              "Beading",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },
    {
      name: "Interior Décor",
      id: "cat2",
      subcategories: [
        {
          name: "Papier-Mache",
          id: "papierMachie",
          details: {
            main_material_type: [
              "Waste Paper and Cotton Rags",
              "Plant Fibers (such as Hemp)",
              "Rice Flour Paste or Starch Paste",
            ],

            embedded_materials: ["Wood", "Fabric", "Metal"],
            quality: [
              "Traditional High-Quality Craftsmanship",
              "High-Gloss Lacquered Quality",
              "Molded Paper Mâché with Smooth Texture",
            ],
            production_process: [
              "Traditional Paper Mâché Method",
              "Molded Paper Mâché Process",
              "Paper Mâché with Lacquer Finish",
            ],
            design_pattern_types: [
              "Floral Patterns",
              "Geometric Designs",
              "Traditional Kashmiri Motifs",
              "Abstract Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Hand-Painted",
              "Varnished",
              "Gold/Silver Leaf Application",
              "Textured Finishes",
            ],
            product_type_size: [
              'Wall Art Decorative Panels  24" x 36"',
              'Framed Art Pieces  12" x 16"',
              "Murals: Custom Sizes Available",
              'Serving Bowls 12"',
              'Decorative Plates 10"',
              'Trinket Dishes 6"',
              'Jewelry Boxes 8" x 6" x 4"',
              'Keepsake Boxes 10" x 8" x 5"',
              'Storage Chests 18" x 12" x 10"',
              'Animal Figures cats 6-8"',
              'Animal Figures elephants 6-8"',
              'Animal Figures ducks 6-8"',
              'Animal Figures camels 6-8"',
              'Table Lamps  14-16"',
              'Hanging Lanterns 12"',
              'Floor Lamps 50-60"',
              'Table Tops  30" x 30"',
              'Decorative Stools 12" x 12" x 18"',
              'Samawar: 12"',
              'Picture Frames 5" x 7"',
              'Candle Holders 6"',
              'Coasters 4"',
              'Cell Phone Stand 6" x 4"',
              'Wrist Watch Stand 8" x 4"',
              'Tissue Box Covers: 10" x 5" x 5"',
              'Tarot Card Box 5" x 4" x 2"',
              'Chessboards 18" x 18"',
              'Playing Pieces 3"',
              'Decorative Wall Clocks 12"',
              'Small Planters 8"',
              'Large Pots 14"',
              'Serving Trays 18" x 12"',
              'Decorative Trays 16" x 16"',
              'Santa\'s Sleigh Ornament 5" - 6"',
              'Snowman Decoration Ornament 3" - 5"',
              'Reindeer with Sleigh Ornament 5" - 7"',
              'Christmas Tree Miniature Ornament 4" - 6"',
              'Christmas Bell Ornament 5" - 6"',
              'Gift Box Ornament 3" - 4"',
              'Snowflake Bauble Ornament 3" - 4"',
              'Angels of Christmas Ornament 5" - 6"',
              'Candy Cane Ornament 3" - 4"',
              'Pine Cone Ornament 3" - 5"',
            ],
            certifications: [
              "Geographical Indication (GI) Certification",
    "Fair Trade Certification",
    "OEKO-TEX® Standard 100",
    "Cradle to Cradle Certification",
    "Customs and Import Certifications",
    "None"

            ],
            color_shades: [
              "Classic Neutrals",

              "Bright and Bold Colors",
              "Pastel Shades",
            ],
            embellishments: ["Mirror Work", "Metallic Thread"],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Tapestry",
          id: "tapestry",
          details: {
            material_type: ["Wool", "Silk", "Cotton", "Blended Fabrics"],
            quality: [
              "Handcrafted",
              "Premium Quality Finish",
              "Eco-Friendly Materials",
            ],
            production_process: [
              "Handcrafted",
              "Machine-Made",
              "Traditional Techniques",
            ],
            design_pattern_types: [
              "Floral Patterns",
              "Geometric Designs",
              "Traditional Kashmiri Motifs",
              "Abstract Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Fringing",
              "Backing",
              "Binding",
              "Lining",
              "Mounting",
              "Stiffening",
            ],
            certifications: [
              "Global Organic Textile Standard (GOTS)",
    "Fair Trade Certification",
    "OEKO-TEX® Standard 100",
    "ISO 9001 (Quality Management)",
    "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            color_shades: [
              "Classic Neutrals",
              "Bright and Bold Colors",
              "Pastel Shades",
            ],
            embellishments: [
              "Mirror Work",
              "Beaded Work",
              "Zardozi Embroidery",
              "Sequins",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Jeweled Wall Hangings",
          id: "jeweled",
          details: {
            material_type: ["Fabric (Silk, Cotton)", "Metal"],
            quality: [
              "Handcrafted",
              "Premium Quality Finish",
              "Eco-Friendly Materials",
            ],
            production_process: [
              "Handcrafted",
              "Machine-Made",
              "Traditional Techniques",
            ],
            design_pattern_types: [
              "Floral Patterns",
              "Geometric Designs",
              "Traditional Kashmiri Motifs",
              "Abstract Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Fringing",
              "Backing",
              "Binding",
              "Lining",
              "Mounting",
              "Stiffening",
            ],
            certifications: [
             "Responsible Jewelry Council (RJC) Certification",
    "Fair Trade Certification",
    "Hallmarking for Jewelry",
    "OEKO-TEX® Standard 100",
    "ISO 9001 (Quality Management)",
    "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            color_shades: [
              "Classic Neutrals",
              "Bright and Bold Colors",
              "Pastel Shades",
            ],
            embellishments: [
              "Mirror Work",
              "Beaded Work",
              "Zardozi Embroidery",
              "Sequins",
              "Precious and Semi-Precious Metals",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        }, //Office Accessories
        {
          name: "Office Accessories",
          id: "officeAcc",
          details: {
            material_type: [
              "Wood",
              "Papier-Mâché",
              "Metal",
              "Fabric",
              "Leather",
            ],
            quality: [
              "Handcrafted",
              "Eco-Friendly Materials",
              "Premium Quality Finish",
            ],
            production_process: [
              "Handcrafted",
              "Machine-Made",
              "Traditional Techniques",
            ],
            design_pattern_types: [
              "Floral Patterns",
              "Geometric Designs",
              "Traditional Kashmiri Motifs",
              "Abstract Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Hand-Painted",
              "Varnished",
              "Textured Finishes",
            ],
            certifications: [
              "Fair Trade Certification",
    "ISO 9001 (Quality Management)",
    "Cradle to Cradle Certification",
    "Customs and Import Certifications","None"
            ],
            color_shades: [
              "Classic Neutrals",
              "Bright and Bold Colors",
              "Pastel Shades",
            ],
            embellishments: ["Mirror Work", "Metallic Thread", "Carvings"],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Room Divider Screens",
          id: "roomDividerSec",
          details: {
            material_type: ["Wood", "Papier-Mâché", "Fabric", "Metal"],
            quality: [
              "Handcrafted Wood",
              "Eco-Friendly Materials",
              "Premium Quality Finish",
            ],
            production_process: [
              "Handcrafted",
              "Machine-Made",
              "Traditional Techniques",
            ],
            design_pattern_types: [
              "Floral Patterns",
              "Geometric Designs",
              "Traditional Kashmiri Motifs",
              "Abstract Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Hand-Painted",
              "Lacquered",
              "Varnished",
              "Textured Finishes",
            ],
            certifications: [
              "Fair Trade Certification",
    "Cradle to Cradle Certification",
    "ISO 9001 (Quality Management)",
    "Customs and Import Certifications","None"
            ],
            embellishments: ["Mirror Work", "Metallic Thread", "Carvings"],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        }, //Sofa and Cushion Covers  Sofa and Cushion Covers
        {
          name: "Sofa and Cushion Covers",
          id: "sofaCushion",
          details: {
            material_type: ["Cotton", "Silk", "Wool", "Velvet"],
            quality: [
              "100% Cotton",
              "Pure Silk",
              "Merino Wool",
              "Handcrafted Fabrics",
              "Eco-Friendly Materials",
            ],
            production_process: [
              "Handcrafted",
              "Machine-Made",
              "Traditional Techniques",
            ],
            design_pattern_types: [
              "Floral Patterns",
              "Geometric Designs",
              "Traditional Kashmiri Motifs",
              "Abstract Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Hand-Painted",
              "Embroidered",
              "Screen-Printed",
              "Block-Printed",
            ],
            certifications: [
              "Global Organic Textile Standard (GOTS)",
              "Fair Trade Certification",
              "OEKO-TEX® Standard 100",
              "ISO 14001 (Environmental Management)",
              "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            color_shades: [
              "Classic Neutrals",
              "Bright and Bold Colors",
              "Pastel Shades",
            ],
            embellishments: ["Embroidery", "Lace Detailing", "Appliqué Work"],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Bed Linens",
          id: "bedLinens",
          details: {
            material_type: ["Cotton", "Silk", "Wool", "Linen"],
            quality: [
              "100% Cotton",
              "Pure Silk",
              "Merino Wool",
              "Handcrafted Fabrics",
              "Eco-Friendly Materials",
            ],
            production_process: [
              "Handcrafted",
              "Machine-Made",
              "Traditional Techniques",
            ],
            design_pattern_types: [
              "Floral Patterns",
              "Geometric Designs",
              "Traditional Kashmiri Motifs",
              "Abstract Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Hand-Painted",
              "Embroidered",
              "Screen-Printed",
              "Block-Printed",
            ],
            certifications: [
             "Global Organic Textile Standard (GOTS)",
    "OEKO-TEX® Standard 100",
    "Fair Trade Certification",
    "Cradle to Cradle Certification","Customs and Import Certifications","None"

            ],
            color_shades: [
              "Classic Neutrals",
              "Bright and Bold Colors",
              "Pastel Shades",
            ],
            embellishments: ["Embroidery", "Lace Detailing", "Appliqué Work"],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },
    {
      name: "Dining & Serving Ware",
      id: "cat3",
      subcategories: [
        {
          name: "Papermachieware",
          id: " papermachieware",
          details: {
            material_type: ["Copper", "Brass", "Bronze"],
            quality: [
              "Handcrafted",
              "Premium Quality Finish",
              "Eco-Friendly Materials",
            ],
            production_process: ["Handcrafted", "Machine-Made"],
            design_pattern_types: [
              "Traditional Kashmiri Motifs",
              "Floral Patterns",
              "Geometric Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Polished Finish",
              "Antiqued Finish",
              "Hammered Finish",
            ],
            certifications: [
              "Geographical Indication (GI) Certification",
              "Fair Trade Certification",
              "OEKO-TEX® Standard 100",
              "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            color_shades: ["Natural Copper (shiny)", "Antique Copper (dull)"],
            embellishments: [
              "Engraved Patterns",
              "Inlaid Work",
              "Etched Designs",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Papermachieware Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Walnutware",
          id: "walnutware",
          details: {
            material_type: ["Walnut Wood", "Lacquer Finish", "Natural Stain"],
            quality: [
              "Handcrafted",
              "Premium Quality Finish",
              "Eco-Friendly Materials",
            ],
            product_type_size: [
              'Walnut Serving Plates: 12" diameter',
              'Walnut Bowls: 10" diameter',
              'Walnut Serving Trays: 18" x 12"',
              'Walnut Coasters: 4" x 4"',
              "Walnut Utensils: Sizes vary by type (spoons, forks, spatulas)",
              'Walnut Cheese Boards: 16" x 10"',
              'Mortar and Pestle: 6" height',
              'Decorative Bowls: 8" diameter',
              'Walnut Trays with Handles: 16" x 12"',
              'Walnut Snack Bowls: 6" diameter',
              'Forks: 7" length',
              'Spoons: 7" length',
              'Slate Spoons: 6" length',
              'Soup Spoons: 8" length',
              'Spatula: 12" length',
              'Salt and Pepper Shakers: 4" height',
              'Candle Holders: 5" height',
              'Cutting Boards: 16" x 12"',
              'Fruit Bowls: 12" diameter',
              'Serving Bowls: 10" diameter',
              'Cups: 4" height',
            ],
            production_process: ["Handcrafted", "Machine-Made"],
            design_pattern_types: [
              "Intricate Carvings",
              "Floral Motifs",
              "Geometric Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Natural Finish",
              "Lacquered Finish",
              "Stained Finish",
            ],
            certifications: [
              "Forest Stewardship Council (FSC) Certification",
              "Fair Trade Certification",
              "ISO 14001 (Environmental Management)",
              "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            color_shades: ["Natural Walnut", "Dark Stain", "Light Stain"],
            embellishments: [
              "Inlaid Work",
              "Engraved Designs",
              "Lacquer Detailing",
            ],

            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Papermachieware Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        }, //Silverware
        {
          name: "Silverware",
          id: "silverware",
          details: {
            material_type: ["Silver", "Silver-Plated", "Sterling Silver"],
            quality: [
              "Handcrafted",
              "Premium Quality Finish",
              "Eco-Friendly Materials",
            ],
            production_process: ["Handcrafted", "Machine-Made"],
            design_pattern_types: [
              "Traditional Kashmiri Motifs",
              "Floral Patterns",
              "Geometric Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Polished Finish",
              "Antiqued Finish",
              "Hammered Finish",
            ],
            certifications: [
              "Responsible Jewelry Council (RJC) Certification",
    "Hallmarking for Jewelry",
    "Fair Trade Certification",
    "ISO 9001 (Quality Management)",
    "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            color_shades: ["Natural Silver (shiny)", "Antique Silver (dull)"],
            embellishments: [
              "Engraved Patterns",
              "Inlaid Work",
              "Etched Designs",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Papermachieware Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Copperware",
          id: "copperware",
          details: {
            material_type: ["Copper", "Brass", "Bronze"],
            quality: [
              "Handcrafted",
              "Premium Quality Finish",
              "Eco-Friendly Materials",
            ],
            production_process: ["Handcrafted", "Machine-Made"],
            design_pattern_types: [
              "Traditional Kashmiri Motifs",
              "Floral Patterns",
              "Geometric Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Polished Finish",
              "Antiqued Finish",
              "Hammered Finish",
            ],
            certifications: [
              "Fairmined Gold Certification (if applicable)",
              "ISO 9001 (Quality Management)",
              "ISO 14001 (Environmental Management)",
              "Fair Trade Certification","Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            color_shades: ["Natural Copper (shiny)", "Antique Copper (dull)"],
            embellishments: [
              "Engraved Patterns",
              "Inlaid Work",
              "Etched Designs",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Papermachieware Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },
    {
      name: "Rugs and Carpets",
      id: "cat4",
      subcategories: [
        {
          name: "Rugs and Carpets",
          id: "rugs",
          details: {
            material_type: ["Silk on Silk", "Silk on Wool", "Wool on Cotton"],
            production_process: ["Hand-Knotted", "Hand-Tufted", "Machine-Made"],
            knot_per_inch: [
              "60-100 KPSI",
              "100-300 KPSI",
              "300-600 KPSI",
              "400-800 KPSI",
              "600-800 KPSI",
            ],
            design_pattern_types: [
              "Floral Patterns",
              "Geometric Designs",
              "Traditional Kashmiri Motifs",
            ],
            certifications: [
              "Geographical Indication (GI) Certification",
              "Fair Trade Certification",
              "Global Organic Textile Standard (GOTS)",
              "OEKO-TEX® Standard 100",
              "ISO 9001 (Quality Management)",
              "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            color_shades: [
              // "Ivory",
              // "Beige",
              // "Gray",
              // "Black",
              // "Navy Blue",
              // "Brown",
              // "Blush Pink",
              // "Mint Green",
              // "Lavender",
              // "Rust",
              // "Terracotta",
              // "Olive Green",
              // "Scarlet Red",
              // "Royal Blue",
              // "Deep Purple",
              // "Pearl White",
              // "Antique White",
              // "Cream",
              "Ivory",
              "Beige",
              "Gray",
              "Black",
              "Navy Blue",
              "Brown",
              "Blush Pink",
              "Mint Green",
              "Lavender",
              "Rust",
              "Terracotta",
              "Olive Green",
              "Scarlet Red",
              "Royal Blue",
              "Deep Purple",
              "Pearl White",
              "Antique White",
              "Cream",
              "Emerald Green",
              "Ruby Red",
              "Turquoise",
              "Charcoal",
              "Mahogany",
              "Soft Peach",
              "Light Lavender",
              "Sky Blue",
              "Mustard Yellow",
              "Coral",
              "Aqua",
              "Sunshine Yellow",
              "Soft Pink",
              "Light Mint",
              "Red",
              "Orange",
              "Sand",
              "Snow White",
              "Tan",
              "Deep Blue",
              "Light Pink",
              "Baby Blue",
              "Amethyst Purple",
              "Sapphire Blue",
              "Dark Hues",
              "Wine/Burgundy",
              "Forest Green",
              "Espresso",
              "Earthy Tones",
              "Natural Shades",
              "Jewel Tones",
              "Deep Hues",
            ],
            dimensions: [
              "2' x 3' (60 cm x 90 cm)",
              "2' x 6' (60 cm x 180 cm)",
              "2' x 8' (60 cm x 240 cm)",
              "3' x 5' (90 cm x 150 cm)",
              "3' x 10' (90 cm x 300 cm)",
              "4' x 4' (120 cm x 120 cm)",
              "4' x 6' (120 cm x 180 cm)",
              "5' x 7' (150 cm x 210 cm)",
              "6' x 9' (180 cm x 270 cm)",
              "7' x 10' (210 cm x 300 cm)",
              "8' x 10' (240 cm x 300 cm)",
              "9' x 12' (270 cm x 360 cm)",
              "10' x 14' (300 cm x 420 cm)",
              "12' x 18' (360 cm x 540 cm)",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Namda Embroidery Rugs",
          id: "namda",
          details: {
            material_type: ["Wool", "Wool-Cotton Blends"],
            production_process: ["Handcrafted"],
            design_pattern_types: ["Traditional Kashmiri Motifs"],
            dimensions: [
              "4' x 6' (120 cm x 180 cm)",
              "5' x 7' (150 cm x 210 cm)",
              "3' x 5' (90 cm x 150 cm)",
            ],
            product_certifications: [
              "Fair Trade Certification",
    "ISO 14001 (Environmental Management)",
    "Cradle to Cradle Certification",
    "Customs and Import Certifications","None"

            ],
            color_shades: [
              "Terracotta",
              "Olive Green",
              "Natural Shades",
              "Jewel Tones",
              "Deep Hues",
            ],
            finishing_techniques: [
              "Fringed Edges",
              "Bound Edges",
              "Double-Sided Finish",
            ],
            weight: ["Light", "Medium", "Heavy"],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Product Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },
    {
      name: "Furniture",
      id: "cat5",
      subcategories: [
        {
          name: "Walnut Wood Carving Furniture",
          id: "walnut",
          details: {
            material_type: [
              "Kashmiri Walnut Wood - Grade A",
              "Kashmiri Walnut Wood - Grade B",
              "Kashmiri Walnut Wood - Grade C",
            ],
            production_process: ["Hand-Carved", "Machine-Made"],
            design_carvings: [
              "Intricate Hand-Carving",
              "Relief Carving",
              "Inlay Work",
            ],
            scale_of_carving: [
              "High Relief Carving",
              "Low Relief Carving",
              "Flat Carving",
            ],
            design_pattern_types: [
              "Traditional Kashmiri Motifs",
              "Geometric Patterns",
              "Contemporary Designs",
            ],
            product_name_and_dimensions: [
              "King Size Bed: 6.5' x 6.5'",
              "Queen Size Bed: 5' x 6.5'",
              "Full Size Bed: 4.5' x 6.5'",
              "Twin Size Bed: 3' x 6.5'",
              "Nightstand: 2' x 1.5'",
              "Storage Bed (King): 6.5' x 6.5'",
              "Coffee Table: 4' x 2'",
              "Side Table: 2' x 2'",
              "Media Cabinet: 5' x 2'",
              "Display Cabinet: 6' x 3'",
              "Ottoman: 2' x 2'",
              "Sofa Table: 5' x 1.5'",
              "Dining Table: 6' x 3'",
              "Dining Set (Table + 4 Chairs): Table 5' x 3'",
              "Buffet Table: 6' x 1.5'",
              "Storage Bench: 4' x 1.5'",
              "Wine Rack: 3' x 1.5'",
              "Writing Desk: 5' x 2.5'",
              "Hallway Table: 4' x 1'",
              "Console Table: 5' x 1.5'",
              "End Table: 3' x 2'",
              "Pedestal Table: 3' x 3'",
              "Armchair: Width 2.5'",
              'Bar Stool: Height 30"',
            ],
            certifications: [
              "Forest Stewardship Council (FSC) Certification",
    "Fair Trade Certification",
    "ISO 14001 (Environmental Management)",
    "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            color_shades: ["Dark Walnut", "Light Walnut", "Medium Walnut"],
            finishings: ["Matte Finish", "Glossy Finish", "Semi-Gloss Finish"],
            stain: ["Antique Stain", "Cherry Stain"],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Crewel Upholstered Furniture",
          id: "crewel",
          details: {
            material_type: ["Crewel-embroidered fabric"],
            production_process: ["Hand embroidery techniques"],
            design_pattern_types: [
              "Floral Motifs",
              "Nature-Inspired Designs",
              "Geometric Patterns",
            ],
            finishing_techniques: [
              "Hand-stitched edges",
              "Lining and backing finishes",
            ],
            certifications: [
    //           "FSC Certification (if made from wood)",
    // "Fair Trade Certification",
    // "ISO 9001 (Quality Management)",

    "Global Organic Textile Standard (GOTS)",
    "OEKO-TEX® Standard 100",
    "Fair Trade Certification",
    "Cradle to Cradle Certification","Customs and Import Certifications","None"
  ],
            color_shades: ["Vibrant Wool Colors", "Earthy Tones"],
            product_name_and_dimensions: [
              "Crewel-Embroidered Sofa: 6' long",
              "Crewel-Embroidered Armchair: 3' wide",
              "Crewel Footstool: 2' x 1.5'",
              "Crewel-Embroidered Bench: 4' long",
              "Crewel Ottoman: 2' x 2'",
              "Crewel Table Runner: 6' long",
            ],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        }, //Wicker Furniture
        {
          name: "Wicker Furniture",
          id: "wicker",
          details: {
            material_type: ["Rattan", "Reed", "Bamboo"],
            production_process: [
              "Hand-weaving techniques",
              "Natural material treatment",
            ],
            design_pattern_types: ["Traditional Weaves", "Contemporary Styles"],
            finishing_techniques: ["Natural Sealing", "Protective Coatings"],
            certifications: ["Fair Trade Certification",
    "ISO 14001 (Environmental Management)",
    "FSC Certification (if using wood or natural materials)",],
            color_shades: [
              "Natural Brown",
              "Painted Finishes",
              "Whitewash",
              "Pastel Shades",
            ],
            product_name_and_dimensions: [
              "Lounge Chair: 3' high, 2.5' wide, 2' deep",
              "Coffee Table: 4' long, 2' wide, 1.5' high",
              "Storage Basket: 2' diameter, 1.5' high",
              "Side Table: 2.5' high, 2' diameter",
              "Dining Chair: 3' high, 2' wide, 1.5' deep",
              "Ottoman: 2' x 2' , 1.5' high",
              "Serving Tray: 2' x 1', 2\" high",
              "Bench: 5' long, 1.5' wide, 2' high",
              "Planter: 1.5' height, 2' diameter",
              "Bar Stool: 3' high, 1.5' wide, 1.5' deep",
            ],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Room Dividers",
          id: "roomDivider",
          details: {
            material_type: ["Wood", "Fabric", "Wicker"],
            production_process: ["Handcrafted joinery", "Assembly techniques"],
            design_pattern_types: [
              "Carved Designs",
              "Fabric Panels",
              "Geometric Shapes",
              "Floral Motifs",
            ],
            finishing_techniques: ["Staining", "Painting", "Natural Sealing"],
            certifications: [
              "Handcrafted Quality Certification",
              "Eco-Friendly Certification",
            ],
            color_shades: [
              "Natural Wood Tones",
              "Bold Fabric Colors",
              "Soft Pastels",
              "Dark Stains",
            ],
            product_name_and_dimensions: [
              "Wooden Carved Room Divider: 6' x 3'",
              "Fabric Room Divider (Crewel): 5' x 3'",
              "Portable Room Divider: 4' x 6'",
              "Wicker Room Divider: 5' x 3'",
              "Folding Room Divider: 6' x 2'",
              "Decorative Screen Divider: 5' x 5'",
            ],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },

    {
      name: "Ceiling Treatment",
      id: "cat6",
      subcategories: [
        {
          name: "Ceiling Treatment (Khatamband)",
          id: "ceiling",
          details: {
            material_type: [
              "Kashmiri Walnut Wood",
              "Deodar Cedar",
              "Fir Wood",
              "Pine Wood",
              "Local Softwoods",
            ],
            production_process: ["Handcrafted Techniques", "Joinery Methods"],
            design_pattern_types: [
              "Geometric Patterns - Kaat",
              "Floral Motifs - Gulzar",
              "Traditional Kashmiri Motifs - Dastakari",
              "Abstract Patterns - Nazar",
              "Inlaid Patterns - Kashida",
              "Border Designs - Chowk",
              "Three-Dimensional Effects - Udaak",
              "Regional Variations - Rangrez",
            ],
            finishing_techniques: ["Natural Finish", "Lacquer Finish"],
            product_certifications: [
              "Geographical Indication (GI) Certification",
    "Fair Trade Certification",
    "ISO 9001 (Quality Management)",
    "ISO 14001 (Environmental Management)",
    "Cradle to Cradle Certification","Customs and Import Certifications",

              "None",
            ],
            color_shades: ["Natural Wood Tones", "Stained Finishes"],
            embellishments: ["Papier-Mâché", "Carving"],
            product_name_and_dimensions: [
              "Khatamband Ceiling Panel: 4' x 4'",
              "Khatamband Decorative Strip: 3' long",
              "Khatamband Ceiling Tile: 2' x 2'",
              "Khatamband Cornice: 5' long",
              "Khatamband Center Medallion: 3' diameter",
              "Khatamband Wall Panel: 4' x 2'",
              "Khatamband Column Wrap: 8' height",
              "Khatamband Light Fixture Cover: 2' x 2'",
              "Khatamband Frame for Windows: 3' x 5'",
              "Khatamband Ceiling Beam Cover: 6' long",
              "Khatamband Decorative Archway: 5' x 3'",
              "Khatamband Ceiling Medallion: 2.5' diameter",
            ],
            installation_services: [
              "Site Assessment ",
              "Preparation ",
              "Cutting & Fitting ",
              "Attachment ",
              "Finishing Touches ",
              "Final Inspection ",
            ],
            service_options: [
              "Residential Installation",
              "Commercial Installation",
              "Custom Design Services ",
            ],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            Passport_Status_for_Vendor_Staff_Required_for_international_projects:
              ["Clean Passport", "Passport Under Process", "Not Ready"],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },

    {
      name: "Window Treatment",
      id: "cat7",
      subcategories: [
        {
          name: "Pinjrakari - Kashmir Lattice Work",
          id: "pinjrakari",
          details: {
            material_type: [
              "Silver Fir Wood",
              "Blue Pine Wood",
              "Walnut Wood",
              "Cedar (Deodar) Wood",
            ],

            production_process: [
              "Handcrafted Techniques",
              "Traditional Joinery",
            ],
            design_pattern_types: [
              "Crossing Patterns (Intersecting lines)",
              "Checkerboard (Alternating grid pattern)",
            ],
            design_shapes: ["Triangle", "Square", "Hexagon"],
            design_carvings: [
              "Ornamental Carvings",
              "Abstract Geometric Carvings",
            ],
            finishing_techniques: [
              "Natural Finish ",
              "Lacquer Finish ",
              "Stained Finish ",
            ],
            color_shades: ["Natural Wood Tones ", "Dark Stains "],
            embellishments: ["Inlaid Designs "],
            dimensions: [
              "Window Panel (120 cm x 180 cm)",
              "Room Divider (180 cm x 120 cm)",
              "Door Panel (210 cm x 90 cm)",
              "Ceiling Panel (60 cm x 60 cm)",
              "Wall Panel (120 cm x 60 cm)",
              "Balcony Railing (90 cm x 150 cm)",
              "Staircase Railing (120 cm x 90 cm)",
              "Decorative Screen (150 cm x 90 cm)",
              "Ventilation Screen (60 cm x 60 cm)",
              "Archway Panel (150 cm x 120 cm)",
              "Sliding Door Panel (213 cm x 106 cm)",
              "Room Divider - Hinges (180 cm x 150 cm)",
              "Decorative Wall Insert (90 cm x 90 cm)",
              "Cabinet Doors (180 cm x 75 cm per panel)",
              "Tabletop Screen (60 cm x 60 cm)",
              "Fireplace Screen (90 cm x 120 cm)",
              "Window Shutters (120 cm x 60 cm / shutter)",
              "Headboard Panel (180 cm x 90 cm)",
              "Outdoor Privacy Screen (180 cm x 180 cm)",
              "Staircase Baluster (90 cm x 30 cm / panel)",
            ],
            product_certifications: [
              "Geographical Indication (GI) Certification",
              "Fair Trade Certification",
              "ISO 14001 (Environmental Management)",
              "Cradle to Cradle Certification","Customs and Import Certifications",
              "None",
            ],
            installation_services: [
              "Site Assessment ",
              "Preparation ",
              "Cutting & Fitting ",
              "Attachment ",
              "Finishing Touches ",
              "Final Inspection ",
            ],
            service_options: [
              "Residential Installation",
              "Commercial Installation",
              "Custom Design Services ",
            ],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
              "Interior Consultation",
            ],
            Passport_Status_for_Vendor_Staff_Required_for_international_projects:
              ["Clean Passport", "Passport Under Process", "Not Ready"],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Crewel - Embroidery Curtains",
          id: "crewel_embroi",
          details: {
            material_type: [
              "Organic Cotton",
              "Kashmir Silk",
              "Velvet",
              "Organic Linen",
            ],
            embroidery_stitch_techniques: [
              "Chain Stitch",
              "Satin Stitch",
              "Blanket Stitch",
              "Stem Stitch",
              "Chain Stitch (Split Variation)",
              "Herringbone Stitch",
              "Couching Stitch",
              "Flat Stitch",
              "Raised Chain Stitch",
              "French Knots",
            ],
            design_pattern_types: [
              "Paisley Motifs",
              "Birds and Animals",
              "Scenic Landscape ",
              "Floral Designs ",
              "Geometric Patterns",
              "Abstract Themes ",
              "Traditional Motifs ",
              "Seasonal Themes",
            ],
            overlocked_edges: [
              "Standard Overlock",
              "Rolled Hem Overlock",
              "Flatlock Overlock",
              "Decorative Overlock",
              "Blind Hem Overlock",
              "None",
            ],
            weighted_hem: [
              "Standard Weighted Hem",
              "Continuous Weighted Hem",
              "Corner-Only Weights",
              "Chain Weighted Hem",
              "Magnetic Weighted Hem",
              "None",
            ],
            curtain_lining: [
              "Standard Lining",
              "Blackout Lining",
              "Thermal Lining",
              "Interlining",
              "Sheer or Voile Lining",
              "Soundproof Lining",
              "Waterproof Lining",
              "None",
            ],
            certifications: [
              "Global Organic Textile Standard (GOTS)",
              "OEKO-TEX® Standard 100",
              "Fair Trade Certification",
              "ISO 9001 (Quality Management)",
              "Cradle to Cradle Certification","Customs and Import Certifications",
              "None",
            ],
            color_shades: [
              "Neutrals",
              "Blues",
              "Greens",
              "Yellows and Golds",
              "Browns",
              "Reds and Burgundies",
              "Pastels",
            ],
            embellishments: [
              "Trims and Tassels",
              "Beading",
              "Pom-Pom Trim",
              "Fringe",
              "Grommets and Decorative Rings",
              "Appliqué Patterns",
              "Crystal or Gem Accents",
              "Metallic Threading or Accents",
              "Tiebacks with Embellished Details",
            ],
            product_name_and_dimensions: [
              "Curtain Panel: 137 cm x 213 cm",
              "Extra Long Panel: 137 cm x 274 cm",
              "Floor-to-Ceiling Panel: 137 cm x 244 cm",
              "Café Curtain Panel: 76 cm x 91 cm",
              "Valance: 46 cm x 183 cm",
              "Tie-Up Shade: 107 cm x 160 cm",
              "Short Panel: 61 cm x 61 cm",
              "Bay Curtain: 91 cm x 152 cm (per panel)",
              "Sliding Door Panel: 183 cm x 203 cm",
              "Window Scarf: 51 cm x 366 cm",
              "Standard Shower Curtain: 183 cm x 183 cm",
              "Long Shower Curtain: 183 cm x 213 cm",
              "Wide Shower Curtain: 274 cm x 183 cm",
              "Corner Shower: 183 cm x 183 cm (per side)",
              "Curved Shower: 183 cm x 183 cm",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },
    {
      name: "Recycled Craft",
      id: "cat8",
      subcategories: [
        {
          name: "Papier-Mache",
          id: "papier-machie",
          details: {
            main_material_type: [
              "Waste Paper and Cotton Rags",
              "Plant Fibers (such as Hemp)",
              "Rice Flour Paste or Starch Paste",
            ],

            embedded_materials: ["Wood", "Fabric", "Metal"],
            quality: [
              "Traditional High-Quality Craftsmanship",
              "High-Gloss Lacquered Quality",
              "Molded Paper Mâché with Smooth Texture",
            ],
            production_process: [
              "Traditional Paper Mâché Method",
              "Molded Paper Mâché Process",
              "Paper Mâché with Lacquer Finish",
            ],
            design_pattern_types: [
              "Floral Patterns",
              "Geometric Designs",
              "Traditional Kashmiri Motifs",
              "Abstract Designs",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Hand-Painted",
              "Varnished",
              "Gold/Silver Leaf Application",
              "Textured Finishes",
            ],
            product_type_size: [
              'Wall Art Decorative Panels  24" x 36"',
              'Framed Art Pieces  12" x 16"',
              "Murals: Custom Sizes Available",
              'Serving Bowls 12"',
              'Decorative Plates 10"',
              'Trinket Dishes 6"',
              'Jewelry Boxes 8" x 6" x 4"',
              'Keepsake Boxes 10" x 8" x 5"',
              'Storage Chests 18" x 12" x 10"',
              'Animal Figures cats 6-8"',
              'Animal Figures elephants 6-8"',
              'Animal Figures ducks 6-8"',
              'Animal Figures camels 6-8"',
              'Table Lamps  14-16"',
              'Hanging Lanterns 12"',
              'Floor Lamps 50-60"',
              'Table Tops  30" x 30"',
              'Decorative Stools 12" x 12" x 18"',
              'Samawar: 12"',
              'Picture Frames 5" x 7"',
              'Candle Holders 6"',
              'Coasters 4"',
              'Cell Phone Stand 6" x 4"',
              'Wrist Watch Stand 8" x 4"',
              'Tissue Box Covers: 10" x 5" x 5"',
              'Tarot Card Box 5" x 4" x 2"',
              'Chessboards 18" x 18"',
              'Playing Pieces 3"',
              'Decorative Wall Clocks 12"',
              'Small Planters 8"',
              'Large Pots 14"',
              'Serving Trays 18" x 12"',
              'Decorative Trays 16" x 16"',
              'Santa\'s Sleigh Ornament 5" - 6"',
              'Snowman Decoration Ornament 3" - 5"',
              'Reindeer with Sleigh Ornament 5" - 7"',
              'Christmas Tree Miniature Ornament 4" - 6"',
              'Christmas Bell Ornament 5" - 6"',
              'Gift Box Ornament 3" - 4"',
              'Snowflake Bauble Ornament 3" - 4"',
              'Angels of Christmas Ornament 5" - 6"',
              'Candy Cane Ornament 3" - 4"',
              'Pine Cone Ornament 3" - 5"',
            ],
            certifications: [
              "Global Organic Textile Standard (GOTS)",
    "Fair Trade Certification",
    "Cradle to Cradle Certification",
    "Customs and Import Certifications","None"
            ],
            color_shades: [
              "Classic Neutrals",

              "Bright and Bold Colors",
              "Pastel Shades",
            ],
            embellishments: ["Mirror Work", "Metallic Thread"],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Gabba",
          id: "gabba",
          details: {
            material_type: [
              "Recycled Wool",
              "Recycled Cotton",
              "Recycled Silk",
              "Recycled Fabric Threads",
            ],
            quality: [
              "Handwoven Gabba Craft",
              "Premium Quality Finish",
              "Eco-Friendly Materials",
              "Recycled Fabric Integration",
            ],
            production_process: [
              "Traditional Techniques with Recycled Fabric",

              "Machine-Assisted Weaving with Eco-Friendly Threads",
            ],
            design_pattern_types: [
              "Floral Motifs",
              "Geometric Patterns",
              "Paisley Designs",
              "Traditional Kashmiri Themes",
              "Abstract Patterns",
              "Custom Designs",
            ],
            finishing_techniques: [
              "Handwoven Edges",
              "Woolen Pile Finish",
              "Distressed or Antique Finish",
            ],
            product_type_size: [
              "Floor Carpets and Rugs: 6' x 9', 4' x 6', 3' x 5'",
              'Wall Hangings Framed: 24" x 36", 12" x 16"',
              'Table and Throw Covers: 48" x 72", 60" x 60"',
              'Bolster Cushions and Pillows: 16" x 16", 12" x 24"',
              "Door Mats: 2' x 3'",
              "Throw Rugs: 3' x 5'",
            ],
            certifications:[
              "Fair Trade Certification",
              "ISO 14001 (Environmental Management)",
              "Cradle to Cradle Certification",
              "Customs and Import Certifications","None"
            ],
            color_shades: [
              "Classic Neutrals: White, Beige, Gray",
              "Bright and Bold Colors: Red, Blue, Green, Yellow",
              "Earthy Tones: Terracotta, Brown, Ochre",
              "Pastel Shades: Blush Pink, Mint Green, Light Blue",
            ],
            packaging: [
              "Custom-fit Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Carpet Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },
    {
      name: "Sports Craft",
      id: "cat9",
      subcategories: [
        {
          name: "Circket-Bat",
          id: "circketBag",
          details: {
            material_type: [" Willow Wood", "Kashmir Willow"],
            production_process: [" Handcrafted", "Machine-made"],
            design_pattern_types: [" Traditional Bat Design", "Custom Design"],
            dimensions: [
              'Men’s: Length: 33", Width: 4.5"',
              'Women’s: Length: 32" , Width: 4.25"',
              'Youth : Length: 30", Width: 4"',
            ],
            certifications: [
              "ISO 9001 (Quality Management)",
              "Fair Trade Certification",
              "FSC Certification (Forest Stewardship Council)",
              "Product Safety Certifications",
              "Cradle to Cradle Certification","Customs and Import Certifications",
              "None",
            ],
            color_shades: ["Natural Wood Finish", "Custom Colors"],
            finishing_techniques: [
              "Hand-polished",
              "Custom Varnish Finish",
              "Sanding",
            ],
            weight: [
              "Light (Suitable for beginners or young players)",
              "Medium (Ideal for general use)",
              "Heavy (Preferred by professional players for added power)",
            ],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Chess-Board",
          id: "chess-board",
          details: {
            material_type: ["Wood (e.g., Walnut, Maple)"],
            production_process: [" Handcrafted", "Machine-made"],
            design_pattern_types: [
              "Traditional Chess Patterns (Classic Squares)",
              "Custom Design",
            ],
            dimensions: [
              'Standard Chess Board: Length/Width: 16" x 16"',
              'Tournament Size Chess Board: Length/Width: 20" x 20"',
              'Small Travel Chess Board: Length/Width: 12" x 12"',
            ],
            certifications: [
              "ISO 9001 (Quality Management)",
    "Fair Trade Certification",
    "FSC Certification (Forest Stewardship Council)",
    "OEKO-TEX® Standard 100",
    "Cradle to Cradle Certification","Customs and Import Certifications",
              "None",
            ],
            color_shades: ["Earthy Wood Shades", "Walnut", "Oak", "Maple"],
            finishing_techniques: [
              " Hand-polished for smooth surface and longevity",
              "Wood-stained or lacquered for protection",
            ],
            weight: [
              " Light (Portable and ideal for travel)",
              "Medium (Standard size for playing)",
              "Heavy (Luxury or tournament quality)",
            ],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },
    {
      name: "Hide Craft",
      id: "cat10",
      subcategories: [
        {
          name: "Leather",
          id: "leather",
          details: {
            material_type: ["Full-grain Leather", "Top-grain Leather", "Suede"],
            production_process: ["Handcrafted", "Machine-made"],
            design_pattern_types: [
              "Traditional Patterns (e.g., embossing, tooling)",
              "Modern Patterns (e.g., minimalistic designs, laser engraving)",
              "Custom Design",
            ],
            product_line: [
              " Leather Accessories: Wallets, Belts, Bags, Keychains",
              "Leather Garments: Jackets, Gloves, Shoes",
              "Leather Upholstery: Furniture, Car Seats",
              "Leather Crafting Kits: Tools, Materials",
            ],
            color_shades: [
              "Earthy Tones: Brown, Tan, Beige",
              "Dark Shades: Black, Charcoal, Deep Burgundy",
            ],
            finishing_techniques: [
              "Waxed for a smooth and shiny surface",
              "Stained or dyed to enhance color depth and richness",
              "Natural Leather Finish for a rustic look",
            ],
            certifications:[
              "Leather Working Group (LWG) Certification",
              "Fair Trade Certification",
              "ISO 9001 (Quality Management)",
              "OEKO-TEX® Standard 100",
              "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            weight: [
              "Light (Soft leather, ideal for garments)",
              "Medium (Standard leather for accessories)",
              "Heavy (Durable leather for bags, belts, etc.)",
            ],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Fur & Astrakhan",
          id: "astrakhan",
          details: {
            material_type: [
              "Natural Fur (e.g., Mink, Fox)",
              "Faux Fur",
              "Astrakhan (Karakul Lamb Fur)",
            ],
            production_process: ["Handcrafted", "Machine-made"],
            design_pattern_types: [
              "Classic Fur Patterns (e.g., solid color, natural fur textures)",
            ],
            product_line: [
              " Fur Garments: Coats, Jackets, Gloves, Hats",
              "Fur Accessories: Scarves, Shawls, Stoles, Capes",
              "Fur Trim: For custom garments and home décor",
              "Astrakhan Products: Outerwear, Blankets, Cushions",
            ],
            color_shades: [
              "Natural Fur Colors: Brown, White, Black, Grey",
              "Dyed Fur: Burgundy, Blue, Purple",
            ],
            finishing_techniques: [
              "Fur Brushed for smoothness and volume",
              "Curled or Crimped for added texture",
              "Dyed for vibrant and customized colors",
            ],
            certifications:[
              "CITES Certification (for products involving endangered species)",
              "Fair Trade Certification",
              "ISO 14001 (Environmental Management)",
              "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            weight: [
              " Light (Ideal for garments like fur coats or scarves)",
              "Medium (Standard fur for fashion accessories)",
              "Heavy (Luxury fur for outerwear and blankets)",
            ],
            packaging: [
              "Custom-fit Crates/Boxes",
              "Eco-friendly Packaging Materials ",
            ],
            vendor_able_to_handle_product_labeling: [
              "Dimensions Label",
              "Weight Label",
              "Wood Type Identification Label",
              "Handling Instructions Label",
              "QR Code or Barcode",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },
    {
      name: "Culinary Craft",
      id: "cat11",
      subcategories: [
        {
          name: "Kashmiri Wazwan Canned Food",
          id: "wazwan",
          details: {
            quality: [
              "Free-range",
              "farm-raised",
              "Halal-certified",
              "No Artificial Preservatives",
              "Handcrafted Preparation",
              "Authentic Kashmiri Taste",
              "Non-GMO",
            ],
            meat_ingredient_types: [
              "Lamb - Cuts: Shoulder, Ribs, Leg, & Shank",
              "Mutton: Cuts: Bone-in like Neck or Ribs",
              "Chicken - Cuts Drumsticks, Breast, Wings.",
              "Beef: Cuts: Brisket, Stew and Shank",
              "Goat: Cuts: Stew, Shoulder and Leg",
              "Fish : Trout and Carp",
            ],
            vegetable_ingredient_types: [
              "Potatoes: Red or Yellow, cut into Chunks",
              "Mustard Greens: Freshly locally grown.",
              "Spinach: Freshly locally grown",
              "Tomatoes: Fresh or pureed",
              "Lotus Stem: Crisp sweet, earthy flavor",
            ],
            spice_ingredient_types: [
              "Saffron: Pure saffron threads.",
              "Red Chili Powder: Milder, aromatic.",
              "Cardamom (Green): Ground & Whole",
              "Cinnamon: Ground or whole sticks.",
              "Cloves: Whole or ground.",
            ],
            base_ingredients: [
              "Yogurt: Full-fat, fresh, strained",
              "Ghee (Clarified Butter): Pure cow’s.",
              "Fresh Cream: High-quality cream.",
              "Almonds: Whole or sliced.",
            ],
            herb_ingredient_types: [
              "Mint: Fresh, aromatic leaves",
              "Coriander: Fresh leaves or ground powder.",
              "Fenugreek: Fresh leaves or dried seeds.",
              "Cockcomb flower petals : Colouring agent",
            ],
            product_range_and_sizes: [
              "Rogan Josh Pack Size: 300g, 500g, 1kg",
              "Dum Aloo Pack Size: 300g, 500g, 1kg",
              "Yakhni Pack Size: 300g, 500g, 1kg",
              "Goshtaba Pack Size: 300g, 500g, 1kg",
              "Korma Pack Size: 300g, 500g, 1kg",
              "Shami Kebab Pack Size: 200g, 500g",
              "Chicken Korma Pack Size: 300g, 500g, 1kg",
              "Rista Pack Size: 300g, 500g, 1kg",
              "Harissa Pack Size: 500g, 1kg",
              "Tabak Maaz Pack Size: 300g, 500g",
              "Masala Tikki Pack Size: 200g, 500g",

              "Wazwan Rice Pack Size: 500g, 1kg",
              "Chicken Korma Pack Size: 300g, 500g, 1kg",
              "Fish (Trout) Pack Size: 300g, 500g, 1kg",
              "Pulao Pack Size: 500g, 1kg",
              "Nadir Monje Pack Size: 200g, 400g",
              "Saag (Greens) Pack Size: 300g, 500g",
              "Aab Gosh Pack Size: 300g, 500g, 1kg",
              "Daniwal Korma Pack Size: 300g, 500g, 1kg",
              "Waze Maaz Palak Pack Size: 300g, 500g",
              "Waze Maaz Hak Pack Size: 300g, 500g",
              "Waze Header Pack Size: 500g, 1kg",
              "Charwan Pack Size: 300g, 500g, 1kg",
              "Waze Kokur Pack Size: 300g, 500g, 1kg",
              "Daeni Fol Pack Size: 300g, 500g",
              "Methi Pack Size: 300g, 500g",
              "Wazwan Combo Pack",
            ],
            certifications:[
              "FSSAI Certification",
    "ISO 22000 (Food Safety Management System)",
    "Organic Certification (if applicable)",
    
    "Halal Certification",
     "Fair Trade Certification","Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            packaging: ["Canned", "Glass Jars", "Flexible Pouches"],
            vendor_able_to_handle_product_labeling: [
              "Product Name",
              "Description",
              "Weight/Volume",
              "Ingredients",
              "Preparation Instructions",
              "Storage Instructions",
              "Brand Name & Logo",
              "Origin (e.g., 'Authentic Kashmiri Cuisine')",
              "Certification Logos (Halal, Eco-friendly, etc.)",
              "Barcode",
              "Nutritional Information",
              "Health Benefits",
              "FDA Compliance",
              "Date Labeling: Best By or Use By",
              "Sanitation Inspection Reports",
              "Clear Allergen Labeling",
              "Product Testing",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
        {
          name: "Kahwa & Pink Tea",
          id: "kahwa",
          details: {
            quality: [
              "Premium Quality",
              "Organic",
              "Handcrafted",
              "No Artificial Additives",
            ],
            ingredients: ["Green Tea ", "Spices", "Saffron", "Nuts"],
            product_range_and_sizes: [
              "Kehwa Ready-to-Drink: Pack Size: 250ml, 500ml, 1L",
              "Kehwa Tea Bags: Pack Size: 10 Bags, 20 Bags",
              "Kehwa Concentrate: Pack Size: 200ml, 500ml",
              "Kehwa Mix (Instant Powder): Pack Size: 100g, 200g",
              "Pink Tea (Loose Leaf): Pack Size: 100g, 250g, 500g",
              "Pink Tea (Tea Bags): Pack Size: 10 Bags, 20 Bags",
              "Pink Tea (Ready-to-Drink): Pack Size: 250ml, 500ml",
              "Pink Tea Concentrate Pack Size: 200ml, 500ml",
            ],
            certifications:[ "FSSAI Certification",
              "Organic Certification (if applicable)",
              "Fair Trade Certification",
              "ISO 9001 (Quality Management)",
              "Cradle to Cradle Certification","Customs and Import Certifications","None"
            ],
            packaging: [
              "Canned",
              "Glass Bottles",
              "Tea Bags",
              "Pouches",
              "Paper Machie Boxes",
            ],
            vendor_able_to_handle_product_labeling: [
              "Product Name",
              "Ingredients",
              "Storage Instructions",
              "Preparation Instructions",
              "Certification Logos",
              "Nutritional Information",
              "Barcode & Contact",

              "Storage Information",
              "Shelf Life Information",
              "FDA Food Labeling Compliances",
              "Health Benefits",
            ],
            logistics: [
              "Local Delivery (via local courier services)",
              "International Shipping (via DHL/FedEx)",
            ],
            vendor_able_to_handle_following_services_on_DKC_platform: [
              "Measurement Guidance",
              "Calculation Tools",
              "Customer Consultations",
              "Custom Design Services",
            ],
            do_vendor_have_real_time_inventory_management_api_and_integration: [
              "Have Inventory System In Real-Time",
              "Do You Have Existing Inventory Integrations",
              "Do You Have An IT Team",
              "Experience in Integrating Inventory APIs",
              "We Are Familiar With API Security",
              "Ready To Begin API Integration Soon",
              "Prefer Platform To Handle APIs",
              "We Prefer B2B Connect To Handle My API's",
            ],
          },
        },
      ],
    },
    {
      name: "Embriodery",
      id: "cat12",
      subcategories: [
        { name: "Suzani/Sozni - Fine Needlework", id: "sozni",details:{
          thread_materials: [
            "Fine Wool Threads (from Pashmina goats)",
            "Pure Cotton Threads"
          ],
          thread_tension: [
            "Extremely tight, consistent tension", 
    "No visible loops on front or back", 
    "Threads lie completely flat against fabric", 
    "Each stitch must be uniform in tightness"
          ],
          thread_palette: [
            "Deep Red", 
"Royal Blue", 
"Forest Green", 
"Pure White", 
"Rich Browns", 
"Warm Ochres", 
"Subtle Beiges"

          ],
          fabric_choices: [
            "Pure Pashmina", 
"Fine Wool", 
"Raffal", 
"Cotton", 
"Light Muslin"

          ],
          construction_techniques: [
            "Single-thread technique", 
"Very fine stitches", 
"Dense parallel lines", 
"Layered color work", 
"Surface satin construction", 
"Even stitch spacing"

          ],
          level_of_craftsmanship: [
            "High", 
            "Moderate", 
            "Simple"
          ],
          certifications:[ "Geographical Indication (GI) Certification",
            "Fair Trade Certification",
            "ISO 9001 (Quality Management)","Cradle to Cradle Certification","Customs and Import Certifications","None"]
          
        


         } },

        { name: "Zardozi  -- Metal Thread Work", id: "zardozi",details:{
          thread_materials: [
            "Gold-plated silver threads (Kalabattu)","Silver-coated copper threads (modern alternative)"
          ],
          thread_tension: [
            "Moderate to firm tension for metal threads", 
"Tight enough to secure metal components", 
"Not so tight that it bends metal elements", 
"Supporting threads need firm tension"

          ],
          thread_palette: [
            "Gold threads", 
"Silver threads", 
"Copper tones", 
"Deep Maroon", 
"Royal Purple", 
"Emerald Green"

          ],
          fabric_choices: [
           "Velvet", 
"Heavy Silk", 
"Satin", 
"Brocade", 
"Dense Cotton"

          ],
          construction_techniques: [
            "Metal thread couching",
"Underlay preparation",
"Framework stitching",
"Raised work technique",
"Metal component anchoring",
"Padding technique"
          ],
          level_of_difficulty: [
            "High", 
            "Moderate", 
            "Easy"
          ],
          certifications:[
            "Fair Trade Certification",
    "ISO 14001 (Environmental Management)",
    "Cradle to Cradle Certification","Customs and Import Certifications","None"
          ]
         } },
        { name: "Zalakdozi - Crewel Work", id: "zalakdozi",details:{
          thread_materials: [
            "Cotton Threads"
,"Silk Threads (occasionally)"
          ],
          thread_tension: [
           "Firm tension for raised effect", 
"Strong enough to hold wool threads", 
"Consistent tension for texture", 
"Slightly looser for dimensional effects"

          ],
          thread_palette: [
            "Burgundy", 
"Forest Green", 
"Navy Blue", 
"Terracotta", 
"Rust", 
"Olive"

          ],
          fabric_choices: [
            "Cotton Duck",
"Heavy Linen",
"Twill",
"Canvas",
"Thick Cotton"

          ],
          construction_techniques: [
            "Long-short technique",
"Pattern filling",
"Directional stitching",
"Texture building",
"Relief work creation",
"Surface coverage"

          ],
          level_of_difficulty: [
            "High", 
            "Moderate", 
            "Easy"
          ],
         
        } },
        { name: "Ari/Aari - Hook Work", id: "aari",details:{
          thread_materials: ["Silk Threads",
"Cotton Threads"],
thread_tension: ["Firm, steady tension", 
"Consistent chain formation", 
"Strong enough to secure embellishments", 
"Even tension across curved lines"
],
thread_palette: ["Deep Jewel Tones", 
"Rich Metallics", 
"Gold", 
"Silver", 
"Pearl White"
],
fabric_choices: ["Silk",
"Georgette",
"Crepe",
"Velvet",
"Fine Cotton",
"Chiffon",
"Net Fabrics",
"Tulle"
],
construction_techniques: ["Hook work technique",
"Frame-mounted construction",
"Chain stitch formation",
"Bead attachment",
"Sequin work",
"Surface embellishment"
],
level_of_difficulty: ["High","Moderate", "Easy"],
certifications:[
  "Fair Trade Certification",
  "OEKO-TEX® Standard 100",
  "Cradle to Cradle Certification","Customs and Import Certifications","None"

]
        } },
        { name: "Dorukh - Double-sided Work", id: "dorukh",details:{
          thread_materials: [
            "Fine Cotton Threads"
,"Fine Wool Threads (pashmina quality)"
          ],
          thread_tension: [
            "Perfect tension balance on both sides", 
"Identical tightness front and back", 
"No variation in stitch tension allowed", 
"Extremely controlled tension for reversible effect",

            
          ],
          thread_palette: [
            "Pure White", 
"Natural Cream", 
"Ivory", 
"Pale Pastels", 
"Light Earth Tones", 
"Soft Greys"

          ],
          fabric_choices: [
            "Fine Muslin",
"Light Cotton",
"Fine Pashmina",
"Lightweight Even-weave Fabrics"

          ],
          construction_techniques: [
            "Double-sided construction",
"No-knot technique",
"Clean reverse method",
"Identical stitch formation",
"Mirror-image working",
"Hidden thread endings"

          ],
          level_of_difficulty: [
            "High", 
            "Moderate", 
            "Easy"
          ],
          
        } },
        { name: "Kashidakari - Surface Embroidery", id: "kashidakari",details:{
          thread_materials: [
            "Cotton Threads",
"Silk Threads",
"Pashmina Threads"
          ],
          thread_tension: [
            "Medium to firm tension", 
"Even tension across pattern areas", 
"Consistent pressure for chain stitches", 
"Varied tension for different stitch types"

          ],
          thread_palette: [
           "Red", 
"Blue", 
"Green", 
"Yellow", 
"Saffron", 
"Kashmir Blue", 
"Valley Green"


          ],
          fabric_choices: [
           "Woolen Base",
"Cotton Canvas",
"Raffal",
"Pashmina",
"Medium-weight Cotton"

          ],
          construction_techniques: [
            "Chain stitch construction",
"Pattern building",
"Surface coverage",
"Color blending",
"Design framework",
"Motif development"

          ],
          level_of_difficulty: [
            "High", 
            "Moderate", 
            "Easy"
          ],
        } },
        { name: "Jaaldar - Net Work", id: "jaaldar",details:{
          thread_materials: [
            "Silk Threads"
          ],
          thread_tension: [
            "Very precise, even tension throughout", 
"Consistent pull to create uniform holes", 
"Neither too tight (distorts fabric) nor too loose (holes collapse)", 
"Balance needed between adjacent pulled areas"

          ],
          thread_palette: [
           "White", 
"Cream", 
"Ecru", 
"Pale Blue", 
"Light Rose", 
"Soft Green"

          ],
          fabric_choices: [
           "Fine Cotton",
"Even-weave Fabrics",
"Light Muslin",
"Pure Cotton with Regular Weave"

          ],
          construction_techniques: [
            "Thread pulling technique",
"Grid formation",
"Systematic hole creation",
"Even tension network",
"Geometric framework building",
"Regular interval spacing"

          ],
          level_of_difficulty: [
            "High", 
            "Moderate", 
            "Easy"
          ],
        } },
        { name: "Papier-Machie Inspired Embriodery", id: "paperMachieInspired",details:{
          thread_materials: [
            "Silk Threads"
,"Cotton Threads"
          ],
          thread_tension: [
           "Varied tension for layered effects", 
"Tighter for outline work", 
"Medium tension for fill areas", 
"Careful control for shading effects"

          ],
          thread_palette: [
            "Sapphire Blue", 
"Ruby Red", 
"Emerald Green", 
"Gold", 
"Silver", 
"Persian Blue"

          ],
          fabric_choices: [
            "Velvet",
"Fine Silk",
"Pashmina",
"Medium-weight Cotton",
"Satin"

          ],
          construction_techniques: [
           "Layer building technique",
"Color gradation work",
"Motif outlining",
"Pattern filling",
"Shading technique",
"Dimensional effect creation"

          ],
          level_of_difficulty: [
            "High", 
            "Moderate", 
            "Easy"
          ],
         } },
      ],
    },
  ];

  const initialSelectedValues = () => {
    const keys = categories
      .flatMap((category) => category.subcategories)
      .flatMap((subcategory) => Object.keys(subcategory.details || {}));

    return keys.reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});
  };

  // Initialize state with dynamic values
  const [selectedValues, setSelectedValues] = useState(initialSelectedValues);

  // State management
  const toggleCategory = (categoryId) => {
    setSelectedSubcategories([]);
    setSubcategoryDetails(null);
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const selectAllCategories = () => {
    setSelectedCategories(categories.map((category) => category.id));
  };

  const clearAllCategories = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setSelectedValues(initialSelectedValues());
  };

  const toggleSubcategory = (subcategoryId) => {
    setSelectedSubcategories((prev) => {
      if (prev.includes(subcategoryId)) {
        return prev.filter((id) => id !== subcategoryId);
      } else {
        setSelectedValues(initialSelectedValues());
        return [...prev, subcategoryId];
      }
    });
    handleSubcategorySelection(subcategoryId);
  };

  const handleSubcategorySelection = (subcategoryId) => {
    const subcategoryDetails = categories
      .flatMap((category) => category.subcategories)
      .find((subcat) => subcat.id === subcategoryId)?.details;

    if (subcategoryDetails) {
      const updatedSelectedValues = Object.keys(subcategoryDetails).reduce(
        (acc, key) => {
          acc[key] = [];
          return acc;
        },
        {}
      );

      setSelectedValues(updatedSelectedValues);
    } else {
      setSelectedValues(initialSelectedValues());
    }
  };

  const toggleCategoryExpansion = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Render subcategories
  const renderSubcategories = () => {
    return selectedCategories.map((categoryId) => {
      const category = categories.find((cat) => cat.id === categoryId);
      if (!category) return null;

      return (
        <>
          <Card key={category.id} sx={{ marginBottom: 2 }} className="w-100">
            <CardContent>
              <Grid container alignItems="center">
                <Grid item xs={5}>
                  <Typography variant="h6">
                    {category.name}
                    <span
                      style={{
                        marginLeft: "15px",
                        color: "#ff4208",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleCategoryExpansion(category.id)}
                    >
                      {expandedCategories[category.id] ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={7}
                  container
                  justifyContent="flex-end"
                  spacing={1}
                >
                  <Grid item>
                    <Button
                      onClick={() => selectAllSubcategories(category.id)}
                      variant="outlined"
                    >
                      Select All
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => clearAllSubcategories(category.id)}
                      variant="outlined"
                    >
                      Clear All
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              {expandedCategories[category.id] && (
                <Grid container spacing={1} sx={{ marginTop: 2 }}>
                  {category.subcategories.map((subcat) => (
                    <Grid item xs={12} sm={6} md={4} key={subcat.id}>
                      <Card sx={{ pl: 2, borderRadius: 2, boxShadow: 1 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedSubcategories.includes(
                                subcat.id
                              )}
                              onChange={() => toggleSubcategory(subcat.id)}
                              name={subcat.name}
                              sx={{
                                "&.Mui-checked": {
                                  color: "#f44336", // Change the color here to any color you want
                                },
                              }}
                            />
                          }
                          label={subcat.name}
                          style={{ color: "black" }}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </CardContent>
          </Card>
        </>
      );
    });
  };

  const selectAllSubcategories = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (!category) return;

    const allSubcategoryIds = category.subcategories.map((subcat) => subcat.id);
    setSelectedSubcategories((prev) => {
      const newSubcategories = [...new Set([...prev, ...allSubcategoryIds])];
      return newSubcategories;
    });
  };

  const clearAllSubcategories = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (!category) return;

    const allSubcategoryIds = category.subcategories.map((subcat) => subcat.id);
    setSelectedSubcategories((prev) => {
      const newSubcategories = prev.filter(
        (subcatId) => !allSubcategoryIds.includes(subcatId)
      );
      return newSubcategories;
    });
  };

  const handleSelection = (sectionKey, value) => {
    setSelectedValues((prevState) => {
      const currentSelection = prevState[sectionKey];
      const updatedSelection = currentSelection.includes(value)
        ? currentSelection.filter((item) => item !== value)
        : [...currentSelection, value];

      return {
        ...prevState,
        [sectionKey]: updatedSelection,
      };
    });
  };

  const handleAddMoreCrafts = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Render details for the selected subcategory
  const renderDetails = () => {
    if (selectedSubcategories.length === 0) {
      return (
        <Card sx={{ marginTop: 3, p: 3 }}>
          <Typography variant="h5" gutterBottom>
            No subcategory selected yet
          </Typography>
        </Card>
      );
    }

    const selectedSubcategoryId = selectedSubcategories[0];
    const subcategory = categories
      .flatMap((category) => category.subcategories)
      .find((subcat) => subcat.id === selectedSubcategoryId);

    if (!subcategory || !subcategory.details) {
      return (
        <Card sx={{ marginTop: 3, p: 3 }}>
          <Typography variant="h5" gutterBottom>
            No details available for {subcategory.name}
          </Typography>
        </Card>
      );
    }

    const { name, details } = subcategory;

    const handleSave = () => {
      localStorage.setItem(subcategory.id, JSON.stringify(selectedValues));
      alert("Selections saved!");
    };

    const dynamicSections = Object.keys(details).map((key) => {
      const formattedKey = key
        .split("_") // Split the key into words based on underscores
        .map(
          (word) =>
            word.toLowerCase() === "api"
              ? "API" // Keep "API" fully capitalized
              : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of other words
        )
        .join(" "); // Join the words with spaces

      return {
        key: key,
        title: (
          <span>
            <span style={{ color: "#ff4208" }}>{name} </span>
            {formattedKey}
          </span>
        ), // Format the key for display
        values: details[key],
      };
    });

    return (
      <Card sx={{ marginTop: 3, p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Details for Selected Subcategory: {name}
        </Typography>

        {dynamicSections
          .filter(({ key }) => details[key] && details[key].length > 0) // Only include sections where details[key] exists and is not empty
          .map((filteredSection, filteredIndex, filteredSections) => {
            const { key, title, values } = filteredSection;

            // Dynamically skip sections where details[key] is missing or empty
            if (!details[key] || details[key].length === 0) {
              return null; // Skip rendering this section if it's missing or empty in details
            }

            // Determine if the previous section in the filtered list has a selection
            const previousSectionSelected =
              filteredIndex === 0 ||
              selectedValues[filteredSections[filteredIndex - 1]?.key]?.length >
                0;

            if (values && previousSectionSelected) {
              return (
                <DetailCard
                  key={key}
                  title={title}
                  items={values}
                  onSelection={(value) => handleSelection(key, value)}
                  selectedValues={selectedValues[key]}
                />
              );
            }
            return null;
          })}

        <Grid container spacing={2} justifyContent="left" alignItems="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Review
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddMoreCrafts}
            >
              Add more Crafts
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" style={{ backgroundColor: "#ff4208" }}>
              Submit Now
            </Button>
          </Grid>
        </Grid>
      </Card>
    );
  };

  return (
    <>
    <Breadcrumb title="Vendor Partnership Registration Portal" links={breadcrumbLinks} />
    <div className="project-area style-three mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <h5 className="section-sub-title">
                Begin your journey with De Koshur Crafts
              </h5>
              <h1 className="section-main-title">Product Portfolio</h1>
              <h4 className="">
                Choose your product profile
                 <br />{" "}
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
                <b> Vendor Partnership Registration Process </b>
                <h1 className="section-main-title" style={{ fontSize: "40px" }}>
                  Process 3
                </h1>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div className="container mt-5">

      <Typography variant="h3" gutterBottom style={{ color: "#ff4208" }}>
        Available Product Profile
      </Typography>

      {/* Main Categories */}
      <Card className="mb-3 p-3" style={{ color: "black" }}>
        <Box marginBottom={2} display="flex" justifyContent="between">
          <Typography className="col-md-8" variant="h4" gutterBottom>
            Select Craft Category{" "}
            <span
              style={{
                marginLeft: "15px",
                color: "#ff4208",
                cursor: "pointer",
              }}
              onClick={toggleMainCategoryExpansion}
            >
              {expandMainCategory ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </span>
          </Typography>
          <Grid
            item
            xs={12}
            sm={7}
            container
            justifyContent="flex-end"
            spacing={1}
          >
            <Grid item>
              <Button onClick={selectAllCategories} variant="outlined">
                Select All
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={clearAllCategories} variant="outlined">
                Clear All
              </Button>
            </Grid>
          </Grid>
        </Box>

        {expandMainCategory && (
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category.id}>
                <Card sx={{ pl: 2, borderRadius: 2, boxShadow: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        name={category.id}
                        sx={{
                          "&.Mui-checked": {
                            color: "#f44336", // Change the color here to any color you want
                          },
                        }}
                      />
                    }
                    label={category.name}
                    style={{ color: "black" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Card>

      {/* Subcategories */}
      <Card className="row mb-3 p-3 m-0">
        <Typography variant="h4">Select Sub Craft Categories</Typography>
        <div className="col-12">{renderSubcategories()}</div>
      </Card>

      {/* Subcategory Details */}
      <div className="row mb-3">
        <div className="col-12">{renderDetails()}</div>
      </div>
    </div>
    </>
  );
};

export default ProductionPortfolio;
