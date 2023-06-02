import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Message from './Message';

export default function ChatZone() {
    const api = 'http://localhost:6969';
    const [allMsgs, setAllMsgs] = useState([]);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    useEffect(() => {
        const sleep = ms => new Promise(r => setTimeout(r, ms));

        const getAllMsgs = async () => {
            fetch(`${api}/msgs`).then(response => response.json()).then(data => {
                setAllMsgs(data.map(msg => {
                    return <Message key={msg._id} username={msg.username} txt={msg.txt} />
                }));
            });
        }

        const call = async (ms) => {
            while(3>2){
                await sleep(ms);
                getAllMsgs();
            }
        }

        if(isFirstLoad){
            getAllMsgs();
            setIsFirstLoad(false);
        }else{
            call(1000);
        }
        
        // eslint-disable-next-line
      },[isFirstLoad]);
       

  return (
    <Container id='scroll'>
        {allMsgs}
    </Container>
  );
}

const Container = styled.div`
    background-color: #162955;
    margin-top: 56px;
    width: 100vw;
    height: 80vh;
    overflow-y: scroll;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    ::-webkit-scrollbar{
        width: .7rem;
    }

    ::-webkit-scrollbar-track{
        background-color: #4F628E;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #1E2637;
    }
`;
