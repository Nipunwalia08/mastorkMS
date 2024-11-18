"use client";

import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "fa-solid fa-gear",
    title: "Key Features",
    shortText: `
      <ul class="custom-list">
        <li><strong>User-Friendly Interface:</strong> The app boasts a clean and intuitive interface, making it easy for players of all skill levels to navigate and enjoy.</li>
        <li><strong>Multiplayer Functionality:</strong> Engage with multiple players in real-time, enhancing the competitive spirit and user engagement.</li>
        <li><strong>Secure and Reliable:</strong> Built with the latest security protocols to ensure a safe and fair gaming environment for all users.</li>
        <li><strong>Customizable Settings:</strong> Easily tweak game settings to fit your specific needs and preferences, providing a personalized gaming experience.</li>
        <li><strong>In-App Purchases and Ads Integration:</strong> Monetize your app efficiently with built-in support for in-app purchases and advertisement placements.</li>
        <li><strong>Unity Build with Winning Percentage Control:</strong> Admin can manage the winning percentage, set at 60% for players and 40% for the admin.</li>
        <li><strong>Comprehensive Admin Panel:</strong> Manage all games, user balances, and game settings from a powerful admin panel. Set commission rates, manage user balances, and oversee game history with ease.</li>
        <li><strong>Real Cash Games:</strong> Integrate real cash gameplay with multiple payment gateways such as Razorpay, Paytm, and Cashfree.</li>
      </ul>
    `,
    serviceDetailsLink: "",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-building-lock",
    title: "Additional Features",
    shortText: `
      <ul class="custom-list">
        <li><strong>Chat Option:</strong> In-game chat for player interaction.</li>
        <li><strong>Waiting Room:</strong> Manage players waiting to join games.</li>
        <li><strong>Player Management:</strong> Comprehensive tools for managing player profiles and balances.</li>
        <li><strong>Push Notifications:</strong> Automated and manual push notifications to keep players engaged.</li>
        <li><strong>Purchase Coins:</strong> Integrate with payment gateways like Razorpay, Paytm, and Cashfree for purchasing in-game currency.</li>
        <li><strong>Leader Board:</strong> Display top players and enhance competitive spirit.</li>
        <li><strong>Settings:</strong> Options for sound, game variations, how-to-play guides, privacy policy, terms and conditions, help, and support.</li>
        <li><strong>Profile Updates:</strong> Allow players to update their profiles easily.</li>
        <li><strong>Firebase Integration:</strong> Analytics and push notifications for better user engagement.</li>
        <li><strong>Dynamic Options:</strong> Manage all features dynamically from the admin panel, including currency options (USD, Rupee, Coins).</li>
        <li><strong>Extended Version Features:</strong> 
          <ul class="custom-list">
            <li>Private Table: Invite anyone to play with you in a private setting.</li>
            <li>Custom Table: Create tables with your choice of bet values.</li>
          </ul>
        </li>
      </ul>
    `,
    serviceDetailsLink: "",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-certificate",
    title: "Available Games",
    shortText: `
      <ul class="custom-list">
        <li><strong>Teen Patti</strong></li>
        <li><strong>Jackpot Teen Patti:</strong> Global option to play with unlimited users at a time, single select option to place bets.</li>
        <li><strong>Private Teen Patti</strong></li>
        <li><strong>Point Rummy:</strong> Options for 2-5 players, admin-managed table point values, auto short option, first and second life options, all integrated rules as per Rummy Circle.</li>
        <li><strong>Deal Rummy</strong></li>
        <li><strong>Pool Rummy</strong></li>
        <li><strong>Dragon Vs Tiger:</strong> Global option to play with unlimited users at a time, single select option to place bets.</li>
        <li><strong>Andar Bahar:</strong> Room-wise game management from the admin panel, global option to play with unlimited users at a time.</li>
        <li><strong>7 Ups and Down:</strong> Global option to play with unlimited users at a time, single select option to place bets.</li>
        <li><strong>Car Roulette</strong></li>
        <li><strong>Animal Roulette</strong></li>
        <li><strong>Multi-Color Predictions Games</strong></li>
        <li><strong>Poker</strong></li>
        <li><strong>Heads & Tails</strong></li>
        <li><strong>Red vs Black</strong></li>
        <li><strong>Online Ludo</strong></li>
        <li><strong>Ludo with Computer</strong></li>
        <li><strong>Local Play Ludo</strong></li>
        <li><strong>Baccarat</strong></li>
        <li><strong>21+ Gaming Betting App</strong></li>
      </ul>
    `,
    serviceDetailsLink: "",
    aosDelay: "300",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className=" pt-100 pb-40">
        <div className="container">
          <div className="section-title">
            <h2>Game Features</h2>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 4).map((value, i) => (
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={i}>
                  <div
                    className="saas-services-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    {/* <i className={`icon ${value.iconName}`} style={{
                    background: "linear-gradient(to right, #a8ff78, #78ffd6)",
                    backgroundClip: "text"
               
                  }}></i> */}
                    <h3>
                      <Link href={value.serviceDetailsLink} style={{color:"#1e1e1e"}}>{value.title}</Link>
                    </h3>
                    <div
                      className="custom-list-container"
                      dangerouslySetInnerHTML={{ __html: value.shortText }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-list {
          list-style-type: none;
          padding: 0;
          text-align: left;
        }
        .custom-list-container {
          text-align: left;
        }
      `}</style>
    </>
  );
};

export default Services;
