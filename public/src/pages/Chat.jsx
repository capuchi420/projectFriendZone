import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import ChatZone from '../components/ChatZone';
import MsgInput from '../components/MsgInput';

export default function Chat() {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const api = 'http://localhost:6969';

  let x = document.cookie;
    useEffect(() => {
        if(x === "") window.location.href = '/login';
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
      let x = document.cookie;
      x = x.split(';');
      x.forEach(info => {
          let details = info.split('=');
          console.log(details)
          if(details[0].trim() === 'username'){
              setUsername(details[1]);
          }
      });
    }, []);

    const handleMsg = async (e) => {
      e.preventDefault();

      const info = {
          username: username,
          txt: msg
      };

      fetch(`${api}/msgs/postmsg`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(info)
      }).then(response => response.json()).then(data => {
          setMsg("");
      });
  }

  

    
  return (
    <>
        <Navbar chat={true} scroll={true}/>
        <ChatZone />
        <MsgInput handleMsg={handleMsg} msg={msg} setMsg={setMsg}/>
    </>
  );
}
