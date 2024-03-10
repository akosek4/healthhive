import React from "react";
import honeybee from "./honeybee 2.png";
const Topbar = () => {
  return (
    <div>
      <h1 className="Topbar">share. connect. support.</h1>
      <div className="MiddleSection">
    
        <div className="ImageAndTitle">
          <h2 className="Parent">
            <div className="Let">Welcome to</div>
            <div className="Health">Health Hive</div>
          </h2>
          <img src={honeybee} className="HoneyBeeImage"/>
        </div>
        <p className="Introduction">
          Within these virtual walls, we offer a supportive community where
          individuals can share their experiences anonymously under specific
          diagnoses. Navigating health challenges can be isolating, and we
          recognize the importance of providing a safe space for open dialogue.
          Here, your journey is valid, your voice matters, and you are not
          alone. Health Hive is more than a forum; it's a collective embrace of
          shared wisdom, empathy, and healing. Join us as we foster connections,
          erase judgment, and build a hive of support that transcends the
          boundaries of diagnosis, creating a space where every story
          contributes to a tapestry of strength and resilience.
        </p>
      </div>
    </div>
  );
};

export default Topbar;
