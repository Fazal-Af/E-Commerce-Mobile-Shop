import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import me from  '../../images/me.jpg'
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.facebook.com/profile.php?id=100041079672191";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">ABOUT US</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={me}
              alt="Founder"
            />
            <Typography>Fazal Khaliq</Typography>
            <Button onClick={visitInstagram} color="primary" target="/blank">
              Visit Facebook
            </Button>
            <span>
              This is a Online Mobile Shop Made by @fazalkhaliq.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://instagram.com/fazal.afridi863?igshid=ZGUzMzM3NWJiOQ==" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
