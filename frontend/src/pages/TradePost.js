import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CreatePost } from '../components/CreatePost';
import { ViewPosts } from '../components/ViewPosts';

export const TradePost = () => {

    const [createOn, setCreateOn] = useState(false);
    const [viewOn, setViewOn] = useState(false);
    const [welcomeOn, setWelcomeOn] = useState(true);

    const turnCreateOn = () => {
        setWelcomeOn(false);
        setViewOn(false);
        setCreateOn(!createOn);
    }

    const turnViewOn = () => {
        setWelcomeOn(false)
        setCreateOn(false);
        setViewOn(!viewOn);
    }

    
  

    


    return (<Contain>
        
        <div className="container" id="trade-post">
            <center>  <button onClick={turnCreateOn} className="btn btn-light">Create a Trade Post</button> <button className="btn btn-light" onClick={turnViewOn}>View Trade Posts</button> </center>
        </div>


        <div className="container" id="results">
            {createOn ? <CreatePost /> : null}

            {viewOn && <h1>View On</h1>}

            {welcomeOn && <center><h1>Select an option to get started!</h1></center>}

            

        </div>
        
        </Contain >);
}

const Contain = styled.section`

#trade-post {
button {margin-left: 5rem; margin-right: 5rem;}
}


#results {

margin-top: 5rem;

}
    
`;