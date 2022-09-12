import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CreatePost } from '../components/CreatePost';
import { ViewPosts } from '../components/ViewPosts';

export const TradePost = () => {

    const [createOn, setCreateOn] = useState(false);
    const [viewOn, setViewOn] = useState(false);
    const [welcomeOn, setWelcomeOn] = useState(true);
    const test = []

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
            <center>  <button onClick={turnCreateOn} id="create" className="btn btn-light">Create a Trade Post</button> <button id="view" className="btn btn-light" onClick={turnViewOn}>View Trade Posts</button> </center>
        </div>


        <div className="container" id="results">
            {createOn ? <CreatePost turnViewOn={turnViewOn} /> : null}

            {viewOn && <ViewPosts />}

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

#create{
margin-bottom: 10px;
}

#view{
margin-bottom: 10px;
}

    
`;