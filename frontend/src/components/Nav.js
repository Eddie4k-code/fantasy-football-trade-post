import react from 'react'
import styled from 'styled-components'
import { TbBallAmericanFootball } from "react-icons/tb";
let Logo = require("../assets/logo.png");


export const Nav = () => {
    return (
        <Contain>
        <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <h5 className="logo">Twelve Wise Men</h5> <TbBallAmericanFootball className="football" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Trade Post</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
            </nav>
        </Contain>
    );
}

const Contain = styled.section`
overflow: visible;

nav {background-color: black;}

a {color: white; }

a:hover {color: blue;}

.logo {color: blue}
.football {height: 2rem; width: 2%; color: brown;}
 
    
 
    
`;