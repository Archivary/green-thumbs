import React from 'react';
import plant1 from "../../assets/plant1.jpg";
import plant2 from "../../assets/plant2.jpg";
import plant3 from "../../assets/plant3.jpg";
import plant4 from "../../assets/plant4.jpg";
import Okra from "../../assets/okra.jpg";
import Thyme from "../../assets/thyme.jpg";
import Kiwi from "../../assets/kiwi.jpg";
import Clematis from "../../assets/clematis.jpg";
import Quinces from "../../assets/quinces.jpg";
import Dianthus from "../../assets/dianthus.jpg";


function PlantList () {

    const plants = [
    { name: "Poppy", image: plant1, season: "Summer", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "high", waterneeds:"low" },
    { name: "Chamomile", image: plant2, season: "Spring", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "average", waterneeds:"average"  },
    { name: "Fall Folliage", image: plant3, season: "Fall", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "low", waterneeds:"high"  },
    { name: "Kale", image: plant4, season: "Spring", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "average", waterneeds:"average"  },
    { name: "Okra", image: Okra, season: "Winter", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "low", waterneeds:"low"  },
    { name: "Thyme", image: Thyme, season: "Summer", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "low", waterneeds:"high"  },
    { name: "Kiwi", image: Kiwi, season: "Spring", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "high", waterneeds:"low"  },
    { name: "Clematis", image: Clematis, season: "Summer", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "low", waterneeds:"high"  },
    { name: "Quinces", image: Quinces, season: "Winter", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "high", waterneeds:"high"  },
    { name: "Dianthus", image: Dianthus, season: "Fall", description:"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.", maintenance: "low", waterneeds:"low"  }
]


  return (

<ul>
{ plants.map((plant) => (
    <li key={plant.name}>
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
  );
};

export default PlantList;
