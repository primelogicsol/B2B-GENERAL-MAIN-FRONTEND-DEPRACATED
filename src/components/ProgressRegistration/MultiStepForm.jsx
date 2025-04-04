// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { ProgressBar, Step } from 'react-step-progress-bar';
// import 'react-step-progress-bar/styles.css';

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const { handleSubmit, control, formState: { errors }, register, setValue, watch } = useForm();
  
//   // Tracking the progress
//   const steps = [
//     "General Information",
//     "Business Details",
//     "Business Operations",
//     "Product Preferences",
//     "Partnership Goals",
//     "Pre-Screening Declaration",
//     "Submission"
//   ];

//   const handleNextStep = () => {
//     if (step < steps.length) {
//       setStep(step + 1);
//     }
//   };

//   const handlePreviousStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   const onSubmit = (data) => {
//     console.log("Form Submitted", data);
//   };

//   return (
//     <div className="container my-5">
//       {/* Progress Bar */}
//       <ProgressBar className="my-5"
//         percent={(step / steps.length) * 100}
//         filledBackground="linear-gradient(to right, #4e9f3d, #24b47e)"
//       >
//         {steps.map((label, index) => (
//           <Step key={index}>
//             {({ accomplished }) => (
//               <div className={`step ${accomplished ? 'accomplished' : ''}`}>
//                 {label}
//               </div>
//             )}
//           </Step>
//         ))}
//       </ProgressBar>

//       {/* Form Body */}
//       <form onSubmit={handleSubmit(onSubmit)} className='my-5'>
//         {/* Step 1: General Information */}
//         {step === 1 && (
//           <div>
//             <h2>Step 1: General Information</h2>
//             <div>
//               <label>Full Legal Name</label>
//               <input {...register("fullLegalName", { required: "This field is required" })} />
//               {errors.fullLegalName && <p>{errors.fullLegalName.message}</p>}
//             </div>
//             <div>
//               <label>Contact Person’s Name</label>
//               <input {...register("contactName", { required: "This field is required" })} />
//               {errors.contactName && <p>{errors.contactName.message}</p>}
//             </div>
//             <div>
//               <label>Phone Number</label>
//               <input type="tel" {...register("phone", { required: "This field is required" })} />
//               {errors.phone && <p>{errors.phone.message}</p>}
//             </div>
//             <div>
//               <label>Email Address</label>
//               <input type="email" {...register("email", { required: "This field is required" })} />
//               {errors.email && <p>{errors.email.message}</p>}
//             </div>
//             <div>
//               <label>Website</label>
//               <input {...register("website")} />
//             </div>
//             <div>
//               <button type="button" onClick={handleNextStep}>Next Step</button>
//             </div>
//           </div>
//         )}

//         {/* Step 2: Business Details */}
//         {step === 2 && (
//           <div>
//             <h2>Step 2: Business Details</h2>
//             <div>
//               <label>Type of Business</label>
//               <select {...register("businessType", { required: "This field is required" })}>
//                 <option value="Individual Artisan">Individual Artisan</option>
//                 <option value="Family Business">Family Business</option>
//                 <option value="Cooperative">Cooperative</option>
//                 <option value="Institution">Institution</option>
//               </select>
//               {errors.businessType && <p>{errors.businessType.message}</p>}
//             </div>
//             <div>
//               <label>Year of Establishment</label>
//               <input {...register("yearEstablished", { required: "This field is required" })} type="number" />
//               {errors.yearEstablished && <p>{errors.yearEstablished.message}</p>}
//             </div>
//             <div>
//               <label>Nature of Products/Services</label>
//               <textarea {...register("productsNature", { required: "This field is required" })} />
//               {errors.productsNature && <p>{errors.productsNature.message}</p>}
//             </div>
//             <div>
//               <label>Certifications</label>
//               <div>
//                 <input type="checkbox" {...register("certifications.GITags")} /> GI Tags
//                 <input type="checkbox" {...register("certifications.FairTrade")} /> Fair Trade Certification
//                 <input type="checkbox" {...register("certifications.EcoFriendly")} /> Eco-Friendly Certification
//               </div>
//             </div>
//             <div>
//               <button type="button" onClick={handlePreviousStep}>Previous Step</button>
//               <button type="button" onClick={handleNextStep}>Next Step</button>
//             </div>
//           </div>
//         )}

