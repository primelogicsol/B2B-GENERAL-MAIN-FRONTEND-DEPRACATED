import React, { useState } from 'react';
import { ShieldCheck, Globe } from "lucide-react";

const ProductDesignProtection = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  
  const topFeatures = [ {
    id: 'design-authentication',
    title: "Design Authentication",
    description: "Our platform implements an advanced blockchain-based authentication system that creates unique digital signatures for each product design. This provides our partners with immutable proof of creation and ownership, establishing a crucial foundation for all business relationships.",
    icon: <ShieldCheck/>
  },
  {
    id: 'global-monitoring',
    title: "Global Monitoring Network",
    description: "Partnership with our platform includes access to our AI-powered monitoring system that continuously scans millions of online product listings globally. This proactive protection is a prerequisite for any serious business partnership, automatically detecting potential infringements before they impact your business.",
    icon: "globe"
  },
  {
    id: 'digital-rights',
    title: "Digital Rights Management (DRM)",
    description: "Our mandatory DRM technologies protect designs from unauthorized copying and distribution—a vital requirement for entering into our partner network. This security layer ensures only authorized parties within our partnership ecosystem can access and utilize protected designs.",
    icon: "lock-closed"
  },
  {
    id: 'reverse-image',
    title: "Reverse Image Search",
    description: "All partners benefit from our proprietary image recognition and reverse search technology. This non-negotiable protection layer scans the internet continuously to identify unauthorized copies of your designs, providing immediate alerts and enabling swift action through our partnership network.",
    icon: "search"
  }]; // Your existing array
  const bottomFeatures = [ {
    id: 'secure-hosting',
    title: "Secure Design Hosting Platforms",
    description: "Partnership requires utilizing our secure, encrypted hosting platforms—the only way to guarantee your designs remain protected. Our multi-layered security infrastructure is a baseline requirement for all partnerships, preventing unauthorized access and ensuring designs are stored with military-grade protection.",
    icon: "server"
  },
  {
    id: 'geographical',
    title: "Geographical Distribution Control",
    description: "Our platform's integrated licensing and geographical restriction tools are essential partnership features that give you complete control over where and how your designs are sold. This partnership-exclusive capability ensures only authorized vendors within our network can distribute designs within specified regions.",
    icon: "map"
  },
  {
    id: 'copyright',
    title: "Copyright Registration Systems",
    description: "Access to our streamlined copyright registration process is a core benefit of partnership. This partnership-only service helps register designs with relevant intellectual property authorities, providing the legal foundation required for legitimate business relationships and market protection.",
    icon: "document-text"
  },
  {
    id: 'legal-action',
    title: "Legal Action Framework",
    description: "Our platform's partnerships with international IP law firms is a critical advantage for all network members. This partnership benefit provides immediate access to legal consultation and representation, establishing the enforcement mechanism that makes our business relationships secure and sustainable.",
    icon: "scale"
  }]; // Your existing array

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center mb-6 relative">
            <div className="h-1 w-12 bg-orange-500 absolute -bottom-2 left-0 right-0 mx-auto transform transition-all duration-300 group-hover:w-full"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
              Product Design <span className="text-orange-500">Protection</span>
            </h1>
          </div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our platform's comprehensive product design protection is a <span className="font-bold text-orange-600">vital condition</span> for 
            all business partnerships. We've developed this robust protection system specifically to 
            safeguard intellectual property, create trust, and establish the secure foundation 
            necessary for successful collaborations in today's digital marketplace.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-10 group">
            <div className="h-1 w-8 bg-orange-500 mr-3 transition-all duration-300 group-hover:w-12"></div>
            <h2 className="text-2xl font-bold text-gray-800">Partnership Entry Requirements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {topFeatures.map(feature => (
              <FeatureCard 
                key={feature.id}
                {...feature}
                isActive={activeFeature === feature.id}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomFeatures.map(feature => (
              <FeatureCard 
                key={feature.id}
                {...feature}
                isActive={activeFeature === feature.id}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 shadow-lg text-white mb-16">
          <h3 className="text-xl font-bold mb-4">Why Design Protection Is Required For Partnership</h3>
          <p className="mb-4">
            In today's market environment, unprotected product designs represent an unacceptable business risk. 
            Our platform's comprehensive protection system isn't just a feature—it's the fundamental requirement 
            for entering our partner network and accessing our marketplace ecosystem.
          </p>
          <p>
            Partners who implement our full protection suite experience 94% fewer intellectual property 
            violations and report 83% higher confidence in expanding their product lines with innovative designs.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Ready to secure your designs and access our partnership network?</h3>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-medium">
            Apply for Protected Partnership
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ id, title, description, icon, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`p-6 border rounded-lg shadow-lg ${isActive ? 'bg-orange-100' : 'bg-white'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center mb-4">
        <span className="h-8 w-8 text-orange-500">{icon}</span>
        <h4 className="ml-2 text-lg font-bold text-gray-800">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductDesignProtection;
