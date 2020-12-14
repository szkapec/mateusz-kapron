import React from 'react'
import styled from 'styled-components';
import github from '../../assets/home/github.svg';

export default function Main({ignite,git}) {
    return (
            <section className="none">
                <StyledContainerMain>
                    <h2>{ignite}</h2>
                    <p>{git}</p>
                    <a href="https://github.com/szkapec"><img  className="container__github" src={github} alt="github"/></a>
                </StyledContainerMain>
            </section>
    )
}


const StyledContainerMain = styled.div`
	font-family: 'Hind Siliguri', sans-serif;
    text-align: center;
    color: white;
    img {
        width: 40px;
        transition: 1s ease-in-out;
    }

    img:hover {
    }
    h2 {
        margin: 20px;
        line-height: 32px;
    }
    p {
        margin: 10px auto;
        font-size: 18px;
    }
    div {
        font-size: 18px;
        font-weight: 700;
        padding: 10px 30px;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    button {
        display:block;
        margin: 10px auto;
        border: none;
        padding: 7px 14px;
        font-size: 18px;
        border-radius: 6px;
    }
    @media(min-width: 700px) {
        h2 {
            margin: 40px;
            font-size: 26px;
        }
        p {
            margin: 20px auto;
            font-size: 22px;
        }
    }

`