/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../assets/images/your3.png';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';
import image7 from '../../assets/images/6.png';
import image8 from '../../assets/images/process icon/1.png';
import image9 from '../../assets/images/process icon/2.png';
import image10 from '../../assets/images/process icon/3.png';
import image11 from '../../assets/images/process icon/4.png';
import image12 from '../../assets/images/process icon/5.png';

const VendorPartnership = () => {
  return (
    <section
      className="cs_bg_filed"
      data-background="assets/how_to_work_bg.svg"
      style={{ backgroundImage: "url('assets/how_to_work_bg.svg')",width:"100%" }}
    >
      <div className="cs_height_115 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading_1_with_sub">
          <div className="cs_section_heading cs_style_1">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <h2
                  className="cs_section_title ikid cs_fs_48 cs_semibold mb-0 d-flex justify-content-center"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >

                  <img src={image} alt="Your image description" style={{width:"200px"}} className=''/>
                </h2>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                
                <p className="mb-0 mb-tx" style={{fontSize:"22px",textAlign:"justify"}}>
                At De Koshur Crafts, we understand that every business is unique. That's why we offer flexible partnership pathways tailored to your goals, strengths, and vision. Whether you're sourcing for a boutique or expanding your retail business, our programs are designed to provide access to authentic Kashmiri products with ease and confidence, while ensuring the highest standards of quality, ethics, and sustainability.
                 
                </p> 
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_45 cs_height_lg_45"></div>
        <div className="mt-5 animted-xet">
          <div className="row " >
            {[
              {
                image: image1,
                title: "Drop Shipping",
                subtitle: "Vendor Partnership",
                description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 18 Months at Ecommerce Platform<br> <b class="red-color"> `,
                desc2:`Maintain KPI Score  <b class="red-color">  ≥ 7+ Aggregate Platform Performance Score </b> <br> `,
                desc3:`Next Partnership Level  <b class="red-color"> Consignment </b>`,
                icon1:image8,
                icon2:image9,
                icon3:image10,
                link: "/about",
                level:"Level 1"
              },
              {
                image: image4,
                title: "Consignment",
                subtitle: "Vendor Partnership",
                description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 6 Months at Consignment Platform<br> <b class="red-color"> `,
                desc2:`Maintain KPI Score  <b class="red-color"> ≥ 7+ Aggregate Platform Performance Score </b> <br> `,
                desc3:`Next Partnership Level  <b class="red-color"> Exhibition </b>`,
                icon1:image8,
                icon2:image9,
                icon3:image10,
                link: "/about",
                level:"Level 2"
              },
              {
                image: image5,
                title: "Exhibition",
                subtitle: "Vendor Partnership",
                description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 6 Months at Exhibition Platform<br> <b class="red-color"> `,
                desc2:`Maintain KPI Score  <b class="red-color">  ≥ 8+ Aggregate Platform Performance Score </b> <br> `,
                desc3:`Next Partnership Level  <b class="red-color"> Import Export</b>`,
                icon1:image8,
                icon2:image9,
                icon3:image10,
                link: "/about",
                level:"level 3"
              },
              {
                image: image3,
                title: "Import Export",
                subtitle: "Vendor Partnership",
                description: ` </b>Maintain Retention Period <b class="red-color"> ≥ 6 Months at Import Export Platform<br> <b class="red-color"> `,
                desc2:`Maintain KPI Score  <b class="red-color">  ≥ 8+ Aggregate Platform Performance Score </b> <br> `,
                desc3:`Next Partnership Level  <b class="red-color"> Subsidairy</b>`,
                icon1:image8,
                icon2:image9,
                icon3:image10,
                link: "/about",
                level:"Level 4"
              },
              {
                image: image6,
                title: "Investor",

                subtitle: "Vendor Partnership",
                description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 12 Months at Subsidiary Platform<br> <b class="red-color"> `,
                desc2:`Maintain KPI Score  <b class="red-color">  ≥ 8+ Aggregate Platform Performance Score </b> <br> `,
                desc3:`Next Partnership Level  <b class="red-color"> Brick & Mortar</b>`,
                icon1:image8,
                icon2:image9,
                icon3:image10,
                link: "/about",
                level:"level 5"
              },
              {
                image: image2,
                title: "Brick & Mortar",
                subtitle: "Vendor Partnership",
                description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 24 Months at Brick & Mortar Platform<br> <b class="red-color"> `,
                desc2:`Maintain KPI Score  <b class="red-color">  ≥  8+ Aggregate Platform Performance Score </b> <br> `,
                desc3:`Next Partnership Level  <b class="red-color">Franchise</b>`,
                icon1:image8,
                icon2:image9,
                icon3:image10,
                link: "/about",
                level:"Level 6"
              },
              
              {
                image: image11,
                title: "DKC Brand Franchise",
                subtitle: "Vendor Partnership",
                description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 6 Months at Franchise Platform<br> <b class="red-color"> `,
                desc2:`Maintain KPI Score  <b class="red-color">  ≥ 8+ Aggregate Platform Performance Score </b> <br> `,
                desc3:`<b class="green-color"> Enjoy Collaborative US-Kashmir-India Craft Business in the USA </b>`,
                icon1:image8,
                icon2:image9,
                icon3:image10,
                link: "/about",
                level:"Level 7"
              }
            ].map((item, index) => (
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12" key={index}>
                <div className="cs_card_1_col" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">
                  <div className="cs_card cs_style_1">
                    <div className="cs_card_in cs_white_bg">
                      <div className="cs_card_icon cs_center cs_mb_30">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <h6 style={{color:"green"}}>{item.level}</h6>
                      <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">{item.title}</h3>
                      {/* <h3 className="cs_fs_24 cs_semibold cs_mb_6 mb-5">{item.subtitle}</h3> */}
                      <div className='d-flex'> 
                        <img src={item.icon1} alt="" style={{width:"40px",height:'40px'}}/>
                        <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.description}}></p></div>
                        <div className='d-flex'> 
                        <img src={item.icon2} alt="" style={{width:"40px",height:'40px'}}/>
                         <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc2}}></p></div>
                         <div className='d-flex'> 
                        <img src={item.icon3} alt="" style={{width:"40px",height:'40px'}}/>
                        <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc3}}></p></div>
                     
                    </div>
                    <div className="cs_card_shape">
                      <svg width="245" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12" >
                <div className="cs_card_1_col" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">
                  <div className="cs_card cs_style_1">
                    <div className="cs_card_in cs_white_bg">
                      <div className="cs_card_icon cs_center cs_mb_30">
                        <img src={image12} alt="" />
                      </div>
                       <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 pt-5
                       ">Our Six-Year Promise</h3> <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-3 " style={{color:"#ff3d00"}}>Empowering You for Secure Success & Independence in Kashmir Luxury Craft.</h3>
                       <p className='mt-4 mb-0'>Let’s build your path to independence & success today. Empower yourself, inspire others, lead the way as true global entrepreneur.</p>
                      
                    </div>
                    <div className="cs_card_shape">
                      <svg width="245" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorPartnership;
