import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Details from './components/details';
import List from './components/list';
import Demand from './components/demand';
import login1 from './img/logo-web.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className='head_warp'>
              <ul className='head'>
                <li><Link to='/home'><img src={login1}/></Link></li>
                <li><Link to='/demand'>定制旅行</Link></li>
                <li><Link to='/demand'>成为丸子</Link></li>
                <li><Link to='/demand'>团队企业服务</Link></li>
                <li><Link to='/demand'>下载APP</Link></li>
                <li><Link to='/demand'>400-872-8336</Link></li>
                <li><Link to='/demand'>帮助中心</Link></li>
                <li><Link to='/register'>注册</Link>|<Link to='/login'>登录</Link></li>
              </ul>
            </div>
            <div className='content'>
              <Route path='/home' component={Home}>首页</Route>
              <Route path='/demand' component={Demand}></Route>
              <Route path='/login' component={Login}>登录</Route>
              <Route path='/register' component={Register}>注册</Route>
              <Route path='/details' component={Details}>详情</Route>
              <Route path='/list' component={List}>列表</Route>
              <Redirect to='/home'></Redirect>
            </div>
            <footer>
              <div className='fonter_f'>
                <div className='footer_top'>
                  <div className='footer_left'>
                    <h5>客服热线</h5>
                    <p>
                      <span>国内</span>
                      <strong>400-872-8336</strong>
                    </p>
                    <p>
                      <span>海外</span>
                      <strong>+86-571-88669710</strong>
                    </p>
                    <p className='p'>接听时间：9:00-22:00（北京时间）</p>
                  </div>
                  <div className='footer_right'>
                    <div className='footer_r1'>
                      <h5>公司信息</h5>
                      <p>关于我们</p>
                      <p>加入我们</p>
                      <p>联系我们</p>
                      <p>媒体报道</p>
                      <p>网站地图</p>
                      <p>关于我们</p>
                    </div>
                    <div className='footer_r1'>
                      <h5>新手上路</h5>
                      <p>帮助中心</p>
                      <p>服务条款</p>
                      <p>隐私政策</p>
                      <p>免责声明</p>
                      <p>使用政策须知</p>
                      <p>保障计划条款</p>
                    </div>
                    <div className='footer_r1'>
                      <h5>丸子向导</h5>
                      <p>为什么成为丸子</p>
                      <p>丸子服务标准</p>
                      <p>成为丸子</p>
                    </div>
                  </div>
                </div>
                <div className='footer_up'>
                  <p>沪ICP备11048536号</p>
                  <p>©上海幻橙网络科技有限公司 All Rights Reserved</p>
                </div>
              </div>
              
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
