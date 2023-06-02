import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Login() {
    const api = "http://localhost:6969";

    let x = document.cookie;
    useEffect(() => {
        if(x !== "") window.location.href = '/';
        // eslint-disable-next-line
    }, []);

    const [userInfo, setUserInfo] = useState({
        "email": "",
        "password": "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        fetch(`${api}/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInfo)
        }).then(response => response.json()).then(data => {
            console.log(data);
            if(data.status){
                document.cookie = `id=${data.user._id}; expires=Thu, 18 Dec 9999 12:00:00 UTC`;
                document.cookie = `username=${data.user.username}; expires=Thu, 18 Dec 9999 12:00:00 UTC`;
                document.cookie = `email=${data.user.email}; expires=Thu, 18 Dec 9999 12:00:00 UTC`;
                window.location.href = "/";
            }else{
                alert(data.msg);
            }
        });
    }

    const handleChange = (e) => {
        setUserInfo(userInfo => ({...userInfo, [e.target.name]: e.target.value}));
    }

  return (
    <Container>
        <div className="header">
            <h1>FriendZone</h1>
        </div>
        <form>
            <div>
                <label>Email</label>
                <input name="email" type="email" placeholder='example@gmail.com' onChange={handleChange} value={userInfo.email} />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" placeholder='*******' onChange={handleChange} value={userInfo.password} />
            </div>
            <button type='submit' onClick={handleLogin}>Login</button>
        </form>
        <span>Don't have an account? <Link to="/register">Register now</Link></span>
    </Container>
  );
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #162955;

    .header{
        padding: 3rem 0 6rem;
        text-align: center;
        
        h1{
            color: #fff;
            font-size: 3rem;
        }
    }

    form{
        margin: 0 1rem;
        
        input{
            display: block;
            width: 100%;
            max-width: 340px;
            background-color: transparent;
            font-size: .8rem;
            color: #fff;
            border: 1px solid #887CAF;
            padding: .6rem 1rem;
            margin: 0 auto 3rem;
            height: 3.2rem;

            &:focus{
                outline: none;
            }
        }

        div{
            position: relative;
            max-width: 340px;
            margin: 0 auto;

            label{
                color: #887CAF;
                background-color: #162955;
                font-size: .8rem;
                position: absolute;
                padding: 0 3px;
                top: -6px;
                left: 1rem;
            }
        }

        button{
            width: 156px;
            cursor: pointer;
            background-color: #009999;
            padding: .8rem 2.2rem;
            border: none;
            border-radius: 2rem;
            font-size: .8rem;
            color: #fff;
            display: block;
            margin: 0 auto;
            -webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);

            &:hover{
                        background-color: #066;
            }
        }
    }

    span{
        cursor: pointer;
        color: #fff;
        font-size: .8rem;
        display: block;
        text-align: center;
        margin-top: .5rem;

        a{
            text-decoration: none;
            color: #009999;
        }
    }

    @media only screen and (min-width: 1366px){
        form{
            div{
                max-width: 471px;

                input{
                    max-width: 471px;
                }
            }

            button{
                transition: .2s all ease-in-out;

                &:hover{
                background-color: #066;
                }
            }
            
        }
    }

    @media only screen and (min-width: 1920px){
        form{
            div{
                max-width: 749px;

                input{
                    max-width: 749px;
                }
            }
        }
    }
`;
