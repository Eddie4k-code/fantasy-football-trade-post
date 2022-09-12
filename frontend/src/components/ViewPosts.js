import styled from 'styled-components';
import { Post } from './Post';

export const ViewPosts = () => {
    return (<Contain>
        <center>
        <div className="container">
                <Post />
        </div>
            </center>
    </Contain>);
}

const Contain = styled.section`

    
 
    
`;