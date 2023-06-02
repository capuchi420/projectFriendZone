import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function ProfileSettings(props) {
    const [newUsername, setNewUsername] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const api = 'http://localhost:6969';

    useEffect(() => {
        let x = document.cookie;
        x = x.split(';');
        x.forEach(info => {
            let details = info.split('=');
            console.log(details)
            if(details[0].trim() === 'username'){
                setUsername(details[1]);
            }
            if(details[0].trim() === "id"){
              setId(details[1]);
            }
            if(details[0].trim() === "email"){
              setEmail(details[1]);
            }
        });
      }, [username]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const toUpdate = {
            id: id,
            newUsername: newUsername
        };

        fetch(`${api}/users/update/${props.id}`, {
            method: "PATCH",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(toUpdate)
        }).then(response => response.json()).then(data => {
            if(!data.status){
                alert(data.msg);
            }else{
                document.cookie = `username=${data.updateUser.username}; expires=Thu, 18 Dec 9999 12:00:00 UTC`;
                setUsername(data.updateUser.username);
                setNewUsername("");
            } 
        });
    }

    const handleLogout = (e) => {
        e.preventDefault();
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }

        window.location.href = '/login';
    }

  return (
    <Cointainer>
        <div className="user">
            <div className='username'><h1>{username}</h1></div>
            <div className="logout" onClick={handleLogout}><button>Logout</button></div>
        </div>
        <div className="update">
            <form>
                <input type="text" placeholder={username} onChange={(e) => setNewUsername(e.target.value)} value={newUsername}/>
                <input type="email" value={email} disabled/>
                <div className="update">
                    <button type='submit' onClick={handleUpdate}>Update</button>
                </div>
            </form> 
        </div>
    </Cointainer>
  );
}

const Cointainer = styled.div`
    margin: 56px 16px 0;
    background-color: #162955;
    max-width: 100%;

    .user{
        text-align: center;
        padding: 46px 0;

        .username{
            h1{
                font-size: 40px;
                color: #fff;
            } 
        }

        .logout{
            margin: 30px;

            button{
                cursor: pointer;
                padding: 12px 40px;
                font-size: .8rem;
                color: #009999;
                border: 1px solid #009999;
                background-color: transparent;
                border-radius: 20px;
                transition: .3s all ease-in-out;

                &:hover{
                    border-color: #066;
                    color: #066;
                }
            }
        }
    }

    .update{
        form{
            input{
                display: block;
                width: 100%;
                max-width: 340px;
                background-color: transparent;
                font-size: .8rem;
                color: #fff;
                border: 1px solid #887CAF;
                padding: .6rem 1rem;
                margin: 0 auto 2rem;
                height: 3.2rem;

                &:focus{
                    outline: none;
                }
            }

            .update{
                text-align: center;
                margin-bottom: 40px;

                button{
                    cursor: pointer;
                    padding: 12px 40px;
                    font-size: .8rem;
                    color: #fff;
                    border: none;
                    background-color: #009999;
                    border-radius: 20px;
                    transition: .3s all ease-in-out;
                    -webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
                    box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);

                    &:hover{
                        background-color: #066;
                    }
            }
            }
        }
    }
`;
