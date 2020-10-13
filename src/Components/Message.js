import React, { useRef, useState } from 'react';
import { css } from 'emotion'
import Question from './Questions';

const Message = ( { name }) => {
    const refUsername = useRef();
   const [username, setUsername] = useState(null)
    
  
    const info = css`
                background-color:#164752;
                font-size:1.5em;
                 color:white;
                 text-align:center;
                 padding:3em;
                 box-shadow: 0px 8px 11px 3px rgba(0,0,0,0.75);
                 .input {
                     font-size:1em;
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
    // refUsername.current.value = {name}
    // this.setState({value: event.target.value});
}

console.log(username)
// const inputVal = refUsername.current.value
// console.log(inputVal)
    return ( 
        <>
        <section className={info}>
            <form action="" onSubmit={(event) => handleChange(event)}>
        <h1>Please enter your name to continue!</h1>
<input className="input" type="text"  placeholder="name"  ref={refUsername}

   /> {name}
   <input type="submit"/>
   {/* <button onSubmit={(event) => handleChange(event)}>Submit</button> */}
   </form>
</section>

{ username  ? <Question name= {username}/> : null}



</>
     );
}
 
export default Message;