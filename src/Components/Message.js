import React from 'react';
import { css } from 'emotion'

const Message = ( { name}) => {
    const info = css`
                background-color:#164752;
                 color:white;
                 text-align:center;
                 padding:3em;
                 box-shadow: 0px 8px 11px 3px rgba(0,0,0,0.75);
    `;
    return ( 
        <section className={info}>
        <h1>Please enter your name to continue!</h1>
<input type="text" name="" id="" placeholder="name" value={name} onSubmit=""/> 
</section>

     );
}
 
export default Message;