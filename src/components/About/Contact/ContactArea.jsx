/* eslint-disable no-unused-vars */
import React from "react";
import contactImage from '../../../assets/images/conatct.png';
import webIcon from '../../../assets/icon/1.png';
import locationIcon from '../../../assets/logos/2.png'
const contactInfo = {
  addresses: [
    {
      title: "Corporation Address",
      address: "4445 Corporation Ln Ste 264, Virginia Beach, Virginia 23462 - USA",
    },
    {
      title: "Business Principal Address",
      address: "9480 Main St # 1185 Fairfax, VA 22031 - Greater Washington Area - USA",
    },
    {
      title: "Kashmir India Office",
      address: "Artisan Lane - 2 Gousia Colony Ext Zakura - Srinagar 190006",
    },
  ],
  officeHours: {
    usa: {
      days: "Monday to Friday",
      hours: "9:00 AM – 5:00 PM (EST)",
      closed: "Saturday and Sunday",
    },
    india: {
      days: "Monday to Friday",
      hours: "9:30 AM – 6:30 PM (IST)",
      closed: "Sunday",
    },
  },
  coordination: {
    timeZone: {
      title: "Time Zone Coordination",
      indiaAhead: "9 hours and 30 minutes ahead of Eastern Standard Time (EST)",
      bestTimes: {
        usa: "8:00 AM – 11:00 AM (EST)",
        india: "5:30 PM – 8:30 PM (IST)",
      },
    },
  },
};

const ContactArea = () => {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="row">
          {/* Contact Information Section */}
          <div className="col-lg-6 col-md-6" >
            <div className="section-title text-left">
              <h5 className="section-sub-title">CONTACT US</h5>

              {contactInfo.addresses.map((item, index) => (
                <div key={index} className="mb-5" style={{ lineHeight: "7px" }}>
                  <h3 className="cs_section_title cs_semibold mb-0 text-xs md:text-base">
  <img src={locationIcon} alt="Logo" /> {item.title}
</h3>

                  <p className="md:ml-5 text-xs md:text-base" style={{lineHeight:'20px' }}>{item.address}</p>
                </div>
              ))}

              <div className="mb-3 m-3" style={{ lineHeight: "23px" }}>
                <p className="md:ml-5 text-xs md:text-base">
                  <b>Standard Office Hours</b>: {contactInfo.officeHours.usa.days} {contactInfo.officeHours.usa.hours} <br />
                  <b>Closed</b>: {contactInfo.officeHours.usa.closed}
                </p>
              </div>

              <div className="m-3" style={{ lineHeight: "23px" }}>
                <p className="md:ml-5 text-xs md:text-base">
                  <b>Standard Office Hours</b>: {contactInfo.officeHours.india.days} {contactInfo.officeHours.india.hours} <br />
                  <b>Closed</b>: {contactInfo.officeHours.india.closed}
                </p>
              </div>

              <h5 className="section-sub-title">Coordination</h5>

              <div className="mb-5 text-xs md:text-base" style={{ lineHeight: "12px" }}>
                <h3 className="cs_section_title cs_semibold mb-0 text-xs md:text-base">
                  <img src={webIcon} alt="Icon" /> {contactInfo.coordination.timeZone.title}
                </h3>
                <p style={{ marginLeft: "2.5rem",lineHeight:"14px" }}>
                  <b>India is ahead of the USA by:</b>
                </p>
                <p style={{ marginLeft: "2.5rem",lineHeight:"14px" }}>{contactInfo.coordination.timeZone.indiaAhead}</p>
                <br />
                <p style={{ marginLeft: "2.5rem",lineHeight:"14px" }}>
                  <b>Best Times for Cross Meetings:</b>
                </p>
                <p style={{ marginLeft: "2.5rem",lineHeight:"14px" }}>
                  <b>USA (EST)</b>: {contactInfo.coordination.timeZone.bestTimes.usa}
                </p>
                <p style={{ marginLeft: "2.5rem",lineHeight:"14px" }}>
                  <b>India (IST)</b>: {contactInfo.coordination.timeZone.bestTimes.india}
                </p>
              </div>
            </div>
            <div className="contact_from_box">
              
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <img width="100%" src={contactImage} alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