//         {/* Step 3: Business Operations */}
//         {step === 3 && (
//           <div>
//             <h2>Step 3: Business Operations</h2>
//             <div>
//               <label>What is the primary type of your business?</label>
//               <select {...register("businessTypePrimary", { required: "This field is required" })}>
//                 <option value="E-Commerce Business">E-Commerce Business</option>
//                 <option value="Brick-and-Mortar Retailer">Brick-and-Mortar Retailer</option>
//                 <option value="Artisanal Producer">Artisanal Producer</option>
//                 <option value="Wholesale Supplier">Wholesale Supplier</option>
//                 <option value="Export-Oriented Enterprise">Export-Oriented Enterprise</option>
//                 <option value="Other">Other</option>
//               </select>
//               {errors.businessTypePrimary && <p>{errors.businessTypePrimary.message}</p>}
//             </div>
//             <div>
//               <label>Legal Structure</label>
//               <select {...register("legalStructure", { required: "This field is required" })}>
//                 <option value="Sole Proprietorship">Sole Proprietorship</option>
//                 <option value="Partnership">Partnership</option>
//                 <option value="Cooperative">Cooperative</option>
//                 <option value="LLC">Limited Liability Company (LLC)</option>
//               </select>
//               {errors.legalStructure && <p>{errors.legalStructure.message}</p>}
//             </div>
//             <div>
//               <label>Number of Employees</label>
//               <input type="number" {...register("employees")} />
//             </div>
//             <div>
//               <label>Current Market Reach</label>
//               <input {...register("marketReach")} />
//             </div>
//             <div>
//               <button type="button" onClick={handlePreviousStep}>Previous Step</button>
//               <button type="button" onClick={handleNextStep}>Next Step</button>
//             </div>
//           </div>
//         )}

//         {/* Step 4: Product Preferences */}
//         {step === 4 && (
//           <div>
//             <h2>Step 4: Product Preferences</h2>
//             <div>
//               <label>Products of Interest</label>
//               <div>
//                 <input type="checkbox" {...register("productsOfInterest.pashminaShawls")} /> Pashmina Shawls
//                 <input type="checkbox" {...register("productsOfInterest.carpets")} /> Carpets and Rugs
//                 <input type="checkbox" {...register("productsOfInterest.paperMache")} /> Paper Mâché
//                 <input type="checkbox" {...register("productsOfInterest.woodwork")} /> Woodwork
//                 <input type="checkbox" {...register("productsOfInterest.copperware")} /> Copperware
//                 <input type="checkbox" {...register("productsOfInterest.embroideredTextiles")} /> Embroidered Textiles
//                 <input type="checkbox" {...register("productsOfInterest.other")} /> Other
//               </div>
//             </div>
//             <div>
//               <button type="button" onClick={handlePreviousStep}>Previous Step</button>
//               <button type="button" onClick={handleNextStep}>Next Step</button>
//             </div>
//           </div>
//         )}

//         {/* Step 5: Partnership Goals */}
//         {step === 5 && (
//           <div>
//             <h2>Step 5: Partnership Goals</h2>
//             <div>
//               <label>Why are you interested in partnering with DKC USA?</label>
//               <textarea {...register("partnershipGoals", { required: "This field is required" })} />
//               {errors.partnershipGoals && <p>{errors.partnershipGoals.message}</p>}
//             </div>
//             <div>
//               <label>Target Market(s)</label>
//               <div>
//                 <input type="checkbox" {...register("targetMarkets.usRetail")} /> U.S. Retail Market
//                 <input type="checkbox" {...register("targetMarkets.eCommerce")} /> E-Commerce Platform
//                 <input type="checkbox" {...register("targetMarkets.intWholesale")} /> International Wholesale Market
//                 <input type="checkbox" {...register("targetMarkets.other")} /> Other
//               </div>
//             </div>
//             <div>
//               <label>Unique Selling Points</label>
//               <textarea {...register("uniqueSellingPoints")} />
//             </div>
//             <div>
//               <button type="button" onClick={handlePreviousStep}>Previous Step</button>
//               <button type="button" onClick={handleNextStep}>Next Step</button>
//             </div>
//           </div>
//         )}

