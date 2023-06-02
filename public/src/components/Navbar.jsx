import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar(props) {
    const scrollDown = () => {
        document.querySelector('#scroll').scrollTo(0, document.querySelector('#scroll').scrollHeight);
    }

  return (
    <NavContainer>
        <div>
            <h1 onClick={props.scroll ? scrollDown : () => window.location.href = "/"}>FriendZone</h1>
            {props.chat ? (<Link to="/profile"><i className="fa-solid fa-user"></i></Link>) : (<Link to="/" ><i className="fa-solid fa-message"></i></Link>)}
        </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0 1rem;
    background-color: #2B50A6;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1{
            cursor: pointer;
        }

        i{
            cursor: pointer;
            color: #fff;
            text-decoration: none;
        }
    }

    @media only screen and (min-width: 768px){
        padding: 0 2rem;
    }

    @media only screen and (min-width: 1366px){
        padding: 0 200px;
    }
`;