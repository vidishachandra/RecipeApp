import react from "react";
import './About.css';
function About(){
    return(
        <div>
            <h2 style={{color:"white"}}>something</h2>
        <p style={{color:"white"}}>something</p>
        <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>We aim to make cooking a lot easier for you. This website is a one stop for all you cooking needs.</p>
</div>

<div class="row">
  <div class="column">
    <div class="card">

      <div class="container">
        <h2>Vishakha Hegde</h2>
        <p class="title">Co-founder</p>
        <p>Aspiring web developer</p>
        <p>vishakhahegde@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">

      <div class="container">
        <h2>Vibha H Murthy</h2>
        <p class="title">Co-founder</p>
        <p>Aspiring web developer</p>
        <p>vibhahmurthy@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">

      <div class="container">
        <h2>Vidisha Chandra</h2>
        <p class="title">Co-founder</p>
        <p>Aspiring web developer</p>
        <p>vidishasateesh@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

</div>

    );
}

export default About;