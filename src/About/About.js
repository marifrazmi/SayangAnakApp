import React from "react";
import "./About.css";
import { BsGithub } from "react-icons/bs"
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>About App</h1>
        <div class="topic">
        <p>
        This SayangAnak App was made to fullfill final assignment of Mobile Device Programming Practice. This app will display information about the list and details of toys sold at the SayagAnak Store. This app created using React PWA Technology, using JSON Server to get the toys data.
      </p>
      </div>
      <div class="about">
      <img class="img" src="./profil.png"></img>
      <h2>Muhammad Arif Razmi</h2>
      </div>
      <div class="information">
      <div className="bio">
        <p className="info">
          <AiOutlinePhone className="icon" size="18px" color="#484d49" />085312129474</p>
      </div>
      <div className="bio">
            <p className="info">
              <FiMail className="icon" size="18px" color="#484d49" />
              razmi675@gmail.com
            </p>
      </div>
      <div className="bio">
            <a href="https://github.com/marifrazmi" className="info">
              <BsGithub className="icon" size="18px" color="#484d49" />
              marifrazmi
            </a>
      </div>
      </div>
      </div>
    );
  }
}

export default About;