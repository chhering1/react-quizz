import React, { useRef, useState } from 'react';
import { css } from 'emotion'
import Question from './Questions';
import gif from '../tenor.gif'
const Message = ( { name }) => {
  
    const refUsername = useRef();
   const [username, setUsername] = useState(null)
    
  
    const info = css`
                background-color:#164752;
                font-size:1em;
                 color:white;
                 margin:1em;
                 height:50vh;
                 align-items:center;
                 justify-content:center;
                 padding:1em;
                 box-shadow: 0px 8px 11px 3px rgba(0,0,0,0.75);
                 .input {
                     font-size:1em;
                 }
                 .gif {
                     background-color:transparent;
                 }
                 .submitbtn {
                     border-radius:2em;
                     margin-top:1em;
                 color:white;
                 padding:0.3em 1em ;
                 
border:none;
box-shadow:2px 2px 4px grey;
                    background-color:#1394B0;
                 }
    `;

    
function handleChange(event) {
   event.preventDefault();
    console.log('submitted ' )
    console.log('Username: ' + refUsername.current.value);
 
    const user = sessionStorage.setItem('userName', refUsername.current.value) ;
    console.log(user)
    setUsername (refUsername.current.value)
    
}

console.log(username)

    return ( 
        <>
        
{ username  ? <Question name= {username}/> :

<section className={info}>
<img className="gif" src={gif}alt=""/>

            <form action={<Question />} onSubmit={(event) => handleChange(event)}>
        <h1>Please enter your name to continue!</h1>
        
<input className="input" type="text"  id="name"  ref={refUsername} placeholder="your name here"

   /> {name} <br/>
   
   <button className="submitbtn">Submit</button>
   </form>
</section>

 }



</>
     );
}
 
export default Message;