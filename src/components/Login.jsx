import React from 'react'
import Button from './Button';
import Input from './Input';
import Password from './Passwrod';
const Login = () => {
    return ( 
        <>
          <div>欢迎登录</div>
          <Input id="userName1" text="用户名:" />
          <Password id="pwd1" text="密&nbsp;&nbsp;&nbsp;码"></Password>
          <Button text="登录"/>
        </>
     );
}
 
export default Login;