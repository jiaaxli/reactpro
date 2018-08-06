import React from 'react';
import '../css/register.css';

class Register extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div class="zhuce">
                <h2>用户注册</h2>
                <ul>
                    <li>
                        <input type="text" class="gj" value="中国" checked="checked"/>
                        <input type="text" class="sjh" placeholder="手机号(不含国家区号)"/>
                    </li>
                    <li>
                        <input type="text" class="wt"/>
                        <div>0000</div>
                        <button>发送短信验证码</button>
                    </li>
                    <li><input type="text" placeholder="短信验证码(4位数字)"/></li>
                    <li><input type="text" placeholder="真实姓名"/></li>
                    <li><input type="email" placeholder="邮箱"/></li>
                    <li><input type="password" placeholder="密码"/></li>
                    <li><button>注册</button></li>
                    <li><p>注册账号即代表您同意丸子地球的<span>《服务条款》、《隐私政策》、《免责声明》、《保障计划条款》。</span></p></li>
                </ul>
            </div>	
        )
    }
}

export default Register;