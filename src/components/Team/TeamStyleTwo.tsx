"use client";

import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/photo-output.jpg",
    name: "Dhruv Garg",
    designation: "CEO",
    aosDelay: "100",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/dhruv-garg-/",
      },
      // {
      //   iconName: "fa-brands fa-twitter",
      //   url: "https://twitter.com/",
      // },
      // {
      //   iconName: "fa-brands fa-facebook-f",
      //   url: "https://facebook.com/",
      // },
      // {
      //   iconName: "fa-brands fa-instagram",
      //   url: "https://instagram.com/",
      // },
      // {
      //   iconName: "fa-brands fa-dribbble",
      //   url: "https://dribbble.com/",
      // },
    ],
  },
  {
    image: "/images/team/Deepak_Soni_pic.jpg",
    name: "Deepak Soni",
    designation: "Strategic Bussiness Advisor",
    aosDelay: "200",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/deepaksoni/",
      },
      // {
      //   iconName: "fa-brands fa-twitter",
      //   url: "https://twitter.com/",
      // },
      // {
      //   iconName: "fa-brands fa-facebook-f",
      //   url: "https://facebook.com/",
      // },
      // {
      //   iconName: "fa-brands fa-instagram",
      //   url: "https://instagram.com/",
      // },
      // {
      //   iconName: "fa-brands fa-dribbble",
      //   url: "https://dribbble.com/",
      // },
    ],
  },
  {
    image: "/images/team/Vivek_innobit_pic.jpg",
    name: "Vivek Mudgil",
    designation: "Technical Advisor",
    aosDelay: "300",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/vmudgil/",
      },
      // {
      //   iconName: "fa-brands fa-twitter",
      //   url: "https://twitter.com/",
      // },
      // {
      //   iconName: "fa-brands fa-facebook-f",
      //   url: "https://facebook.com/",
      // },
      // {
      //   iconName: "fa-brands fa-instagram",
      //   url: "https://instagram.com/",
      // },
      // {
      //   iconName: "fa-brands fa-dribbble",
      //   url: "https://dribbble.com/",
      // },
    ],
  },
  {
    image: "/images/team/2.jpg",
    name: "Nipun Walia",
    designation: "AI Strategist",
    aosDelay: "400",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/nipun-walia//",
      },
      // {
      //   iconName: "fa-brands fa-twitter",
      //   url: "https://twitter.com/",
      // },
      // {
      //   iconName: "fa-brands fa-facebook-f",
      //   url: "https://facebook.com/",
      // },
      // {
      //   iconName: "fa-brands fa-instagram",
      //   url: "https://instagram.com/",
      // },
      // {
      //   iconName: "fa-brands fa-dribbble",
      //   url: "https://dribbble.com/",
      // },
    ],
  },
  // {
  //   image: "/images/team/3.jpg",
  //   name: "Chirag Dodiya",
  //   designation: "Technical Lead",
  //   aosDelay: "500",

  //   socialLinks: [
  //     {
  //       iconName: "fa-brands fa-linkedin-in",
  //       url: "https://www.linkedin.com/in/chiragdotco/",
  //     },
  //     // {
  //     //   iconName: "fa-brands fa-twitter",
  //     //   url: "https://twitter.com/",
  //     // },
  //     // {
  //     //   iconName: "fa-brands fa-facebook-f",
  //     //   url: "https://facebook.com/",
  //     // },
  //     // {
  //     //   iconName: "fa-brands fa-instagram",
  //     //   url: "https://instagram.com/",
  //     // },
  //     // {
  //     //   iconName: "fa-brands fa-dribbble",
  //     //   url: "https://dribbble.com/",
  //     // },
  //   ],
  // },
  {
    image: "/images/team/sanjev.jpeg",
    name: "Sanjeev Aggarwal",
    designation: "Advisor",
    aosDelay: "500",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/sanjeev-aggarwal/",
      },
      // {
      //   iconName: "fa-brands fa-twitter",
      //   url: "https://twitter.com/",
      // },
      // {
      //   iconName: "fa-brands fa-facebook-f",
      //   url: "https://facebook.com/",
      // },
      // {
      //   iconName: "fa-brands fa-instagram",
      //   url: "https://instagram.com/",
      // },
      // {
      //   iconName: "fa-brands fa-dribbble",
      //   url: "https://dribbble.com/",
      // },
    ],
  },
  {
    image: "/images/team/abhinew.jpg",
    name: "Abhishek Tiwari",
    designation: "Senior Business Consultant",
    aosDelay: "600",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/abhishektiwarrii/",
      },
      // {
      //   iconName: "fa-brands fa-twitter",
      //   url: "https://twitter.com/",
      // },
      // {
      //   iconName: "fa-brands fa-facebook-f",
      //   url: "https://facebook.com/",
      // },
      // {
      //   iconName: "fa-brands fa-instagram",
      //   url: "https://instagram.com/",
      // },
      // {
      //   iconName: "fa-brands fa-dribbble",
      //   url: "https://dribbble.com/",
      // },
    ],
  }
  // {
  //   image: "/images/team/team11.jpg",
  //   name: "Williams Smith",
  //   designation: "Front-end Specialist",
  //   aosDelay: "600",

  //   socialLinks: [
  //     {
  //       iconName: "fa-brands fa-linkedin-in",
  //       url: "https://linkedin.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-twitter",
  //       url: "https://twitter.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-facebook-f",
  //       url: "https://facebook.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-instagram",
  //       url: "https://instagram.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-dribbble",
  //       url: "https://dribbble.com/",
  //     },
  //   ],
  // },
  // {
  //   image: "/images/team/team12.jpg",
  //   name: "Brown",
  //   designation: "Marketing Specialist",
  //   aosDelay: "700",

  //   socialLinks: [
  //     {
  //       iconName: "fa-brands fa-linkedin-in",
  //       url: "https://linkedin.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-twitter",
  //       url: "https://twitter.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-facebook-f",
  //       url: "https://facebook.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-instagram",
  //       url: "https://instagram.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-dribbble",
  //       url: "https://dribbble.com/",
  //     },
  //   ],
  // },
  // {
  //   image: "/images/team/team13.jpg",
  //   name: "Taylor",
  //   designation: "Graphics Designer",
  //   aosDelay: "800",

  //   socialLinks: [
  //     {
  //       iconName: "fa-brands fa-linkedin-in",
  //       url: "https://linkedin.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-twitter",
  //       url: "https://twitter.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-facebook-f",
  //       url: "https://facebook.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-instagram",
  //       url: "https://instagram.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-dribbble",
  //       url: "https://dribbble.com/",
  //     },
  //   ],
  // },
  // {
  //   image: "/images/team/team9.jpg",
  //   name: "Tremblay",
  //   designation: "SEO Specialist",
  //   aosDelay: "900",

  //   socialLinks: [
  //     {
  //       iconName: "fa-brands fa-linkedin-in",
  //       url: "https://linkedin.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-twitter",
  //       url: "https://twitter.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-facebook-f",
  //       url: "https://facebook.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-instagram",
  //       url: "https://instagram.com/",
  //     },
  //     {
  //       iconName: "fa-brands fa-dribbble",
  //       url: "https://dribbble.com/",
  //     },
  //   ],
  // },
];

const TeamStyleTwo = () => {
  return (
    <>
      <div className="pt-100 pb-70 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="team-card text-center">
                    <div className="team-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={510}
                        height={510}
                      />

                      <div className="social-links">
                        <div className="d-table">
                          <div className="d-table-cell">
                            <ul>
                              {value.socialLinks.map((value, i) => (
                                <li key={i}>
                                  <a href={value.url} target="_blank">
                                    <i className={value.iconName}></i>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="team-caption">
                      <h3>{value.name}</h3>
                      <p>{value.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStyleTwo;
