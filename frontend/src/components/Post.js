import react from 'react';
import styled from 'styled-components';

export const Post = ({ teamName, willingToTrade, wantToReceive }) => {
    return (
        <Container>
        <div className="card">
            <div className="card-header" id="team-title">
                    {teamName}
            </div>
            <ul className="list-group list-group-flush">
                    <li className="list-group-item">Willing to Trade:
                        <div className="card-body" id="willing">{willingToTrade}</div>
                    </li>
                    <li className="list-group-item">Want to Receive:
                        <div className="card-body" id="receive">{wantToReceive}</div>
                    </li>
               
            </ul>
            </div>
        </Container>
    );
}

const Container = styled.section`

.card {width: 50%; margin-top: 3rem;}

#team-title{
background-color: black;
color: white;
}

#willing {
  background-color: green;
  color: white;
}

#receive {
background-color: red;
color: white;

}
 
    
`;