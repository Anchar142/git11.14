import React from 'react';

const Button = (props) => {
    let {text} = props;
    return ( 
        <div>
           <button>{text}</button>
        </div>
     );
}
 
export default Button;
