import React from 'react';
import { Carousel,Icon   } from 'antd';
import $ from 'jquery'
import '../css/home.css';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper/dist/js/swiper.min.js'
import url1 from '../img/WechatIMG1209.jpeg';
import url2 from '../img/WechatIMG1218.jpeg';
import url3 from '../img/WechatIMG1336.jpeg';
import url4 from '../img/WechatIMG1815.jpeg';
import url5 from '../img/WechatIMG2546.jpeg';
import url6 from '../img/guide.jpg';
import url7 from '../img/car.jpg';
import url8 from '../img/trip.jpg';
import url9 from '../img/service.jpg';
import url10 from '../img/video-bg.jpg';


class Home extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        
        $(".home_img1").hover(function () {

            $(this).children(".home_zx").css("opacity",1)
            $(this).children(".home_z").css("opacity",0)
          },function(){
            $(this).children(".home_zx").css("opacity",0)
            $(this).children(".home_z").css("opacity",1)
          })
          var mySwiper = new Swiper ('.swiper-container', {
                autoplay: false,
                loop : true,
            
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })
    }
    render(){
        return(
            <div>
                <div className="home_b">
                    <Carousel autoplay>
                        <div><img src={url1}/></div>
                        <div><img src={url2}/></div>
                        <div><img src={url3}/></div>
                        <div><img src={url4}/></div>
                        <div><img src={url5}/></div>
                    </Carousel>
                    <div className='home_search'>
                        <input type='text' placeholder='请输入您想去的国家，城市'/>
                        <span><Icon type="search" style={{ fontSize: 20, color: '#000' }} /></span>
                    </div>
                </div>
                <div className='home_main_warp'>
                    <div className='home_mian'>
                            <h2>备受好评的丸子</h2>
                        <ul className='home_list'>
                            <li>
                                <div className='home_img'></div>
                                <p className='home_p1'>
                                    <span>Mr.Yu</span>
                                    <span>
                                        <strong>CNY1000</strong>
                                    起</span>
                                </p>
                                <p className='home_p2'><span>自由职业</span></p>
                                <p className='home_p3'>
                                    <Icon type="environment-o" />
                                    日本-北海道-札幌
                                    
                                </p>
                                <p className='home_p4'>
                                    <span>徒步向导</span>
                                    <span>带车向导</span>
                                    <span>徒步接送机</span>
                                    <span>带车接送机</span>
                                </p>
                            </li>
                        </ul>
                    </div>  
                </div>

                <div className='home_main_warp'>
                    <div className='home_mian home_main1'>
                        <h2>尊享品质服务</h2>
                        <div className='home_img1'>
                            <img src={url6}/>
                            <div className='home_z'>
                                <p>中文向导</p>
                            </div>
                            <div className='home_zx'>
                                <p className='home_zx1'>
                                    <strong>中文向导</strong>
                                </p>
                                <p>全球60个国家，超过600个城市，都可以找到当地的华人华侨，留学生等等优质的中文向导，他们可能是律师、医生、人类学家、运动员…他们将尽心尽责为您提供最纯粹的当地人旅行体验。</p>
                            </div>
                        </div>
                        <div className='home_img1'>
                            <img src={url7}/>
                            <div className='home_z'>
                                <p>接机包车</p>
                            </div>
                            <div className='home_zx'>
                                <p className='home_zx1'>
                                    <strong>接机包车</strong>
                                </p>
                                <p>丸子地球的中文向导包车服务，从下飞机开始，就为您全程护航，丸子地球的包车服务车型多样，甚至包括澳洲房车等等车型，以期满足您的个性化旅行需求。</p>
                            </div>
                        </div>
                        <div className='home_img1'>
                            <img src={url8}/>
                            <div className='home_z'>
                                <p>定制旅行</p>
                            </div>
                            <div className='home_zx'>
                                <p className='home_zx1'>
                                    <strong>定制旅行</strong>
                                </p>
                                <p>丸子地球的向导由于高素质且在各个行业的专业造诣，可以为您提供如预约法国私人酒窖，驾驶俄罗斯米格战机，预约英国高尔夫球场等等独特的定制旅行服务。</p>
                            </div>
                        </div>
                        <div className='home_img1'>
                            <img src={url9}/>
                            <div className='home_z'>
                                <p>保障服务</p>
                            </div>
                            <div className='home_zx'>
                                <p className='home_zx1'>
                                    <strong>保障服务</strong>
                                </p>
                                <p>出境游最重要的是安全，丸子地球为您提供全球救援服务。我们在每一个服务区域，都有当地的导游协会、学联、地接社等，应对可能出现的突发情况，为您的境外旅行保驾护航。</p>
                            </div>
                        </div>
                    </div>
                </div>


             <div className='home_main_warp'>
                <div className='home_mian'>
                    <h2>四步轻松预订丸子向导</h2>
                    <div className='home_bg'>
                        <img src={url10}/>    
                    </div>
                </div>  
            </div>

            <div className='home_main_warp'>
                <div className='home_mian'>
                    <h2>四步轻松预订丸子向导</h2>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div className='home_stop'>
                                    <p>鲁婷</p>
                                    <p>这次出行可以说是十分匆忙，把蜜月选在了我们超爱的北欧城市，但提前一天才订了酒店还有丸子，哈哈。因为之前在加州有找过很赞的丸子，所以这一次毫不犹豫的要找丸子同游。经过各种考量，决定找这位每张照片都在笑，也养了狗狗，还在评论里介绍爸爸妈妈的sarah。从接机开始就一路给我们讲斯德哥尔摩的相关知识。接下来的两天给我们安排了非常充实的行程，除了给我们普及各种知识还给我们介绍很多当地特色的小东西小食物。根据我们的吃货需求，还带我们去吃了好吃和特别的餐厅，提议帮我们约餐厅。因为后面有几天我们自己的行程，Sarah还特意带我们把后面两天我们自己逛街和购物的地方踩了点，陪我们去办旅游卡，推荐各种值得去的地方，总之就是各种nice！如果刚好你也跟我们一样超爱北欧风，找Sarah带你们深度游斯德哥尔摩一定没错！只要有丸子出门完全不用做攻略。最后祝Sarah工作顺利，天天开心！</p>
                                </div>
                                <div>
                                    <p>
                                        
                                        <strong>沈小</strong>
                                        <span>斯德哥尔摩</span>
                                        
                                    </p>
                                </div>
                                

                            </div>
                            <div class="swiper-slide">Slide 2</div>
                            <div class="swiper-slide">Slide 3</div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>  
            </div>
           
        </div>
            
        )
    }
}

export default Home;
