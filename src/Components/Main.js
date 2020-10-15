import React from 'react';
import { css } from "emotion"
import Message from './Message';
import Question from './Questions';

const Main = () => {
    const user = sessionStorage.getItem('userName') ;
console.log(user) 

    const main = css`
    height:80vh;
    max-width:500px;
    margin:auto;
    text-align:center;
    padding-bottom:5em;
    background-color : #1394B0;
    `;
    const title = css`
    font-size:2em;
    /* color:white; */
    padding-top:1em;
    `;
    
    return ( 
        <main className={main}>
        
            <h1 className={title}>How well do you know me?  </h1>
            {/* { user ? <Question /> : < Message /> } */}
    <Message> </Message>
    {/* <Question /> */}
                  
                   
        </main>
     );
}
 
export default Main;