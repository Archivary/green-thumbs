import React from 'react';
import plant1 from "../../assets/plant1.jpg";
import plant2 from "../../assets/plant2.jpg";
import plant3 from "../../assets/plant3.jpg";
import plant4 from "../../assets/plant4.jpg";

function Home() {
    const plants = [
        {type: "Poppy", image: plant1, season: "Summer" },
        {type: "Chamomile", image: plant2, season: "Spring" },
        {type: "Fall Folliage", image: plant3, season: "Fall"},
        {type: "Kale", image: plant4, season: "Winter" }
    ]
    return (
      <section >
          <br></br>
          <div class="dropdown">
          <button class="dropbtn"> Search for Plants by Season</button>
          <div class="dropdown-content">
                <a href="#">Spring</a>
                <a href="#">Summer</a>
                <a href="#">Fall</a>
                <a href="#">Winter </a>
            </div>
          </div>

          <div className="homeGrid"> 
          <ul> 
            {plants.map((plant) => (
                <li> 
            <h3>{plant.type}</h3>
            <img
                src={plant.image}
                alt={plant.type}
                className="img"/>
            </li>
            ))}
            </ul>
           </div>

      </section>
    );
  }
  
  export default Home;