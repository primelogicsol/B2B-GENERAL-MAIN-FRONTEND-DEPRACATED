import React from 'react';
import ContentSection from './ContentSetion';
import TextBoxComponent from './TextBox';

const SectionComponent = ({ title, description, textBoxes }) => {
    console.log("this",title)
  return (
    <div className="row">
      <ContentSection title={title} description={description} />
      
      {textBoxes.map((box, index) => (
        <TextBoxComponent
          key={index}
          heading={box.heading}
          highlightedText={box.highlightedText}
          description={box.description}
        />
      ))}
    </div>
  );
};

export default SectionComponent;
