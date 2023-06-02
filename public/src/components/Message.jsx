import React from 'react';
import styled from 'styled-components';

export default function Message(props) {
  return (
    <Container>
        <div className='username'>
            <h5>{props.username}</h5>
        </div>
        <div>
            <p>{props.txt}</p>
        </div>
    </Container>
  );
}

const Container = styled.div`
    background-color: #4F628E;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 1rem;

    .username{
        margin-bottom: .5rem;

        h5{
            color: #009999;
            font-size: 1rem;
        }
    }

    p{
        color: #fff;
        font-size: .8rem;
    }

    @media only screen and (min-width: 768px){
        max-width: 522px;
    }

    @media only screen and (min-width: 1366px){
        max-width: 636px;
    }

    @media only screen and (min-width: 1920px){
        max-width: 1006px;
    }
`;
