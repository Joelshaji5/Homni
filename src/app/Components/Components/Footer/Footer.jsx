import React from "react";
import "../../../Style/Footer.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="footerDiv">
      <div className="footerImgDiv">
        <img src="./footerLogo.png" alt="logo" className="FooterLogo" />
      </div>
      <div className="footerTxtDiv flex-col">
        <div className="flex SocialMediaLogoDiv">
          <div>
            {" "}
            <img src="/facebook.png" width={24} height={24} alt="Facebook" />
          </div>
          <div className="ml-3">
            {" "}
            <img src="/Instagram.png" width={24} height={24} alt="Instagram" />
          </div>
          <div className="ml-3">
            {" "}
            <img src="/Twitter.png" alt="Tweeter" width={24} height={24} />
          </div>
        </div>
        <div className="FooterDivH3">
          <h3>Location - Pune, Navi Mumbai</h3>
          <h3>Email ID - homnident@gmail.com</h3>
          <h3>Phone number - 95037 75068</h3>
          <h4><Link href="/TermsAndCondition">Terms & Conditions</Link></h4>
        </div>
        <div>
          <p className="FooterDivH3">Designed by - TechRift Dynamics</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
