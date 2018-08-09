import React from 'react';
import '../css/register.css';
import $ from 'jquery';




function yzmzm( min, max) {
    let str = ""
  var range = 6,
  arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

for (let i = 0; i < range; i++) {
  var pos = Math.round(Math.random() * (arr.length - 1));
  str += arr[pos];
}
return str;
}


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            yzm:''
        }
    }
    componentWillMount(){
        this.setState({yzm:yzmzm(6)})
    }
    register(){
        var phonenum=$('.sjh').val();
        var name=$('.sjh').val();
        var yzmzm=$('.wt').val();
        var yzm=$('.yzm').val();
        var email=$('.email').val();
        var pass=$('.pass').val();
        $.ajax({
            type:'post',
            url:'http://localhost:4000/register',
            data:{id:1,name:name,phonenum:phonenum,yzmzm:yzmzm,yzm:yzm,email:email,pass:pass},
            success:function(data){
                console.log(data)
            }
        })
    }
    send(){
        $.ajax({
            type:'post',
            url:'http://localhost:4000/register',
            data:{id:1},
            success:function(data){
                console.log(data)
            }  
        })
    }
    render(){
        return(
            <div className="zhuce">
                <h2>用户注册</h2>
                <ul>
                    <li>
                        <input type="text" className="gj" defaultValue="中国" defaultChecked="checked"/>
                        <input type="text" className="sjh" placeholder="手机号(不含国家区号)"/>
                    </li>
                    <li>
                        <input type="text" className="wt"/>
                        <div>{this.state.yzm}</div>
                        <button onClick={this.send.bind(this)}>发送短信验证码</button>
                    </li>
                    <li><input type="text" placeholder="短信验证码(4位数字)" className='yzm'/></li>
                    <li><input type="text" placeholder="真实姓名"  className='name'/></li>
                    <li><input type="email" placeholder="邮箱"  className='email'/></li>
                    <li><input type="password" placeholder="密码"  className='pass'/></li>
                    <li><button onClick={this.register.bind(this)}>注册</button></li>
                    <li><p>注册账号即代表您同意丸子地球的<span>《服务条款》、《隐私政策》、《免责声明》、《保障计划条款》。</span></p></li>
                </ul>
            </div>	
        )
    }
}

export default Register;