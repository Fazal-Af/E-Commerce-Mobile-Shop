import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import {BsFacebook,BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/fazal.afridi863?igshid=ZGUzMzM3NWJiOQ==" target="blank"><GrInstagram/></a>
        {/* <a href="">Youtube</a> */}
        <a href="https://www.facebook.com/profile.php?id=100041079672191" target="blank" ><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/fazal-khaliq-7119b1276/" target="blank" ><BsLinkedin/></a>
        
      </div>

      <div className="midFooter">
        <h1>ONLINE MOBILE SHOP</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Fazal khaliq</p>
      </div>
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
    </footer>
  );
};

export default Footer;
