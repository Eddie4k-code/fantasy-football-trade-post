import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CreatePost = ({turnViewOn}) => {

    const navigate = useNavigate();

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
        sendRequest().then((turnViewOn));
        
        
    }

    return (

        <Contain>
            <form className="form-group" method="POST" onSubmit={handleSubmit}>
                <label for="teamName">Team Name</label>
                <input onChange={handleChange} type="text" className="form-control" name="teamName" placeholder="Enter Team Name" />

                <label for="teamName">Willing to Trade</label>
                <input onChange={handleChange} type="text" className="form-control" name="willingToTrade" placeholder="Enter Player Names" />

                <label for="teamName">Positions I want to Receive</label>
                <input onChange={handleChange} type="text" className="form-control" name="wantToReceive" placeholder="Enter Positions (E.G WR1, WR2, RB1, RB2, ETC) " />
                
                <center><button className="btn btn-primary">Submit proposal to Trade Post</button></center>

            </form>
        </Contain>
    );
}

const Contain = styled.section`

button {margin-top: 2rem;} 
    
 
    
`;
