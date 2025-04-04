/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, Link } from "react-router-dom";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";
import image8 from "../../assets/images/process icon/1.png";
import image9 from "../../assets/images/process icon/2.png";
import image10 from "../../assets/images/process icon/3.png";
import lockImg from "../../assets/icon/red-bg-lock.png";
import partialLock from '../../assets/images/partiallock.png'
import unlockImg from "../../assets/icon/green-bg-lock.png";
import partialLockImg from "../../assets/icon/partialLock.png";
import image11 from "../../assets/images/process icon/4.png";
// import { Person, Email, Phone } from '@mui/icons-material';
import Breadcrumb from "../../components/Shared-Components/Breadcrumb";
export default function VendorAgreement() {
  const location = useLocation();

  const retentionPeriod = "0";
  const kpiScore = "8";
  const userPackage = "";

  const cardData = [
    {
      image: image1,
      title: "DKC Drop Shipping",
      eligibleDesc:
        userPackage === "Starter"
          ? ""
          : userPackage === "Growth"
            ? ""
            : userPackage === "Premium"
              ? ""
              : "",
      ineligibleDesc: "Uneligible",
      lockIcon: unlockImg,
      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 0,
      requiredKpi: 0,
      requiredPackage: null,
      steps: [
        "Bussiness Information",
        "Contact Details",
        "Banking Information",
        "Legal Terms",
      ],

      
      formFields: [
        [
          { name: "businessName", label: "Business Name", type: "text" },
          { name: "businessType", label: "Business Type", type: "text" },
          { name: "gstNumber", label: "EIN Number", type: "text" },
          { name: "panNumber", label: "TIN Number", type: "text" },
        ],
        [
          { name: "contactPerson", label: "Contact Person", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone Number", type: "text" },
        ],
        [
          {
            name: "bankName",
            label: "Bank Name",
            type: "text",
            icon: "AccountBalance",
          },
          { name: "accountNumber", label: "Account Number", type: "text" },
          { name: "ifscCode", label: " Routing Number", type: "text" },
          { name: "branch", label: "Bank Address", type: "text" },
        ],

        [
            {
              type: 'legalTerms',
              
                terms: [
                  {
                    "title": "Definitions and Scope",
                    "terms": [
                      "\"Buyer\" refers to the party purchasing products through DKC's drop shipping partnership.",
                      "\"Platform\" refers to DKC’s e-commerce website and related drop shipping services.",
                      "\"Products\" refers to items sourced from DKC’s vendors for resale by the Buyer.",
                      "\"Agreement\" refers to this entire drop shipping partnership arrangement."
                    ]
                  },
                  {
                    "title": "Service Level Agreements",
                    "terms": [
                      "Order processing within 24 hours (once payment is confirmed).",
                      "Customer query response time: 4 hours maximum.",
                      "Minimum 95% fulfillment rate required.",
                      "Maximum cancellation rate: 5%.",
                      "Platform uptime guarantee: 99.9%."
                    ]
                  },
                  {
                    "title": "Buyer Listing Rights",
                    "terms": [
                      "Buyer is granted access to list and sell DKC's products on their platform.",
                      "Buyer must maintain accurate product descriptions, pricing, and inventory sync.",
                      "DKC reserves the right to adjust product availability, pricing, and listings.",
                      "Unauthorized resale outside of approved platforms is prohibited."
                    ]
                  },
                  {
                    "title": "Buyer Obligations",
                    "terms": [
                      "Maintain customer service standards.",
                      "Process customer payments securely.",
                      "Ensure compliance with all applicable laws (Consumer Protection, FTC Rules).",
                      "Provide accurate shipping and order tracking to customers.",
                      "Handle returns and refunds per DKC’s policy."
                    ]
                  },
                  {
                    "title": "DKC Obligations",
                    "terms": [
                      "Provide product sourcing and fulfillment.",
                      "Ensure quality control before shipment.",
                      "Process and ship orders within 24 hours.",
                      "Offer real-time inventory sync and order tracking.",
                      "Manage warehousing and logistics."
                    ]
                  },
                  {
                    "title": "Product Standards",
                    "terms": [
                      "All products must be authentic and new.",
                      "Must comply with U.S. safety and quality regulations.",
                      "Must match product descriptions and include warranty information (if applicable).",
                      "Retail-ready packaging required.",
                      "Proper labeling, including country of origin, must be included."
                    ]
                  },
                  {
                    "title": "Shipping & Fulfillment",
                    "terms": [
                      "All orders are processed and shipped by DKC.",
                      "DKC selects approved carriers to ensure timely delivery.",
                      "Tracking information is provided within 24 hours of shipment.",
                      "Buyers must ensure accurate customer addresses to avoid delays.",
                      "Returns and refunds are handled per DKC’s return policy."
                    ]
                  },
                  {
                    "title": "Intellectual Property",
                    "terms": [
                      "Buyer retains branding rights for their own storefront.",
                      "DKC provides a limited license to use product images and descriptions.",
                      "Joint ownership of any sales-driven enhancements.",
                      "Unauthorized use of DKC’s trademarks or branding is prohibited."
                    ]
                  },
                  {
                    "title": "Liability",
                    "terms": [
                      "Buyer is responsible for handling customer relations.",
                      "DKC is responsible for order fulfillment and shipping.",
                      "Both parties agree to mutual indemnification in case of disputes.",
                      "Insurance requirements must be met by both parties.",
                      "Force majeure conditions apply."
                    ]
                  },
                  {
                    "title": "Partnership Renewal",
                    "terms": [
                      "Eligibility Criteria:",
                      "- Consistent order volume.",
                      "- Low return/cancellation rate.",
                      "- Positive customer feedback.",
                      "- Compliance with DKC policies.",
                      "Renewal Process:",
                      "- Performance Review.",
                      "- Documentation Update.",
                      "- Terms Renegotiation.",
                      "- New Term Agreement.",
                      "Renewal Benefits:",
                      "- Discounted product pricing.",
                      "- Priority inventory access.",
                      "- Dedicated account management.",
                      "- Exclusive promotional deals."
                    ]
                  },
                  {
                    "title": "Term & Termination",
                    "terms": [
                      "Initial term: 18 months.",
                      "Automatic renewal unless terminated with 60-day notice.",
                      "Immediate termination for breaches, fraudulent activities, or policy violations.",
                      "Buyers must fulfill pending orders post-termination."
                    ]
                  },
                  {
                    "title": "Underperformance Consequences",
                    "terms": [
                      "1st Month: Warning and corrective action plan.",
                      "2nd Month: Reduced access to exclusive product lines.",
                      "3rd Month: Commission structure adjustments.",
                      "4th Month: Partnership suspension."
                    ]
                  },
                  {
                    "title": "Blacklisting Conditions",
                    "terms": [
                      "Frequent order cancellations.",
                      "High customer complaints and refunds.",
                      "Selling counterfeit or misrepresented products.",
                      "Failure to adhere to agreement terms.",
                      "Blacklisting period: 24 months minimum."
                    ]
                  },
                  {
                    "title": "Sustainability & ESG Compliance",
                    "terms": [
                      "Carbon Footprint:",
                      "- Annual carbon footprint reporting.",
                      "- Target: 5% reduction per year.",
                      "- Green packaging and waste reduction initiatives.",
                      "Packaging Sustainability:",
                      "- 100% recyclable materials by 2026.",
                      "- Plastic reduction targets.",
                      "Labor Practices:",
                      "- Compliance with fair wage certification.",
                      "- No child labor.",
                      "- Equal opportunity policies.",
                      "Supply Chain Ethics:",
                      "- Adherence to fair trade standards.",
                      "- Supplier code of conduct compliance."
                    ]
                  },
                  {
                    "title": "Digital Presence & Content Standards",
                    "terms": [
                      "Image Standards:",
                      "- Minimum resolution: 2000x2000px.",
                      "- File format: PNG/JPEG.",
                      "- Background: Pure white (RGB: 255,255,255).",
                      "- Multiple angles: Minimum 6 images per product.",
                      "- Zoom capability: 200% clarity.",
                      "Product Information:",
                      "- Detailed specifications.",
                      "- Material composition.",
                      "- Country of origin.",
                      "- Warranty details.",
                      "- Safety certifications (if applicable)."
                    ]
                  },
                  {
                    "title": "Technology & API Requirements",
                    "terms": [
                      "REST API for real-time inventory updates.",
                      "Automated order processing.",
                      "Secure customer data synchronization.",
                      "Real-time order tracking.",
                      "AI-driven stock management."
                    ]
                  },
                  {
                    "title": "Commission Structure",
                    "terms": [
                      "Base Commission Rates:",
                      "- Standard Products: 15%",
                      "- Premium Products: 18%",
                      "- Luxury Products: 20%",
                      "Performance-Based Adjustments:",
                      "- Sales over $50,000/month: -0.5% reduction.",
                      "- Sales over $100,000/month: -1.0% reduction.",
                      "- Customer Rating above 4.8/5: -0.3% reduction."
                    ]
                  },
                  {
                    "title": "Legal Disclaimers",
                    "terms": [
                      "This agreement is governed under U.S. law and is legally binding under federal and applicable state laws."
                    ]
                  }
                ]
              
              
            },
            {
              type: 'disclaimer',
              content: "This agreement constitutes a legally binding contract under Indian law. Digital signatures collected comply with IT Act, 2000.",
            },
            {
              type: 'digitalSignature',
            },
          ],
      ],
      initialFormData: { field1: "", field2: "" },
      // onSubmit: () => console.log("Submitted E-Commerce form"),
      form_title: "Drop Shipping Buyer Partnership Agreement",
      subtitle: "Fill out the e Agreement.",
      link: "/ecommerce",
    },
    {
      image: image4,
      title: "DKC Consignment",
      eligibleDesc:
        userPackage === "Starter"
          ? ""
          : userPackage === "Growth"
            ? ""
            : userPackage === "abc"
              ? ""
              : "",

      ineligibleDesc: ``,

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 18,
      requiredKpi: 7,
      requiredPackage: "Starter",
      linkTo: "/package-multipath",
      steps: [
        "Bussiness Information",
        "Contact Details",
        "Banking Information",
        "Legal Terms",
      ],

      
      formFields: [
        [
          { name: "businessName", label: "Business Name", type: "text" },
          { name: "businessType", label: "Business Type", type: "text" },
          { name: "gstNumber", label: "EIN Number", type: "text" },
          { name: "panNumber", label: "TIN Number", type: "text" },
        ],
        [
          { name: "contactPerson", label: "Contact Person", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone Number", type: "text" },
        ],
        [
          {
            name: "bankName",
            label: "Bank Name",
            type: "text",
            icon: "AccountBalance",
          },
          { name: "accountNumber", label: "Account Number", type: "text" },
          { name: "ifscCode", label: "Routing Number", type: "text" },
          { name: "branch", label: "Bank Address", type: "text" },
        ],

        [
          {
            type: "legalTerms",
            terms: [
              {
                title: "Definitions",
                terms: [
                  "- 'Products' means authentic Kashmiri handicrafts consigned to DKC by Consignor.",
                  "- 'Premises' means DKC's retail locations and warehouses.",
                  "- 'Territory' means the United States of America.",
                  "- 'Consignment Period' means the duration Products remain in DKC's possession for sale."
                ]
              },
              {
                title: "Consignment Arrangement",
                terms: [
                  "- Consignor agrees to provide Products to DKC on a consignment basis.",
                  
                  "- Title remains with Consignor until Products are sold.",
                  "- DKC acts as bailee of Products.",
                  "- Risk transfers to DKC upon receipt at Premises."
                ]
              },
              {
                title: "Consignor Obligations",
                terms: [
                  "Product Supply:",
                  "- Maintain minimum inventory levels.",
                  "- Provide authenticity certificates.",
                  "- Supply product documentation.",
                  "- Ensure quality standards.",
                  "Documentation:",
                  "- Export permits.",
                  "- Customs documentation.",
                  "- Certification papers.",
                  "- Product descriptions."
                ]
              },
              {
                title: "DKC Obligations",
                terms: [
                  "Premises and Display:",
                  "- Maintain suitable retail space.",
                  "- Professional product display.",
                  "- Adequate security measures.",
                  "- Climate control for Products.",
                  "Sales and Marketing:",
                  "- Active promotion of Products.",
                  "- Staff training on Products.",
                  "- Regular sales reporting.",
                  "- Market feedback."
                ]
              },
              {
                title: "Financial Terms",
                terms: [
                  "Consignment Split:",
                  "- Standard Products: 70% Consignor / 30% DKC.",
                  "- Premium Products: 75% Consignor / 25% DKC.",
                  "- Luxury Products: 80% Consignor / 20% DKC.",
                  "Payment Terms:",
                  "- Monthly settlement.",
                  "- 15-day payment window.",
                  "- International wire transfer.",
                  "- Detailed sales reports."
                ]
              },
              {
                title: "Product Requirements",
                terms: [
                  "Quality Standards:",
                  "- Authentic Kashmiri craftsmanship.",
                  "- Quality certifications.",
                  "- Proper labeling.",
                  "- Retail-ready packaging.",
                  "Inventory Management:",
                  "- Quarterly inventory audits.",
                  "- Product rotation schedule.",
                  "- Minimum stock levels.",
                  "- Replenishment timing."
                ]
              },
              {
                title: "Handling and Storage",
                terms: [
                  "DKC Responsibilities:",
                  "- Secure storage.",
                  "- Climate control.",
                  "- Inventory tracking.",
                  "- Insurance coverage.",
                  "Product Care:",
                  "- Handling procedures.",
                  "- Display guidelines.",
                  "- Cleaning protocols.",
                  "- Protection measures."
                ]
              },
              {
                title: "Returns and Damages",
                terms: [
                  "Returns Policy:",
                  "- Customer return window.",
                  "- Condition assessment.",
                  "- Restocking procedures.",
                  "- Damage documentation.",
                  "Liability for Damages:",
                  "- DKC responsibility while in possession.",
                  "- Insurance claims process.",
                  "- Compensation calculation.",
                  "- Settlement timing."
                ]
              },
              {
                title: "Term and Termination",
                terms: [
                  "Initial Term: 12 months.",
                  "Termination Rights:",
                  "- 90 days written notice.",
                  "- Immediate for material breach.",
                  "- Product withdrawal process.",
                  "- Final settlement timing."
                ]
              },
              {
                title: "Insurance and Liability",
                terms: [
                  "Required Coverage:",
                  "- Property insurance.",
                  "- Commercial liability.",
                  "- Product coverage.",
                  "- Minimum $1,000 coverage."
                ]
              },
              {
                title: "Dispute Resolution",
                terms: [
                  "Mediation and Arbitration:",
                  "- Mandatory mediation first.",
                  "- Binding arbitration.",
                  "- Venue: Fairfax",
                  "- Governing law: Virginia law."
                ]
              },
              {
                title: "General Provisions",
                terms: [
                  "Complete Agreement.",
                  "- Written modifications only.",
                  "- No assignment.",
                  "- Severability.",
                  "- Force majeure."
                ]
              }
            ]
          },
          
            {
              type: 'disclaimer',
              content: "This agreement constitutes a legally binding contract under Indian law. Digital signatures collected comply with IT Act, 2000.",
            },
            {
              type: 'digitalSignature',
            },
          ],
      ],
      initialFormData: { field1: "", field2: "" },
      // onSubmit: () => console.log("Submitted E-Commerce form"),
      form_title: "Consignment Buyer Partnership Agreement",
      subtitle: "Fill out the e Agreement.",
      link: "",
    },
    {
      image: image5,
      title: "DKC Exhibition",
      eligibleDesc: userPackage === "Starter" ? "" : "",
      ineligibleDesc: ``,

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 24,
      requiredKpi: 8,
      requiredPackage: "Growth",
      linkTo: "",
      link: "",
      steps: [
        "Bussiness Information",
        "Contact Details",
        "Banking Information",
        "Legal Terms",
      ],

      
      formFields: [
        [
          { name: "businessName", label: "Business Name", type: "text" },
          { name: "businessType", label: "Business Type", type: "text" },
          { name: "gstNumber", label: "EIN Number", type: "text" },
          { name: "panNumber", label: "TIN Number", type: "text" },
        ],
        [
          { name: "contactPerson", label: "Contact Person", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone Number", type: "text" },
        ],
        [
          {
            name: "bankName",
            label: "Bank Name",
            type: "text",
            icon: "AccountBalance",
          },
          { name: "accountNumber", label: "Account Number", type: "text" },
          { name: "ifscCode", label: "Routing Number", type: "text" },
          { name: "branch", label: "Bank Address", type: "text" },
        ],

        [
          {
            "type": "legalTerms",
            "terms": [
              {
                "title": "Definitions and Scope",
                "terms": [
                  "Exhibition refers to any trade show, fair, or exhibition organized by DKC.",
                  "Products means authentic Kashmiri handicrafts supplied by Buyer.",
                  "Territory refers to the United States of America.",
                  "Term means the duration of this Agreement."
                ]
              },
              {
                "title": "Appointment and Scope",
                "terms": [
                  "DKC grants Buyer the right to exhibit and sell Products at Exhibitions organized by DKC in the Territory.",
                  "Buyer agrees to participate in a minimum of six (6) Exhibitions annually."
                ]
              },
              {
                "title": "Financial Terms",
                "terms": [
                  "Exhibition Fees:",
                  "- Annual Registration Fee: $ 700",
                  "- Per-Exhibition Booth Fee: $ 2,000",
                  "- Sales Commission: 5% (flat)",
                  "- Event or Exhibition Visa Invitations: $150 per invitation letter",
"- Post-Exhibition Climate Control Storage Charges: $250 per Month",
"- Booth Dismental Fee: $50",
"- Local Transportation Fee: $200",
                  "- Early Booking Discount: 15% if booked 90 days in advance",
                  "Payment Terms:",
                  "- 30% of total fees due upon booking",
                  "- Remaining balance due 15 days before Exhibition",
                  "- Sales settlements processed weekly",
                  "- Payments via international wire transfer"
                ]
              },
              {
                "title": "DKC Obligations",
                "terms": [
                  "Provide standard booth space (10' x 10'), basic utilities (electricity, lighting), security services, marketing and promotion, insurance coverage for the venue, and storage facilities.",
                  "Offer additional services such as customs clearance assistance, documentation support, market intelligence, and buyer introductions."
                ]
              },
              {
                "title": "Buyer Obligations",
                "terms": [
                  "Product Requirements:",
                  "- Maintain valid GI certification",
                  "- Provide authenticity documentation",
                  "- Comply with US safety standards",
                  "- Maintain adequate inventory",
                  "- Price consistency across shows",
                  "Operational Requirements:",
                  "- Staff booth during show hours",
                  "- Professional product display",
                  "- Daily sales reporting",
                  "- Customer service standards",
                  "- Safety compliance"
                ]
              },
              {
                "title": "Certifications and Compliance",
                "terms": [
                  "Required Documentation:",
                  "- US business registration/EIN",
                  "- Import/export licenses",
                  "- Product certifications",
                  "- Insurance certificates",
                  "- Tax compliance records",
                  "Regulatory Compliance:",
                  "- Consumer safety regulations",
                  "- Labeling requirements",
                  "- Trade regulations",
                  "- Local ordinances"
                ]
              },
              {
                "title": "Intellectual Property",
                "terms": [
                  "Buyer retains all intellectual property rights in Products.",
                  "DKC may use Buyer's trademarks and images for promotion."
                ]
              },
              {
                "title": "Term and Termination",
                "terms": [
                  "Initial Term: Twelve (12) months.",
                  "Renewal: Automatic annual renewal unless terminated.",
                  "Termination:",
                  "- 60 days written notice",
                  "- Immediate for material breach",
                  "- Quality issues",
                  "- Payment default"
                ]
              },
              {
                "title": "Insurance and Liability",
                "terms": [
                  "Required Coverage:",
                  "- Product liability: $1,000",
                  "- Commercial general liability: $2,000",
          
               
                  "Indemnification:",
                  "- Buyer indemnifies DKC for product claims.",
                  "- DKC indemnifies Buyer for venue claims."
                ]
              },
              {
                "title": "Dispute Resolution",
                "terms": [
                  "Good Faith Resolution:",
                  "- Direct negotiation",
                  "- Mediation",
                  "- Binding arbitration",
                  "Governing Law: Laws of Varginia",
                  "Venue: Fairfax"
                ]
              },
              {
                "title": "General Provisions",
                "terms": [
                  "Entire Agreement",
                  "Amendments in writing",
                  "No assignment",
                  "Severability",
                  "Force Majeure",
                  "Notices",
                  "Counterparts"
                ]
              }
            ]
          }
          ,
            {
              type: 'disclaimer',
              content: "This agreement constitutes a legally binding contract under Indian law. Digital signatures collected comply with IT Act, 2000.",
            },
            {
              type: 'digitalSignature',
            },
          ],
      ],
      initialFormData: { field1: "", field2: "" },
      // onSubmit: () => console.log("Submitted E-Commerce form"),
      form_title: "Exhibition Buyer Partnership Agreement",
      subtitle: "Fill out the e Agreement.",
    },
    {
      image: image3,
      title: "DKC Import Export",
      eligibleDesc: userPackage === "Growth" ? "" : "",
      ineligibleDesc: ``,

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 30,
      requiredKpi: 8,
      requiredPackage: "Premium",
      linkTo: "",
      link: "",
      steps: [
        "Bussiness Information",
        "Contact Details",
        "Banking Information",
        "Legal Terms",
      ],

      
      formFields: [
        [
          { name: "businessName", label: "Business Name", type: "text" },
          { name: "businessType", label: "Business Type", type: "text" },
          { name: "gstNumber", label: "EIN Number", type: "text" },
          { name: "panNumber", label: "TIN Number", type: "text" },
        ],
        [
          { name: "contactPerson", label: "Contact Person", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone Number", type: "text" },
        ],
        [
          {
            name: "bankName",
            label: "Bank Name",
            type: "text",
            icon: "AccountBalance",
          },
          { name: "accountNumber", label: "Account Number", type: "text" },
          { name: "ifscCode", label: "Routing Number", type: "text" },
          { name: "branch", label: "Bank Address", type: "text" },
        ],

        [
          {
            "type": "legalTerms",
            "terms": [
              {
                "title": "Commission Structure",
                "terms": [
                  "Standard Commission Rates:",
                  "- Regular Orders: 3% of FOB value",
                  "- Bulk Orders (>$50,000): 2.5% of FOB value",
                  "- Annual Orders (>$250,000): 2% of FOB value",
                  "Special Categories:",
                  "- Premium Products: +2% commission",
                  "- Custom Orders: 10% commission",
                  "- Repeat Buyers: 5% commission",
                  "Transactional Fees",
                  "- Flat 1.5% on the transaction value"
                ]
              },
              {
                "title": "Payment Terms",
                "terms": [
                  "Commission Payment:",
                  "- Due within 15 days of shipment",
                  "- Wire transfer only",
                  "- USD currency",
                  "- Proof of export required",
                  "Transaction Documentation:",
                  "- Export invoice copies",
                  "- Shipping documents",
                  "- Payment confirmations",
                  "- Commission calculations"
                ]
              },
              {
                "title": "Buyer Plans",
                "terms": [
                  "Starter Plan: $25.00 (monthly)",
"Basic Plan: $119.99 (monthly)",
"Growth Plan: $199.99 (monthly)",
"Premium Plan: $549.99 (monthly",
                ]
              },
              {
                "title": "DKC Services",
                "terms": [
                  "Trade Facilitation:",
                  "- Buyer identification",
                  "- Order negotiation",
                  "- Documentation support",
                  "- Market intelligence",
                  "- Price guidance",
                  "Support Services:",
                  "- Export compliance",
                  "- Quality verification",
                  "- Logistics coordination",
                  "- Communication facilitation"
                ]
              },
              {
                "title": "Exporter Obligations",
                "terms": [
                  "Essential Requirements:",
                  "- Valid export license",
                  "- GI certificates",
                  "- Quality standards",
                  "- Timely shipping",
                  "- Accurate documentation",
                  "Reporting Requirements:",
                  "- Order details",
                  "- Shipping status",
                  "- Payment status",
                  "- Commission calculations"
                ]
              },
              {
                "title": "Transaction Process",
                "terms": [
                  "Order Processing:",
                  "- DKC introduces buyer",
                  "- Price negotiation",
                  "- Order confirmation",
                  "- Production/shipping",
                  "- Commission payment",
                  "Documentation:",
                  "- Purchase orders",
                  "- Export documents",
                  "- Shipping papers",
                  "- Payment proofs"
                ]
              },
              {
                "title": "Exclusivity",
                "terms": [
                  "Buyer Protection:",
                  "- 2-year exclusive rights",
                  "- Direct dealing prohibited",
                  "- Referral requirement",
                  "- Commission protection"
                ]
              },
              {
                "title": "Term and Termination",
                "terms": [
                  "Duration:",
                  "- 24 months initial term",
                  "- Automatic renewal",
                  "- 90-day notice",
                  "- Commission protection period",
                  "Early Termination:",
                  "- Material breach",
                  "- Payment default",
                  "- Performance issues",
                  "- Mutual agreement"
                ]
              },
              {
                "title": "Dispute Resolution",
                "terms": [
                  "Resolution Process:",
                  "- Direct negotiation",
                  "- Mediation",
                  "- Binding arbitration",
                  "- Governing Law: Virginia"
                ]
              }
            ]
          }
          ,
            {
              type: 'disclaimer',
              content: "This agreement constitutes a legally binding contract under Indian law. Digital signatures collected comply with IT Act, 2000.",
            },
            {
              type: 'digitalSignature',
            },
          ],
      ],
      initialFormData: { field1: "", field2: "" },
      // onSubmit: () => console.log("Submitted E-Commerce form"),
      form_title: "Import Export Buyer Partnership Agreement",
      subtitle: "Fill out the e Agreement.",
    },
    {
      image: image6,
      title: "DKC Investor",
      eligibleDesc: "",
      ineligibleDesc: "",

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 36,
      requiredKpi: 8,
      requiredPackage: "noPackage",
      linkTo: "",
      steps: [
        "Bussiness Information",
        "Contact Details",
        "Banking Information",
        "Legal Terms",
      ],

      
      formFields: [
        [
          { name: "businessName", label: "Business Name", type: "text" },
          { name: "businessType", label: "Business Type", type: "text" },
          { name: "gstNumber", label: "EIN Number", type: "text" },
          { name: "panNumber", label: "TIN Number", type: "text" },
        ],
        [
          { name: "contactPerson", label: "Contact Person", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone Number", type: "text" },
        ],
        [
          {
            name: "bankName",
            label: "Bank Name",
            type: "text",
            icon: "AccountBalance",
          },
          { name: "accountNumber", label: "Account Number", type: "text" },
          { name: "ifscCode", label: "Routing Number", type: "text" },
          { name: "branch", label: "Bank Address", type: "text" },
        ],

        [
          {
            "type": "legalTerms",
         
              "terms": [
                {
                  "title": "Formation",
                  "terms": [
                    "The Company and Investor establish an Investor Partnership to support the expansion of Kashmiri handicrafts in the U.S. market.",
                    "Investment and capital infusion will be strategically utilized for retail, distribution, and logistics.",
                    "The Partnership becomes effective on the date of this Agreement."
                  ]
                },
                {
                  "title": "Ownership and Investment Structure",
                  "terms": [
                    "Ownership:",
                    "- DKC Company: 60%",
                    "- Investor Partner: 40%",
                    "Initial Contributions:",
                    "- Company: USD 600,000",
                    "- Investor: USD 400,000",
                    "Additional Contributions: Require majority Board approval."
                  ]
                },
                {
                  "title": "Profit and Loss Allocation",
                  "terms": [
                    "Net profits and losses will be allocated:",
                    "- 60% to the Company.",
                    "- 40% to the Investor."
                  ]
                },
                {
                  "title": "Management",
                  "terms": [
                    "Board of Directors:",
                    "- 5 members (Company appoints 3; Investor appoints 2).",
                    "- Decisions by majority vote.",
                    "Day-to-Day Operations: Managed by an appointed General Manager.",
                    "Major Decisions: Require majority Board approval."
                  ]
                },
                {
                  "title": "Investor Rights and Responsibilities",
                  "terms": [
                    "Right to access financial reports and operational insights.",
                    "Advisory role in key investment decisions.",
                    "No engagement in competing businesses without written Company approval.",
                    "Adherence to all applicable laws and regulations."
                  ]
                },
                {
                  "title": "Intellectual Property",
                  "terms": [
                    "Any intellectual property created by the Partnership will be jointly owned by the Partnership and protected under applicable laws."
                  ]
                },
                {
                  "title": "Confidentiality",
                  "terms": [
                    "Maintain confidentiality of all non-public information.",
                    "Confidentiality obligation lasts during the Agreement and for 3 years after termination."
                  ]
                },
                {
                  "title": "Term and Termination",
                  "terms": [
                    "Initial Term: 5 years, renewable for additional 2-year terms by mutual agreement.",
                    "Termination:",
                    "- Mutual written agreement.",
                    "- 30 days' notice for uncured material breach.",
                    "- Immediate termination for bankruptcy, insolvency, or dissolution.",
                    "- Upon termination, the Company may purchase the Investor's interest at fair market value."
                  ]
                },
                {
                  "title": "Dispute Resolution",
                  "terms": [
                    "Governing Law: [US STATE].",
                    "Disputes resolved by binding arbitration under the Commercial Arbitration Rules of the American Arbitration Association."
                  ]
                },
                {
                  "title": "Investor Support Services",
                  "terms": [
                    "Strategic investment consultation and market entry guidance.",
                    "Assistance with business expansion planning and financial structuring.",
                    "Facilitating access to global distribution channels and trade networks."
                  ]
                },
                {
                  "title": "Compliance Requirements",
                  "terms": [
                    "Investor must maintain legal financial status and adhere to regulatory standards.",
                    "Proof of fund sources and compliance documentation mandatory.",
                    "Immediate disclosure of financial or regulatory changes."
                  ]
                },
                {
                  "title": "Investment Limitations",
                  "terms": [
                    "Purpose: Strictly for DKC-Kashmir business expansion.",
                    "Prohibited Uses:",
                    "- Third-party investments outside of DKC operations.",
                    "- Personal business ventures using DKC resources.",
                    "- Unauthorized financial transactions or speculative investments.",
                    "Consequences of Violation:",
                    "- Immediate termination of investment rights.",
                    "- Potential partnership dissolution.",
                    "- Legal and financial repercussions."
                  ]
                },
                {
                  "title": "Subsidiary Expansion Responsibilities",
                  "terms": [
                    "Investor Obligations:",
                    "- Provide agreed capital contributions.",
                    "- Comply with all investment regulations and due diligence requirements.",
                    "- Align business objectives with DKC’s expansion strategy."
                  ]
                },
                {
                  "title": "Miscellaneous",
                  "terms": [
                    "This Agreement constitutes the entire agreement between the parties.",
                    "Amendments require a written agreement signed by both parties."
                  ]
                },
                
                
              ]
            
            
          }
          ,
            {
              type: 'disclaimer',
              content: "This agreement constitutes a legally binding contract under Indian law. Digital signatures collected comply with IT Act, 2000.",
            },
            {
              type: 'digitalSignature',
            },
          ],
      ],
      initialFormData: { field1: "", field2: "" },
      // onSubmit: () => console.log("Submitted E-Commerce form"),
      form_title: "Investor Partnership Agreement",
      subtitle: "Fill out the e Agreement.",
    },
    {
      image: image2,
      title: "DKC Brick & Mortar",
      eligibleDesc:
        // userPackage === "Premium"
        // ? "With the purchase of the DKC Subsidiary package, you’ve gained paid access to the DKC Subsidiary Partnership. You’ll have now the opportunity to establish a foundation as a subsidiary, expanding your business in the USA without the complexities of managing operations. Stay committed for 12 months, maintain a KPI score of 7+, and continue advancing." :
        "",
      ineligibleDesc: "",

      desc2: "",
      desc3: "",
      icon1: "",
      icon2: "",
      icon3: "",
      requiredRetention: 48,
      requiredKpi: 8,
      requiredPackage: "NoPackage",
      link: "",
      steps: [
        "Bussiness Information",
        "Contact Details",
        "Banking Information",
        "Legal Terms",
      ],

      
      formFields: [
        [
          { name: "businessName", label: "Business Name", type: "text" },
          { name: "businessType", label: "Business Type", type: "text" },
          { name: "gstNumber", label: "EIN Number", type: "text" },
          { name: "panNumber", label: "TIN Number", type: "text" },
        ],
        [
          { name: "contactPerson", label: "Contact Person", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone Number", type: "text" },
        ],
        [
          {
            name: "bankName",
            label: "Bank Name",
            type: "text",
            icon: "AccountBalance",
          },
          { name: "accountNumber", label: "Account Number", type: "text" },
          { name: "ifscCode", label: "Routing Number", type: "text" },
          { name: "branch", label: "Bank Address", type: "text" },
        ],

        [
          {
            "type": "legalTerms",
            "terms": [
              {
                "title": "Leased Space",
                "terms": [
                  "Premium Buyers:",
                  "- Located in the front area of the store for higher visibility and foot traffic.",
                  "- Charged a 20% rent surcharge compared to basic Buyers.",
                  "Basic Buyers:",
                  "- Located in the rear area of the store with lower visibility and foot traffic.",
                  "- Pay the base rent rate without any premium surcharge.",
                  "Product Exclusivity:",
                  "- No overlapping or competing products allowed between different Buyers.",
                  "- DKC must approve each Buyer's merchandise mix to ensure variety."
                ]
              },
              {
                "title": "Rent & Expenses",
                "terms": [
                  "- Base rent is $X per month, covering utilities, point-of-sale system, and marketing costs.",
                  "- Premium Buyers pay an additional 20% on top of the base rent for their prime location.",
                  "- Future rent increases will be split 50/50 between DKC and the Buyers.",
                  "- Buyers are responsible for their own phone, insurance, and product-related expenses."
                ]
              },
              {
                "title": "Sales & Revenue",
                "terms": [
                  "- Buyers retain 100% of their sales revenue, minus credit card processing fees.",
                  "- DKC does not take any commission or percentage of Buyer sales.",
                  "- Buyers must submit monthly sales reports to DKC by the 5th of each month.",
                  "- Buyers are responsible for collecting and remitting their own sales and income taxes."
                ]
              },
              {
                "title": "Store Hours & Staffing",
                "terms": [
                  "- Store is open from 10am to 8pm daily.",
                  "- Buyers must staff their designated spaces for a minimum of 40 hours per week.",
                  "- DKC provides shared staff for checkout, cleaning, and security.",
                  "- Buyers have sole control over their inventory, pricing, and visual merchandising."
                ]
              },
              {
                "title": "Marketing",
                "terms": [
                  "- DKC provides $X for initial store launch marketing and $Y per month ongoing.",
                  "- All Buyers will be featured equally in advertising and promotions.",
                  "- Buyers must approve any marketing content featuring their products or brand.",
                  "- Buyers may collaborate on joint events and offers with DKC's prior consent."
                ]
              },
              {
                "title": "Maintenance & Repairs",
                "terms": [
                  "- DKC is responsible for major repairs, building systems, and equipment maintenance.",
                  "- Buyers must handle minor repairs and upkeep within their licensed premises."
                ]
              },
              {
                "title": "Insurance & Liability",
                "terms": [
                  "- DKC maintains a general liability insurance policy covering the store premises.",
                  "- Buyers are required to insure their own inventory and cover any product liability claims."
                ]
              },
              {
                "title": "Term & Termination",
                "terms": [
                  "- Initial term is 1 year from the start date, automatically renewing for additional 1-year periods.",
                  "- Either party can terminate the agreement with 90 days' advance written notice.",
                  "- DKC may terminate immediately in the event of Buyer default or store closure."
                ]
              },
              {
                "title": "Buyer Approval & Onboarding",
                "terms": [
                  "- DKC screens and selects Buyers to ensure quality and fit with the store.",
                  "- Selected Buyers sign the agreement and submit required documentation.",
                  "- DKC assists Buyers with space setup and launch preparations."
                ]
              },
              {
                "title": "Rules & Policies",
                "terms": [
                  "- Buyers must maintain professional conduct and appearance at all times.",
                  "- No illegal, counterfeit, or unauthorized merchandise allowed.",
                  "- Buyers must follow all store operating procedures and DKC directives.",
                  "- 30-day cure period for Buyers to resolve any rule violations."
                ]
              },
              {
                "title": "Confidentiality",
                "terms": [
                  "- Buyers and DKC agree to a mutual non-disclosure agreement (NDA).",
                  "- Sales data, trade secrets, and proprietary information cannot be disclosed without prior written consent."
                ]
              },
              {
                "title": "Miscellaneous",
                "terms": [
                  "- Agreement is governed by the laws of [STATE].",
                  "- Any disputes will be resolved through binding arbitration.",
                  "- This is the entire agreement and supersedes any prior understandings.",
                  "- Agreement can only be modified in a signed writing by both parties.",
                  "- All notices and communications must be in writing."
                ]
              }
            ]
          }
          
          ,
            {
              type: 'disclaimer',
              content: "This agreement constitutes a legally binding contract under Indian law. Digital signatures collected comply with IT Act, 2000.",
            },
            {
              type: 'digitalSignature',
            },
          ],
      ],
      initialFormData: { field1: "", field2: "" },
      // onSubmit: () => console.log("Submitted E-Commerce form"),
      form_title: "Brick & Mortar Buyer Partnership Agreement",
      subtitle: "Fill out the e Agreement.",
    },

    {
      image: image11,
      title: "DKC Franchise",
    
      eligibleDesc: "",
      ineligibleDesc: ``,

      desc2: ``,
      desc3: ``,
      icon1: "",
      icon2: "",
      icon3: "",

      requiredRetention: 72,
      requiredKpi: 8,
      requiredPackage: "Nopackage",
      link: "",
      steps: [
        "Bussiness Information",
        "Contact Details",
        "Banking Information",
        "Legal Terms",
      ],

      
      formFields: [
        [
          { name: "businessName", label: "Business Name", type: "text" },
          { name: "businessType", label: "Business Type", type: "text" },
          { name: "gstNumber", label: "EIN Number", type: "text" },
          { name: "panNumber", label: "TIN Number", type: "text" },
        ],
        [
          { name: "contactPerson", label: "Contact Person", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone Number", type: "text" },
        ],
        [
          {
            name: "bankName",
            label: "Bank Name",
            type: "text",
            icon: "AccountBalance",
          },
          { name: "accountNumber", label: "Account Number", type: "text" },
          { name: "ifscCode", label: "Routing Number", type: "text" },
          { name: "branch", label: "Bank Address", type: "text" },
        ],

        [
            {
              type: 'legalTerms',
              terms: [
                {
                  title: "Platform Commission & Payments",
                  terms: [
                    "Platform commission: 5-15% based on product category",
                    "Bi-weekly payment settlement",
                    "Payment processing fees: 2% per transaction",
                    "Minimum payout threshold: ₹5,000",
                    "Late payment penalty: 1% per week",
                  ],
                },
                {
                  title: "Service Level Agreements",
                  terms: [
                    "Order processing within 24 hours",
                    "Customer query response: 4 hours maximum",
                    "Minimum 95% fulfillment rate",
                    "Maximum cancellation rate: 5%",
                    "Platform uptime guarantee: 99.9%",
                  ],
                },
              ],
            },
            {
              type: 'disclaimer',
              content: "This agreement constitutes a legally binding contract under Indian law. Digital signatures collected comply with IT Act, 2000.",
            },
            {
              type: 'digitalSignature',
            },
          ],
      ],
      initialFormData: { field1: "", field2: "" },
      // onSubmit: () => console.log("Submitted E-Commerce form"),
      form_title: "Franchise Vendor Partnership Agreement",
      subtitle: "Fill out the e Agreement.",
    },
  ];

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
              <h1 className="section-main-title">e Agreement</h1>
              <h4 className="">
                Choose Your Partnership Buyer Agreement<br />{" "}
                <span>
                  <b style={{ color: "#ff3b00;" }}>
                    Fill Digital Signature
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
                  Process 5
                </h1>
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <section
      className="cs_bg_filed"
      data-background="assets/how_to_work_bg.svg"
      style={{
        backgroundImage: "url('assets/how_to_work_bg.svg')",
        width: "100%",
      }}
    >
      <div className="container mb-5">
        <div className="mt-5 animted-xet">
          <h2 className="text-center bold" style={{ color: "#ff3b00" }}>
            Buyer Partnership Agreement Portal
          </h2>
          <h3 className="text-center mb-5">Your Agreement, Our Commitment</h3>
          <div className="row">
            {cardData.map((item, index) => {
              const isEligible =
                (userPackage === "Premium" &&
                  (item.requiredPackage === "Starter" ||
                    item.requiredPackage === "Growth" ||
                    item.requiredPackage === "Premium")) ||
                (userPackage === "Growth" &&
                  (item.requiredPackage === "Starter" ||
                    item.requiredPackage === "Growth")) ||
                (userPackage === "Starter" &&
                  item.requiredPackage === "Starter");

              const meetsRetentionAndKpi =
                retentionPeriod >= item.requiredRetention &&
                kpiScore >= item.requiredKpi;

              const isFinalEligibility = isEligible || meetsRetentionAndKpi;

              return (
                <div
                  className="col-lg-3 col-md-12 col-sm-12 col-xs-12"
                  key={index}
                >
                  <div
                    className="cs_card_1_col"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div className={`cs_card cs_style_1`}>
                      {isFinalEligibility ? (
                        <>
                          <div
                            className={`cs_card_in cs_white_bg  `}
                            style={{
                              backgroundColor: "green",
                              color: "white",
                            }}
                          >
                            <Link
                              to="/vendor-agreement-form"
                              state={{
                                highlightCard: 2,
                                steps: item.steps,
                                formFields: item.formFields,
                                initialFormData: item.initialFormData,
                                onSubmit: item.onSubmit,
                                title: item.form_title,
                                subtitle: item.subtitle,
                              }} // Pass the index of the card to highlight
                              className=""
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <div className="cs_card_icon cs_center cs_mb_30 ">
                                <img src={item.image} alt={item.title} />
                              </div>
                              <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">{item.title}</h3>
                              <h3 className="cs_fs_24 cs_semibold cs_mb_6 ">
                                <img
                                  src={unlockImg}
                                  alt=""
                                  style={{ width: "40px", height: "40px" }}
                                />
                                
                              </h3>

                              <div className="bg-green-white-icon">
                                {item.icon1 ? (
                                  <>
                                    <div className="d-flex">
                                      <img
                                        src={item.icon1}
                                        alt=""
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                        }}
                                      />{" "}
                                    </div>{" "}
                                  </>
                                ) : (
                                  ""
                                )}
                                <p
                                  style={{ textAlign: "left" }}
                                  className="cs_fs_14 cs_mb_25"
                                >
                                  {item.eligibleDesc}
                                </p>

                                {item.icon2 ? (
                                  <>
                                    <div className="d-flex">
                                      {" "}
                                      <img
                                        src={item.icon2}
                                        alt=""
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                        }}
                                      />
                                      <p
                                        style={{ textAlign: "left" }}
                                        className="cs_fs_14 cs_mb_25"
                                        dangerouslySetInnerHTML={{
                                          __html: item.desc2,
                                        }}
                                      ></p>{" "}
                                    </div>
                                  </>
                                ) : (
                                  ""
                                )}

                                {item.icon3 ? (
                                  <>
                                    <div className="d-flex">
                                      {" "}
                                      <img
                                        src={item.icon3}
                                        alt=""
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                        }}
                                      />
                                      <p
                                        style={{ textAlign: "left" }}
                                        className="cs_fs_14 cs_mb_25"
                                        dangerouslySetInnerHTML={{
                                          __html: item.desc3,
                                        }}
                                      ></p>{" "}
                                    </div>
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`cs_card_in cs_white_bg  `}
                            style={{
                              backgroundColor:
                                index === 0
                                  ? "green"
                                  : [1, 2, 3].includes(index)
                                    ? "white"
                                    : [4, 5, 6].includes(index)
                                      ? "#ff3b00"
                                      : "",
                              color: [0, 4, 5, 6].includes(index)
                                ? "white"
                                : "",
                              border: [1, 2, 3].includes(index)
                                ? "2px solid green"
                                : "",
                            }}
                          >
                            <div className="cs_card_icon cs_center cs_mb_30 ">
                              <img src={item.image} alt={item.title} />
                            </div>
                            <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">
                              
                              
                             
                              {item.title}
                            </h3>
                            <h3 className="cs_fs_24 cs_semibold cs_mb_6 "> {[1, 2, 3].includes(index) ? (
                                <img
                                  className="me-1"
                                  src={partialLock}
                                  alt=""
                                  style={{ width: "38px", height: "38px", }}
                                />
                              ) : (
                                <img
                                  className="me-1"
                                  src={lockImg}
                                  alt=""
                                  style={{ width: "35px", height: "35px" }}
                                />
                              )}</h3>

                            <div className="bg-green-white-icon">
                              {item.icon1 ? (
                                <>
                                  <div className="d-flex">
                                    <img
                                      src={item.icon1}
                                      alt=""
                                      style={{ width: "40px", height: "40px" }}
                                    />{" "}
                                  </div>{" "}
                                </>
                              ) : (
                                ""
                              )}
                              <p
                                style={{ textAlign: "left" }}
                                className="cs_fs_14 cs_mb_25"
                              >
                                {item.ineligibleDesc}
                                <Link
                                  style={{
                                    textDecoration: "None",
                                    color: "red",
                                  }}
                                  to={{
                                    pathname: item.linkTo,
                                    search: `?id=${item.requiredPackage}`,
                                  }}
                                >
                                  <b
                                  // style={ item.title =='DKC Subsidiary' ? {textDecoration:"None",color:"white"} : {}}
                                  >
                                    {item.link}
                                  </b>
                                </Link>
                              </p>

                              {item.icon2 ? (
                                <>
                                  <div className="d-flex">
                                    {" "}
                                    <img
                                      src={item.icon2}
                                      alt=""
                                      style={{ width: "40px", height: "40px" }}
                                    />
                                    <p
                                      style={{ textAlign: "left" }}
                                      className="cs_fs_14 cs_mb_25"
                                      dangerouslySetInnerHTML={{
                                        __html: item.desc2,
                                      }}
                                    ></p>{" "}
                                  </div>
                                </>
                              ) : (
                                ""
                              )}

                              {item.icon3 ? (
                                <>
                                  <div className="d-flex">
                                    {" "}
                                    <img
                                      src={item.icon3}
                                      alt=""
                                      style={{ width: "40px", height: "40px" }}
                                    />
                                    <p
                                      style={{ textAlign: "left" }}
                                      className="cs_fs_14 cs_mb_25"
                                      dangerouslySetInnerHTML={{
                                        __html: item.desc3,
                                      }}
                                    ></p>{" "}
                                  </div>
                                </>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
