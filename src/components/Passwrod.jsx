import React from 'react'

const Password = (props) => {
    let {id,text} = props;
    return ( 
        <div>
            <label htmlFor={id}>{text}</label>
            <input type="password" id={id} />
        </div>
     );
}
 
export default Password;