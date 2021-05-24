import React from 'react';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_PLANT } from "../../utils/queries";
// import Auth from '../../utils/auth';
import PlantList from './plantModal';


const Home = ( ) => {

    // const { loading, data } = useQuery(QUERY_PLANT);
    // const plants = data?.plants || [];
    // console.log('plants found:' + plants);

    // const loggedIn = Auth.loggedIn();


    return (
        <section >
            <br></br>

            {/* {loggedIn && ( */}
                <div className="homeGrid">
                    <div> <PlantList /></div>


                </div>
              {/* )}   */}

        </section>
    );
}

export default Home;