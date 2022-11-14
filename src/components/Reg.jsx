import React from 'react'
import Button from './Button';
import Input from './Input';
import Password from './Passwrod';
const Reg = () => {
    return ( 
        <>
          <div>欢迎注册</div>
          <Input id="userName2" text="用户名:" />
          <Password id="pwd2" text="密&nbsp;&nbsp;&nbsp;码"></Password>
          <Password id="pwd3" text="确认密码"></Password>
          <Input id="email" text="邮箱" />
          <Button text="注册"/>
        </>
     );
}
 
export default Reg;