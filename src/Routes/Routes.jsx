import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Pages
import BookAppointmentPage from "../pages/BookAppointment";
import PartnershipProcess from "../pages/PartnershipProcess";
import Con_dash from "../pages/con_dash"
import Con_dash2 from "../pages/con_dash2"
import Con_deal from "../pages/con_deal"
import Con_cmplt from "../pages/con_cmpl"
// About Us Pages
import MissionVisionPage from "../pages/About/OurEthos";
import BrandStory from "../pages/About/BrandStory";
import Contact from "../pages/About/Contact";
import Team from "../pages/About/Team";
import BussinessNiche from "../pages/About/BussinessNiche";
import BussinessLocation from "../pages/About/BussinessLocation";
import BrandCredential from "../pages/About/BrandCredential";
// Our PartnerShip Pages
import ImportExportPage from "../pages/OurPartnerShip/ImportExport";
import SubsidaryPage from "../pages/OurPartnerShip/Subsidary";
import FrenchisePage from "../pages/OurPartnerShip/Franchise";
import ConsignmentPage from "../pages/OurPartnerShip/Consignment";
import ExhibitionPage from "../pages/OurPartnerShip/Exhibition";
import BrickPage from "../pages/OurPartnerShip/BrickMortar";
import EcommPage from "../pages/OurPartnerShip/Ecommerce";
// PartnerShipRegistration Pages
import PartnershipRegister from "../pages/PartnershipRegister";
import PartnershipRegister1 from "../pages/PartnershipRegistration/PartnershipRegister1";
import PartnershipRegister2 from "../pages/PartnershipRegistration/PartnershipRegister2";
import ApplicationForm from "../pages/PartnershipRegistration/ApplicationSubmission";
import ProductPortfolio from "../pages/PartnershipRegistration/ProductPortfolio";
import ProPortfolio from '../pages/PartnershipRegistration/ProPortfolio'
import DocumentSubmission from "../pages/PartnershipRegistration/DocumentSubmission";
import VendorAgreement from "../pages/PartnershipRegistration/VendorAgreement";
import AgreementForm from "../pages/PartnershipRegistration/AgreementForm";
import ApplicationStatus from "../pages/PartnershipRegistration/ApplicationStatus"
import VendorAgreementForm from "../pages/PartnershipRegistration/VendorAgreementForm";
import PartnershipActivation from '../pages/PartnershipRegistration/PartnershipActivation'
// Authentication
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Permission from "../pages/Authentication/Permission"
// Layouts
import RootLayout from "../Layouts/RootLayout";
import PackageMultiPath from "../pages/PackageMultiPath";
import Package from "../pages/Package";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { path: "/", element: <Permission /> },
      { path: "/", element: <Index /> },
      { path: "/book-appointment", element: <BookAppointmentPage /> },
      { path: "/ecommerce", element: <EcommPage /> },
      { path: "/brick-mortar", element: <BrickPage /> },
      { path: "/importexport", element: <ImportExportPage /> },
      { path: "/consignment", element: <ConsignmentPage /> },
      { path: "/exhibition", element: <ExhibitionPage /> },
      { path: "/subsidary", element: <SubsidaryPage /> },
      { path: "/franchise", element: <FrenchisePage /> },
      { path: "/our-ethos", element: <MissionVisionPage /> },
      { path: "/brand-story", element: <BrandStory /> },
      { path: "/brand-credential", element: <BrandCredential /> },
      { path: "/bussiness-location", element: <BussinessLocation /> },
      { path: "/bussiness-niche", element: <BussinessNiche /> },
      { path: "/team", element: <Team /> },
      { path: "/contact", element: <Contact /> },
      { path: "/partnership-registration", element: <PartnershipRegister /> },
      { path: "/partnership-registration1", element: <PartnershipRegister1 /> },
      { path: "/partnership-registration2", element: <PartnershipRegister2 /> },
      { path: "/partnership-process", element: <PartnershipProcess /> },
      { path: "/package-multipath", element: <PackageMultiPath /> },
      { path: "/application-submission", element: <ApplicationForm /> },
      { path: "/product-portfolio", element: <ProductPortfolio /> },
      { path: "/product-port", element: <ProPortfolio /> },
      {path:"/document-submission",element:<DocumentSubmission/>},
      {path:"/vendor-agreement",element:<VendorAgreement/>},
      {path:"/agreement-form",element:<AgreementForm/>},
      {path:"/application-status",element:<ApplicationStatus/>},
      {path:'vendor-agreement-form',element:<VendorAgreementForm/>},
      {path:'partnership-activation',element:<PartnershipActivation/>},
      {path:"con_dash",element:<Con_dash/>},
      {path:"con_dash2",element:<Con_dash2/>},
      {path:"con_deal",element:<Con_deal/>},
      {path:"con_cmplt",element:<Con_cmplt/>},
      {path:"package",element:<Package/>},
      // {
      //   path:"/index",
      //   element:<Index/>
      // }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  
  // {
  //   path: '*',
  //   element: <ErrorPage />,
  // },
]);
