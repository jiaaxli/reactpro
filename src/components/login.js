import React from 'react'
import '../css/login.css'

class Login extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="login">
                <h2>用户登录</h2>
                <ul>
                    <li>
                        <input type="text" className="gj" value="中国" checked="checked"/>
                        <input type="text" className="sjh" placeholder="手机号(不含国家区号)"/>
                    </li>										
                    <li><input type="password" placeholder="密码"/></li>
                    <li><p>忘记密码</p></li>
                    <li><button>登录</button></li>					
                </ul>
            </div>
        )
    }
}

export default Login;