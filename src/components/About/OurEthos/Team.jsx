import React from 'react';
import tick from '../../../assets/images/right-arrow.png'
const TeamSection = ({ imageSrc, teamTitle, teamSubtitle, teamMembers }) => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="cs_about_thumb">
              <img width="100%" src={imageSrc} alt="About" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="cs_about_content pt-3">
              <div className="cs_section_heading cs_fs_482 cs_style_1 cs_mb_22">
                <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
                  <b>{teamTitle}</b>
                </h3>
                <h2 className="cs_section_title cs_semibold mb-0">
                  {teamSubtitle}
                </h2>
              </div>

              <div className="cs_tabs mt-5">
                <div className="cs_tab_body">
                  <div className="cs_tab active" id="tab_1">
                    <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                      {teamMembers.map((member, index) => (
                        <li key={index} className='d-flex align-items-start'>
                          <img src={tick} alt="arrow" style={{marginRight:'5px',marginTop:"10px"}}/>
                           {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cs_height_33 cs_height_lg_30"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default TeamSection;
