import React from 'react'
import styled from 'styled-components';
import github from '../../assets/home/github.svg';
import { useTranslation } from 'react-i18next';
export default function Main() {
    const { t } = useTranslation();
    return (
            <section className="none">
                <StyledContainerMain>
                    <h2>{t('projectDescription.ignite')}</h2>
                    <p>{t('projectDescription.github')}</p>
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