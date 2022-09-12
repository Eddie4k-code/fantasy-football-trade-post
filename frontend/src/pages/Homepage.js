import styled from 'styled-components';
import react from 'react';


import { TbBallAmericanFootball } from "react-icons/tb";

export const Homepage = () => {
    return (
        <Contain>
            <div className="Container">

                <div className="container" id="welcome">
                    <center>
                        <div className="container"><h1 className="header">Welcome to Twelve Wise Men</h1></div>
                    </center>

                    <div className="card">
                        
                        <center><h5 className="card-header">Show others what your willing to trade!</h5></center>
                        <div className="card-body">
                            <center><a href="#" className="btn btn-primary">Head to Trade Post</a></center>
                        </div>
                    </div>


                    <div className="card" id="details">

                        <center><h5 className="card-header">Last Seasons Leauge Winner (2021 Season)</h5></center>
                        <div className="card-body">
                           <center> <h4>Timmy Jones</h4> </center>
                        </div>
                    </div>


                </div>

            </div>
        </Contain>
        
        );
}


const Contain = styled.section`

#welcome {

    
    width: 300px;
    height: 60%;
    position: absolute;
    top:20%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: black;
    width: 70%;


.header {
font-family: 'Kanit', sans-serif bold;
color: blue;
}

}

.card {
background-color: white;
}

#details {margin-top:5rem;

h5 {color: white;}

h4 {color: blue;}


background-color: black;

}
 
    
`;