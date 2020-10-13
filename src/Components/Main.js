import React from 'react';
import { css } from "emotion"
import Message from './Message';
import Question from './Questions';

const Main = () => {
    const user = sessionStorage.getItem('userName') ;
console.log(user) 
    const grid = css`
    display:grid;
    margin:0;
    height:100vh;
    grid-template-columns:1fr 1fr;
    `;
    const part =  css`
    padding: 10em;
    text-align:center;
/* align-content:center; */
    /* border:1px solid white; */
background-color : #1394B0;
             .info {
                 background-color:#164752;
                 font-size:2em;
                 color:white;
                 text-align:center;
                 padding:1em;
                 box-shadow: 0px 8px 11px 3px rgba(0,0,0,0.75);
             }
    `;
    const style = css`
    /* width:50%; */
    
    background-color : #73D9F0;
    .react {
        color : #164752;
        font-size:10em;
    }
    .quiz {
        color:white;
        font-size:10em;
    }
    `;
    return ( 
        <div className={grid}>
        <main className={style}>
<h1 className="react">React </h1>
<h2 className="quiz">Quizz App</h2>
        </main>
        <section className={part}>
            {/* { user ? <Message /> : <Question /> } */}
    <Message> </Message>
    {/* <Question /> */}
                   </section>
                   
        </div>
     );
}
 
export default Main;