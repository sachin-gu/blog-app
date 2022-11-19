import React from "react";


const About = () => {
  return (

    // <div className="about">
    //   <div className="main">
    //     <img src="images/Sachin.jpg"alt="developer image"/>
    //     <div id="about-text">
    //       <h1>About us</h1>
    //       <h5>Developer & Designer</h5>
    //       <p>I am a front-end web developer. I made this web app for my college project.I am tring to make my web page more responsive.In our project we add more feature as soon as possible.Our more members added soon</p>
    //       <button type="button" id="about-button">Let's Talk</button>
          
    //     </div>
    //   </div>
 
    // </div>

  <div id="about-page">
    <div id="about-section">
      <h1>About us page</h1>
      <p>We am a front-end web developer. I made this web app for my college project.I am tring to make my web page more responsive.In our project we add more feature as soon as possible.</p>
    </div>
    <h2 classname="our-team">Our Team</h2>
    <div id="row">
      <div id="column1">
        <div id="card1">
        <img id="sachin-image" src="images/Sachin.jpg" alt="Sachin" />
          <div id="about-cointainer1">
            <h2>Sachin Gupta</h2>
            <p id="about-title1">
              CEO & Founder
            </p>
            <p>Hello friends, I am the founder of this webpage. I hope you like my webpage
            </p>
            <p><button id="about-button1">Contact</button></p>

          </div>
        </div>
      </div>
    
      <div id="column2">
        <div id="card2">
          <img id="nishant-image" src="images/Nishant.jpg" alt="Nishant" />
          <div id="about-cointainer2">
            <h2>Nishant Kumar Singh</h2>
            <p id="about-title2">
              Art Director
            </p>
            <p>Hello friends, I am the Art director of this webpage. I hope you like my webpage
            </p>
            <p><button id="about-button2">Contact</button></p>

          </div>
        </div>  
      </div>
      <div id="column3">
        <div id="card3">
          <img id="saurabh-image" src="images/Saurabh.jpg" alt="Saurabh" />
          <div id="about-cointainer3">
            <h2>Saurabh Gurung</h2>
            <p id="about-title3">
              Designer
            </p>
            <p>Hello friends, I am the Designer of this webpage. I hope you like my webpage
            </p>
            <p><button id="about-button3">Contact</button></p>

          </div>
        </div>  
      </div>

    </div>
  </div>
    
  );
};

export default About;
