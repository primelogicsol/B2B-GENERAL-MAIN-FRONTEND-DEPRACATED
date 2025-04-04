import React, { useState } from 'react';
import virtual from "../../assets/images/virtual.png" ;
import inperson from "../../assets/images/inperson.png";
const AppointmentServices = () => {
  const [showVirtualSection, setShowVirtualSection] = useState(false);
  const [showInPersonSection, setShowInPersonSection] = useState(false);
  const [showTimeSlotsSection, setShowTimeSlotsSection] = useState(false);
  const [showConfirmationSection, setShowConfirmationSection] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const handleServiceSelection = (type) => {
    if (type === 'virtual') {
      setShowVirtualSection(true);
      setShowInPersonSection(false);
    } else if (type === 'inperson') {
      setShowInPersonSection(true);
      setShowVirtualSection(false);
    }
    setShowTimeSlotsSection(false);
    setShowConfirmationSection(false);
  };

  const handleTopicSelection = () => {
    setShowTimeSlotsSection(true);
  };

  const handleTimeSlotSelection = (time) => {
    setSelectedTime(time);
    setShowConfirmationSection(true);
  };

  return (
    <div className="service-area mb-5">
      <div className="container">
        <div className="row align-items-center" id="service-list">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <div className="service-single-box" id="virtual-box">
              <div className="service-icon">
                <img src={virtual} alt="Virtual" />
              </div>
              <div className="service-content">
                <h3 className="service-title">Virtual Meeting</h3>
                <div className="service-btn">
                  <button className="read-more" onClick={() => handleServiceSelection('virtual')}  style={{ backgroundColor: 'transparent', border: 'none', padding: '10px 20px' }}>
                    <i className="fas fa-plus"></i> Select
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="service-single-box" id="inperson-box">
              <div className="service-icon">
                <img src={inperson} alt="In-Person" />
              </div>
              <div className="service-content">
                <h3 className="service-title">In-Person Meeting</h3>
                <div className="service-btn">
                  <button className="read-more" onClick={() => handleServiceSelection('inperson')}  style={{ backgroundColor: 'transparent', border: 'none', padding: '10px 20px' }}>
                    <i className="fas fa-plus"></i> Select

                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        {showVirtualSection && (
          <div id="virtual-section" className="hidden-section">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-6">
                <h3>Choose Topic for Virtual Meeting:</h3>
              </div>
              <div className="col-lg-3"></div>
            </div>
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-3">
                <button className="topic-btn" onClick={handleTopicSelection}>General Inquiry</button>
              </div>
              <div className="col-3">
                <button className="topic-btn" onClick={handleTopicSelection}>Partnership Discussion</button>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        )}
        {showInPersonSection && (
          <div id="inperson-section" className="hidden-section">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-6">
                <h3>Choose Topic for In-Person Meeting:</h3>
              </div>
              <div className="col-lg-3"></div>
            </div>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-3">
                <button className="topic-btn" onClick={handleTopicSelection}>General Inquiry</button>
              </div>
              <div className="col-3">
                <button className="topic-btn" onClick={handleTopicSelection}>Product Showcase</button>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        )}
        {showTimeSlotsSection && (
          <div id="time-slots-section" className="hidden-section">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-6">
                <h3>Choose your Time Slot:</h3>
              </div>
              <div className="col-lg-3"></div>
            </div>
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-md-3">
                <button className="time-slot-btn" onClick={() => handleTimeSlotSelection('December 15, 2024 - Monday - 09:00 AM')}>December 15, 2024 - Monday - 09:00 AM</button>
              </div>
              <div className="col-md-3">
                <button className="time-slot-btn" onClick={() => handleTimeSlotSelection('December 15, 2024 - Monday - 02:00 PM')}>December 15, 2024 - Monday - 02:00 PM</button>
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-md-3">
                <button className="time-slot-btn" onClick={() => handleTimeSlotSelection('December 16, 2024 - Tuesday - 09:00 AM')}>December 16, 2024 - Tuesday - 09:00 AM</button>
              </div>
              <div className="col-md-3">
                <button className="time-slot-btn" onClick={() => handleTimeSlotSelection('December 16, 2024 - Tuesday - 02:00 PM')}>December 16, 2024 - Tuesday - 02:00 PM</button>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        )}
        {showConfirmationSection && (
          <div id="confirmation-section" className="hidden-section">
            <h3>Appointment Confirmed!</h3>
            <p>Your appointment is scheduled for <span>{selectedTime}</span>.</p>
            <a href="#" id="confirmation-link">Click here to book your appointment</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentServices;
