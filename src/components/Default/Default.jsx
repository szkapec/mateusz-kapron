import React from 'react'
import styled from 'styled-components';

export default function Default() {
    return (
        <section id="error">
           <StyledError>
           <div>ERROR 404 </div>
           <div>Nie ma takiej strony </div>
           </StyledError>
        </section>
    )
}

const StyledError = styled.div`


    div:first-child {
        position: absolute;
        top: 45%;
        left: 50%;
        width: 100%;
        margin: 0 auto;
        transform: translate(-50%,50%);
        color: red;
        font-size: 30px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 3px;
        padding-bottom: 40px;
        text-align: center;
    }
    div:last-child {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%,50%);
        font-size: 26px;
        text-transform: uppercase;
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }

    


`
