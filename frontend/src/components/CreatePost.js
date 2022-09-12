import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

export const CreatePost = () => {

    const [inputs, setInputs] = useState({
        teamName: "",
        willingToTrade: "",
        wantToReceive: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    

    const sendRequest = async () => {
        const res = await axios.post("http://localhost:5000/api/post/add", {
            teamName: inputs.teamName,
            willingToTrade: inputs.willingToTrade,
            wantToReceive: inputs.wantToReceive,
        });

        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        sendRequest();
    }

    return (

        <Contain>
            <form className="form-group" method="POST" onSubmit={handleSubmit}>
                <label for="teamName">Team Name</label>
                <input onChange={handleChange} type="text" className="form-control" name="teamName" placeholder="Enter Team Name" />

                <label for="teamName">Willing to Trade</label>
                <input onChange={handleChange} type="text" className="form-control" name="teamName" placeholder="Enter Player Names" />

                <label for="teamName">Positions I want to Recieve</label>
                <input onChange={handleChange} type="text" className="form-control" name="teamName" placeholder="Enter Positions (E.G WR1, WR2, RB1, RB2, ETC) " />
                
                <center><button>Submit proposal to Trade Post</button></center>

            </form>
        </Contain>
    );
}

const Contain = styled.section`

button {margin-top: 2rem;} 
    
 
    
`;
