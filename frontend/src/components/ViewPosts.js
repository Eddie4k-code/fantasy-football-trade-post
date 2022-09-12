import styled from 'styled-components';
import { Post } from './Post';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export const ViewPosts = () => {

    const [allPosts, setAllPosts] = useState([]);
    
    const sendRequest = async () => {
        const res = await axios.get("http://localhost:5000/api/post/get");
        await setAllPosts(res.data.posts);
        

    }


    useEffect(() => {
        sendRequest();
    }, [setAllPosts]);


    return (<Contain>
        <center>
            <div className="container">

                {allPosts && allPosts.map((post, index) => (
                    <Post teamName={post.teamName} willingToTrade={post.willingToTrade} wantToReceive={post.wantToReceive} />
                    ))}
              
        </div>
            </center>
    </Contain>);
}

const Contain = styled.section`

    
 
    
`;