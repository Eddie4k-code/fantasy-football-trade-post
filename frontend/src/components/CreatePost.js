import styled from 'styled-components';

export const CreatePost = () => {
    return (

        <Contain>
            <form className="form-group">
                <label for="teamName">Team Name</label>
                <input type="text" className="form-control" name="teamName" placeholder="Enter Team Name" />

                <label for="teamName">Willing to Trade</label>
                <input type="text" className="form-control" name="teamName" placeholder="Enter Player Names" />

                <label for="teamName">Positions I want to Recieve</label>
                <input type="text" className="form-control" name="teamName" placeholder="Enter Positions (E.G WR1, WR2, RB1, RB2, ETC) " />
                
                <center><button>Submit proposal to Trade Post</button></center>

            </form>
        </Contain>
    );
}

const Contain = styled.section`

button {margin-top: 2rem;} 
    
 
    
`;
