import React from 'react';
import plant1 from "../../assets/plant1.jpg";
import plant2 from "../../assets/plant2.jpg";
import plant3 from "../../assets/plant3.jpg";
import plant4 from "../../assets/plant4.jpg";

function Home() {
    return (
      <section >
          <h2>Search for Plants</h2>
          <div> 
              <h3>Poppy</h3>
            <img
                src={plant1}
                alt={"headshot"}
                className="img-thumbnail mx-1"/>
                </div>
            <div>    
            <h3>Chamomile</h3> 
            <img
                src={plant2}
                alt={"headshot"}
                className="img-thumbnail mx-1"/>
                </div>
            <div> 
            <h3>Fall Folliage</h3>   
            <img
                src={plant3}
                alt={"headshot"}
                className="img-thumbnail mx-1"/>
                </div>
            <div> 
            <h3>Kale</h3>
            <img
                src={plant4}
                alt={"headshot"}
                className="img-thumbnail mx-1"/>
                </div>
      </section>
    );
  }
  
  export default Home;