//         {/* Other steps will follow a similar structure */}
//         {/* You can continue steps 3 to 6, similarly using the same pattern, just adjust the fields accordingly */}

//         {/* Final Step: Declaration */}
//         {step === 6 && (
//           <div>
//             <h2>Step 6: Pre-Screening Declaration</h2>
//             <div>
//               <label>I confirm that the information provided is true</label>
//               <input type="checkbox" {...register("declaration", { required: "This field is required" })} />
//               {errors.declaration && <p>{errors.declaration.message}</p>}
//             </div>
//             <div>
//               <button type="button" onClick={handlePreviousStep}>Previous Step</button>
//               <button type="submit">Submit</button>
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default MultiStepForm;


// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// const ConditionalForm = () => {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();

//   const [selectedOption, setSelectedOption] = useState("");

//   // Handling select change
//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className='w-50 my-5 mx-auto'>
//       {/* Always visible fields (Name, Email, Phone) */}
//       <div>
//         <label>Name</label>
//         <input
//           {...register('name', { required: 'Name is required' })}
//           type="text"
//         />
//         {errors.name && <p>{errors.name.message}</p>}
//       </div>

//       <div>
//         <label>Email</label>
//         <input
//           {...register('email', {
//             required: 'Email is required',
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               message: 'Invalid email format'
//             }
//           })}
//           type="email"
//         />
//         {errors.email && <p>{errors.email.message}</p>}
//       </div>

//       <div>
//         <label>Phone</label>
//         <input
//           {...register('phone', {
//             required: 'Phone number is required',
//             pattern: {
//               value: /^[0-9]{10}$/,
//               message: 'Phone number must be 10 digits'
//             }
//           })}
//           type="tel"
//         />
//         {errors.phone && <p>{errors.phone.message}</p>}
//       </div>

//       {/* Select Options */}
//       <div>
//         <label>Choose an Option</label>
//         <select
//           {...register('option')}
//           value={selectedOption}
//           onChange={handleSelectChange}
//         >
//           <option value="">Select an option</option>
//           <option value="option1">Option 1</option>
//           <option value="option2">Option 2</option>
//           <option value="option3">Option 3</option>
//           <option value="option4">Option 4</option>
//           <option value="option5">Option 5</option>
//           <option value="option6">Option 6</option>
//         </select>
//       </div>

//       {/* Conditional Fields */}
//       {selectedOption === 'option1' && (
//         <div>
//           <label>Field for Option 1</label>
//           <input
//             {...register('fieldOption1', { required: 'This field is required for Option 1' })}
//             type="text"
//           />
//           {errors.fieldOption1 && <p>{errors.fieldOption1.message}</p>}
//         </div>
//       )}

//       {selectedOption === 'option2' && (
//         <div>
//           <label>Field for Option 2</label>
//           <input
//             {...register('fieldOption2', { required: 'This field is required for Option 2' })}
//             type="text"
//           />
//           {errors.fieldOption2 && <p>{errors.fieldOption2.message}</p>}
//         </div>
//       )}

//       {selectedOption === 'option3' && (
//         <div>
//           <label>Field for Option 3</label>
//           <input
//             {...register('fieldOption3', { required: 'This field is required for Option 3' })}
//             type="text"
//           />
//           {errors.fieldOption3 && <p>{errors.fieldOption3.message}</p>}
//         </div>
//       )}

//       {selectedOption === 'option4' && (
//         <div>
//           <label>Field for Option 4</label>
//           <input
//             {...register('fieldOption4', { required: 'This field is required for Option 4' })}
//             type="text"
//           />
//           {errors.fieldOption4 && <p>{errors.fieldOption4.message}</p>}
//         </div>
//       )}

