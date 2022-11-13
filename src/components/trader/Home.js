import React from "react";
import homeImage from "../../images/homepage-image.png";
import "../../css/Home.css";


function Home() {
  return (
    <div className="home">
      <h4>Welcome In</h4>
      <p className="text-primary fs-2">MyStore</p>
      <div className="image">
        <img src={homeImage} alt="img" />
      </div>
    </div>
  );
}

export default Home;
