import React, { useRef, useState } from 'react';
import { css } from 'emotion'
import Question from './Questions';

const Message = ( { name }) => {
    // {console.log({name})}
    const refUsername = useRef();
   const [username, setUsername] = useState(null)
    
  
    const info = css`
                background-color:#164752;
                font-size:1em;
                 color:white;
                 margin:auto;
                 text-align:center;
                 padding:1em;
                 box-shadow: 0px 8px 11px 3px rgba(0,0,0,0.75);
                 .input {
                     font-size:1em;
                 }
                 .submitbtn {
                     margin-top:1em;
                 color:white;
                 padding:0.5em;
                 outline:none;
/* border:none; */
                    background-color:#1394B0;
                 }
    `;

    
function handleChange(event) {
   event.preventDefault();
    console.log('submitted ' )
    console.log('Username: ' + refUsername.current.value);
    // localStorage.setItem('userName', inputVal);
    const user = sessionStorage.setItem('userName', refUsername.current.value) ;
    console.log(user)
    setUsername (refUsername.current.value)
    
}

console.log(username)

    return ( 
        <>
        
{ username  ? <Question name= {username}/> :
<section className={info}>
            <form action={<Question />} onSubmit={(event) => handleChange(event)}>
        <h1>Please enter your name to continue!</h1>
        
<input className="input" type="text"  id="name"  ref={refUsername} placeholder="your name"

   /> {name} <br/>
   {/* <input type="submit"/> */}
   <button className="submitbtn">Submit</button>
   </form>
</section>

 }



</>
     );
}
 
export default Message;