//       {selectedOption === 'option5' && (
//         <div>
//           <label>Field for Option 5</label>
//           <input
//             {...register('fieldOption5', { required: 'This field is required for Option 5' })}
//             type="text"
//           />
//           {errors.fieldOption5 && <p>{errors.fieldOption5.message}</p>}
//         </div>
//       )}

//       {selectedOption === 'option6' && (
//         <div>
//           <label>Field for Option 6</label>
//           <input
//             {...register('fieldOption6', { required: 'This field is required for Option 6' })}
//             type="text"
//           />
//           {errors.fieldOption6 && <p>{errors.fieldOption6.message}</p>}
//         </div>
//       )}

//       {/* Submit Button */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ConditionalForm;


// import React, { useState } from "react";

// const EOIForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     businessName: "",
//     contactPerson: "",
//     address: "",
//     phone: "",
//     email: "",
//     website: "",
//     businessType: "",
//     yearEstablished: "",
//     products: [],
//     certifications: [],
//     legalStructure: "",
//     businessModel: "",
//     productsOfInterest: [],
//     partnershipGoals: "",
//     targetMarkets: [],
//     uniqueSellingPoints: "",
//     declaration: false,
//   });

//   const steps = [
//     "General Information",
//     "Business Details",
//     "Business Operations",
//     "Product Preferences",
//     "Partnership Goals",
//     "Pre-Screening Declaration",
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       if (Array.isArray(formData[name])) {
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: checked
//             ? [...prevData[name], value]
//             : prevData[name].filter((item) => item !== value),
//         }));
//       } else {
//         setFormData((prevData) => ({ ...prevData, [name]: checked }));
//       }
//     } else {
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };

//   const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
//   const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted successfully!");
//     console.log(formData);
//   };

//   return (
//     <div className="eoi-form-container w-50 my-5" style={{color:"black !important",marginLeft:"200px"}}>
//       <h1>Expression of Interest (EOI) Form</h1>
//       <h2>{steps[currentStep - 1]}</h2>

//       <form onSubmit={handleSubmit}>
//         {currentStep === 1 && (
//           <div>
//             <label>
//               Business Name:
//               <input
//                 type="text"
//                 name="businessName"
//                 value={formData.businessName}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Contact Person:
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={formData.contactPerson}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Address:
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Phone:
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Website (optional):
//               <input
//                 type="url"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//         )}

//         {currentStep === 2 && (
//           <div>
//             <label>
//               Type of Business:
//               <select
//                 name="businessType"
//                 value={formData.businessType}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Individual Artisan">Individual Artisan</option>
//                 <option value="Family Business">Family Business</option>
//                 <option value="Cooperative">Cooperative</option>
//                 <option value="Institution">Institution</option>
//               </select>
//             </label>
//             <label>
//               Year Established:
//               <input
//                 type="number"
//                 name="yearEstablished"
//                 value={formData.yearEstablished}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Certifications:
//               <div>
//                 <input
//                   type="checkbox"
//                   name="certifications"
//                   value="GI Tags"
//                   onChange={handleChange}
//                 />
//                 GI Tags
//                 <input
//                   type="checkbox"
//                   name="certifications"
//                   value="Fair Trade Certification"
//                   onChange={handleChange}
//                 />
//                 Fair Trade Certification
//                 <input
//                   type="checkbox"
//                   name="certifications"
//                   value="Eco-Friendly Certification"
//                   onChange={handleChange}
//                 />
//                 Eco-Friendly Certification
//                 <input
//                   type="checkbox"
//                   name="certifications"
//                   value="Other"
//                   onChange={handleChange}
//                 />
//                 Other
//               </div>
//             </label>
//           </div>
//         )}

