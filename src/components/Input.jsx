import React from 'react'

const Input = (props) => {
    let {id,text}=props;
    return ( 
        <div>
            <label htmlFor={id}>{text}</label>
            <input type="text" id={id} />
        </div>
     );
}
 
export default Input;
