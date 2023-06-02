import React from 'react';
import styled from 'styled-components';

export default function MsgInput(props) {
  return (
    <Container>
        <form>
            <input type="text" placeholder='Write your message...' onChange={(e) => props.setMsg(e.target.value)} value={props.msg}/>
            <button type='submit' onClick={props.handleMsg}><i className="fa-solid fa-paper-plane"></i></button>
        </form>
    </Container>
  );
}

const Container = styled.div`
    height: 13vh;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #162955;
    padding: 1rem;

    form{
        display: flex;
        align-items: center;
        justify-content: center;

        input{
            justify-self: center;
            display: block;
            width: 100%;
            max-width: 340px;
            background-color: transparent;
            font-size: .8rem;
            color: #fff;
            border: 1px solid #887CAF;
            padding: .6rem 1rem;
            height: 3.2rem;

            &:focus{
                outline: none;
            }
        }

        button{
            height: 30px;
            width: 30px;
            border: none;
            background-color: inherit;

            i{
                color: #fff;
                cursor: pointer;
            }
        }

        @media only screen and (min-width: 768px){
            input{
                max-width: 522px;
            }
        }

        @media only screen and (min-width: 1366px){
            input{
                max-width: 636px;
            }
        }

        @media only screen and (min-width: 1920px){
            max-width: 1006px;
        }
    }
`;