//         {currentStep === 3 && (
//           <div>
//             <label>
//               Legal Structure:
//               <select
//                 name="legalStructure"
//                 value={formData.legalStructure}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="Sole Proprietorship">Sole Proprietorship</option>
//                 <option value="Partnership">Partnership</option>
//                 <option value="Cooperative">Cooperative</option>
//                 <option value="LLC">LLC</option>
//               </select>
//             </label>
//             <label>
//               Business Model:
//               <div>
//                 <input
//                   type="checkbox"
//                   name="businessModel"
//                   value="E-Commerce Business"
//                   onChange={handleChange}
//                 />
//                 E-Commerce Business
//                 <input
//                   type="checkbox"
//                   name="businessModel"
//                   value="Brick-and-Mortar Retailer"
//                   onChange={handleChange}
//                 />
//                 Brick-and-Mortar Retailer
//                 <input
//                   type="checkbox"
//                   name="businessModel"
//                   value="Artisanal Producer"
//                   onChange={handleChange}
//                 />
//                 Artisanal Producer
//                 <input
//                   type="checkbox"
//                   name="businessModel"
//                   value="Wholesale Supplier"
//                   onChange={handleChange}
//                 />
//                 Wholesale Supplier
//                 <input
//                   type="checkbox"
//                   name="businessModel"
//                   value="Export-Oriented Enterprise"
//                   onChange={handleChange}
//                 />
//                 Export-Oriented Enterprise
//               </div>
//             </label>
//           </div>
//         )}

//         {currentStep === 4 && (
//           <div>
//             <label>
//               Products of Interest:
//               <div>
//                 <input
//                   type="checkbox"
//                   name="productsOfInterest"
//                   value="Pashmina Shawls"
//                   onChange={handleChange}
//                 />
//                 Pashmina Shawls
//                 <input
//                   type="checkbox"
//                   name="productsOfInterest"
//                   value="Carpets and Rugs"
//                   onChange={handleChange}
//                 />
//                 Carpets and Rugs
//                 <input
//                   type="checkbox"
//                   name="productsOfInterest"
//                   value="Paper Mâché"
//                   onChange={handleChange}
//                 />
//                 Paper Mâché
//                 <input
//                   type="checkbox"
//                   name="productsOfInterest"
//                   value="Woodwork"
//                   onChange={handleChange}
//                 />
//                 Woodwork
//                 <input
//                   type="checkbox"
//                   name="productsOfInterest"
//                   value="Copperware"
//                   onChange={handleChange}
//                 />
//                 Copperware
//                 <input
//                   type="checkbox"
//                   name="productsOfInterest"
//                   value="Embroidered Textiles"
//                   onChange={handleChange}
//                 />
//                 Embroidered Textiles
//                 <input
//                   type="checkbox"
//                   name="productsOfInterest"
//                   value="Other"
//                   onChange={handleChange}
//                 />
//                 Other
//               </div>
//             </label>
//           </div>
//         )}

//         {currentStep === 5 && (
//           <div>
//             <label>
//               Partnership Goals:
//               <textarea
//                 name="partnershipGoals"
//                 value={formData.partnershipGoals}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Target Markets:
//               <div>
//                 <input
//                   type="checkbox"
//                   name="targetMarkets"
//                   value="U.S. Retail Market"
//                   onChange={handleChange}
//                 />
//                 U.S. Retail Market
//                 <input
//                   type="checkbox"
//                   name="targetMarkets"
//                   value="E-Commerce Platform"
//                   onChange={handleChange}
//                 />
//                 E-Commerce Platform
//                 <input
//                   type="checkbox"
//                   name="targetMarkets"
//                   value="International Wholesale Market"
//                   onChange={handleChange}
//                 />
//                 International Wholesale Market
//                 <input
//                   type="checkbox"
//                   name="targetMarkets"
//                   value="Other"
//                   onChange={handleChange}
//                 />
//                 Other
//               </div>
//             </label>
//           </div>
//         )}

//         {currentStep === 6 && (
//           <div>
//             <label>
//               Declaration:
//               <input
//                 type="checkbox"
//                 name="declaration"
//                 checked={formData.declaration}
//                 onChange={handleChange}
//                 required
//               />
//               I confirm that the information provided is accurate and agree to the terms.
//             </label>
//           </div>
//         )}

//         <div className="form-navigation">
//           {currentStep > 1 && <button type="button" onClick={prevStep}>Previous</button>}
//           {currentStep < steps.length && <button type="button" onClick={nextStep}>Next</button>}
//           {currentStep === steps.length && <button type="submit">Submit</button>}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EOIForm;
