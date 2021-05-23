import React from 'react';
import plant1 from "../../assets/plant1.jpg";
import plant2 from "../../assets/plant2.jpg";
import plant3 from "../../assets/plant3.jpg";
import plant4 from "../../assets/plant4.jpg";
import { QUERY_PLANT } from "../../utils/queries";
// import { useQuery, useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

import Auth from '../../utils/auth';

function Home() {

    // const { loading, data } = useQuery(QUERY_PLANT);
    const { data } = useQuery(QUERY_PLANT);
    const loggedIn = Auth.loggedIn();

    const plants = [
        { name: "Poppy", image: plant1, season: "Summer", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "high", waterneeds:"low" },
        { name: "Chamomile", image: plant2, season: "Spring", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "average", waterneeds:"average"  },
        { name: "Fall Folliage", image: plant3, season: "Fall", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "low", waterneeds:"high"  },
        { name: "Kale", image: plant4, season: "Winter", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "low", waterneeds:"low"  }
    ]
    return (
        <section >
            <br></br>
            {/* <div class="dropdown">
                <button class="dropbtn"> Search for Plants by Season</button>
                <div class="dropdown-content">
                    <a href="#">Spring</a>
                    <a href="#">Summer</a>
                    <a href="#">Fall</a>
                    <a href="#">Winter </a>
                </div>
            </div> */}

            {loggedIn && (
                <div className="homeGrid">
                    <ul>
                        {plants.map((plant) => (
                            <li>
                                <h3>{plant.name}</h3>
                                <img
                                    src={plant.image}
                                    alt={plant.name}
                                    className="img" />
                                    <p>Season: {plant.season}</p>
                                    <p>Description: {plant.description}</p>
                                    <p>Maintenance: {plant.maintenance}</p>
                                    <p>Water Needs: {plant.waterneeds}</p>
                            </li>
                        ))}
                    </ul>
                    {data}
                </div>
              )}  

        </section>
    );
}

export default Home;