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
import url11 from '../img/visa.jpg';
import url12 from '../img/zhaoshang.jpg';
import url13 from '../img/eluosi.jpg';
import url14 from '../img/airanshao.jpg';

import Mock from 'mockjs';
import data from '../data/user';

Mock.mock('http://www.users.com',data);

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        $.ajax({
            type:'post',
            url:'http://www.users.com',
            dataType:'json',
            success:function(data){
               var data1=data;
            //    cons  ole.log(data1)
            }
        })
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
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className='home_stop'>
                                    <p>
                                        <i></i>
                                        <span>鲁婷</span>
                                        </p>
                                    <p>这次出行可以说是十分匆忙，把蜜月选在了我们超爱的北欧城市，但提前一天才订了酒店还有丸子，哈哈。因为之前在加州有找过很赞的丸子，所以这一次毫不犹豫的要找丸子同游。经过各种考量，决定找这位每张照片都在笑，也养了狗狗，还在评论里介绍爸爸妈妈的sarah。从接机开始就一路给我们讲斯德哥尔摩的相关知识。接下来的两天给我们安排了非常充实的行程，除了给我们普及各种知识还给我们介绍很多当地特色的小东西小食物。根据我们的吃货需求，还带我们去吃了好吃和特别的餐厅，提议帮我们约餐厅。因为后面有几天我们自己的行程，Sarah还特意带我们把后面两天我们自己逛街和购物的地方踩了点，陪我们去办旅游卡，推荐各种值得去的地方，总之就是各种nice！如果刚好你也跟我们一样超爱北欧风，找Sarah带你们深度游斯德哥尔摩一定没错！只要有丸子出门完全不用做攻略。最后祝Sarah工作顺利，天天开心！</p>
                                </div>
                                <div className='home_sup'>
                                    <p>
                                        <b></b>
                                        <strong>沈小</strong>
                                        <span><Icon type="environment-o" />斯德哥尔摩</span>  
                                    </p>
                                </div>
                                

                            </div>
                            <div className="swiper-slide">
                            
                                <div className='home_stop'>
                                    <p>
                                        <i></i>
                                        <span>施小玫</span>
                                    </p>
                                    <p>谢铮负责了我们一家三口的巴黎之行，无论是接送机还是包车服务，都让人非常满意。途径的名胜古迹都会一一介绍，还推荐了许多当地特色美食。为人坦诚大方，细心体贴。特别让人感动的是，在参观凡尔赛宫时为了不让我们晒太阳，他帮我们排队暴晒了一个多小时，还笑着说没事，自己本来就黑，就当晒日光浴。在我购物血拼时，帮忙照看小朋友。陪着我们玩迪土尼那天，回到酒店都11点了，他还要开车近1个小时才能到家，第二天还是按时按点来接我们。最后送机时还派出了美丽漂亮的夫人在机场帮助我们办理退税，整个过程认真仔细负责！真是完美的一对！有机会再到巴黎，谢铮是我们不二的选择！</p>
                                </div>
                                <div className='home_sup'>
                                    <p>
                                        <b></b>
                                        <strong>谢铮</strong>
                                        <span><Icon type="environment-o" />巴黎</span>  
                                    </p>
                                </div>

                            </div>
                            <div className="swiper-slide">
                            
                                <div className='home_stop'>
                                    <p>
                                        <i></i>
                                        <span>lili</span>
                                        </p>
                                    <p>我这次独自一人带着七岁的女儿去波士顿，能够遇到“李叔叔”真是太幸运了！因为我英文基础不好，第一次去美国，原本仰仗同行的妹妹帮忙，谁知出发前她婆婆突发脑瘀血抢救，她去不了了，我大字不识，入关，接机，酒店住宿……完全开不了口，也听不懂对话啊！还带着一个不更事的孩子……当时临近除夕，波士顿认识的朋友都回国过年了，妹妹情急之下在丸子地球上连续沟通了好几个接机，我也是半信半疑，心里不踏实，妹妹说李春元是一个17个月大的女孩儿的父亲，和他对话感觉人很周到，可信度高，为了让我减少疑虑，妹妹还和李春元沟通了很多孩子的话题，小李真有耐心，主动告知我入关的步骤和航站楼的布局，他让我一下飞机就联系他，他会在大厅等我们，同时电话指导。后来我实在说不清楚的时候都是拍照片发给他，他即时翻译解释。本来把我们安全送到酒店，我就不好意思再麻烦他了，因为我定的酒店门口泊车不太方便，他主动说没事儿，一直帮我们办理完酒店入住，还把自己的联系方式也留给前台，以备万一。这次波士顿的行程我差点儿取消，当时也是不想让女儿失望才咬牙出行，如果不是遇到小李，尤其在出发前再三犹豫的时候，网上细致的沟通给了我点点信心。当然见到李叔叔的一刹那，心也随飞机一起安心着陆了，闺女初见小李时说了一句话：妈妈，李叔叔戴眼镜儿，像matthew老师。路上得知小李的爱人是哈佛的博士后，他自己也是学霸级的，难怪待人接物透着非一般的涵养（呵呵）给李叔叔一个大大的赞！</p>
                                </div>
                                <div className='home_sup'>
                                    <p>
                                        <b></b>
                                        <strong>李春元</strong>
                                        <span><Icon type="environment-o" />波士顿</span>  
                                    </p>
                                </div>
                            
                            </div>
                            <div className="swiper-slide">
                            
                                <div className='home_stop'>
                                    <p>
                                        <i></i>
                                        <span>潘恒</span>
                                        </p>
                                    <p>帅气又有爱心的大哥哥，很快就和孩子们混熟了，谢谢你来接机时和孩子带的见面礼和最后分离时送给孩子的小礼物。黄金海岸不大，但却是海上运动的天堂，大哥哥带着我先生和我儿子去寻找海上游玩项目并积极与教练沟通一些注意事项，让父子俩玩的学的都很开心。然后带着我和我女儿先围着黄金海岸转了一圈，让我们初步了解了一下这个城市，随后转战各个购物中心。让我们一家都受益良多。小伙子很热心，虽然不是他服务时间，他还帮我们叫出租车（黄金海岸的Tax非常少，大街上根本找不着）。虽说是短短的两天，却提供给我们很大的帮助，让我们迅速地知道哪里有好吃好玩好逛的地方，突然就对这个城市有了熟悉感！希望今后还有相聚的机会！</p>
                                </div>
                                <div className='home_sup'>
                                    <p>
                                        <b></b>
                                        <strong>吉原君</strong>
                                        <span><Icon type="environment-o" />黄金海岸</span>  
                                    </p>
                                </div>
                            
                            </div>
                            <div className="swiper-slide">
                            
                                <div className='home_stop'>
                                    <p>
                                        <i></i>
                                        <span>邱岚蓉</span>
                                        </p>
                                    <p>十八天的英国行程结束后，作为资深的自由行爱好者，我要说的是：“条件允许的情况下，英国行最好聘请专业向导，而聘请专业向导就找李向导。”这次从丸子找到李向导，是保证我整个行程舒适安全的关键。下面让我从服务态度、专业性、车辆舒适安全性和附加服务这四项来总结一下这次旅程中的感受。

1、服务态度
从18号下午机场的接机口，到5号下午的送机口，全程十八天的行程里，李导为我们提供了提供点到点、细致周到的全方位超五星服务。
从最初在地球丸子上的沟通开始，李向导细致认真的态度就给我留下了深刻的印象。他问的问题很多也很细，这样做出的行程规划就相应更加契合客户的需求。经过三四次不厌其烦的修改后，行程基本确定。他在沟通中的态度是我最终从众多的丸子中选择他的关键原因。
行程中，他也是一直将客户的需求放在第一位，虽然行程经常会因为我们的临时起意而更改，但几乎能保证我们去到所有想去的地方。
行程临近尾声时，在大人忙于购物的那天下午，他甚至还帮我们当了一下午的保姆。哈哈，我们敢这么做，也是因为他是两个大眼萌娃的爸爸，照看孩子很有经验，绝对是个靠谱的超级奶爸。
行程结束那天，他一直陪同我们完成退税和办理完登记手续，送我们进登机口。
这样的服务态度绝对算得上超五星的啦。

2、专业性
行程规划的合理性：我们的环岛游行程恰逢圣诞假期，在圣诞节当天，英国的绝大多数商店、景点、超市等全部休息。李向导给我们规划的行程中，圣诞节在湖区以游览自然风光为主，并提醒我们提前在酒店预定了圣诞大餐，避免了圣诞期间饿肚子的尴尬😅。

时间的掌控能力：李向导是个非常守时的人，每天他都会在预定时间前十分钟左右到楼下等我们。每到一地，他总是留给我们充裕的时间，却又不忘提醒我们下面的计划。在他的引导之下，我们总能充分利用自己的时间去探索这片陌生的土地。

对各城市道路的熟悉程度：这次的行程中除了在伦敦的住宿选择的是酒店之外，其他的城市我们选择的都是公寓。在这样的情况下，一位对当地道路熟悉的司机就会使得原本就比较复杂的入住环节，变得轻松很多。
记得我们在牛津预订的公寓位于Oxford Castle附近，可是房东提供的取钥匙位置则在附近的另外一个公寓里的一只小钥匙保险箱中。经历了类似寻宝游戏中各种闯关环节后，我们终于打开保险盒，发现里面空空如也。电话打给房东，他说还没来得及放进去，让我直接去公寓。Google Map根据邮编给出的位置并不精确，我相信如果没有李向导的经验，我肯定会花上成倍的时间去找住处。这样的事例还有很多，我想，如果没有李向导，我家那三个性情急躁的男人们一定无法在这次的旅程中感受到同样多的快乐。

对各城市中餐的了解情况：我家有个“中国胃”，这是我们出游各国时一直的困扰。李向导在这次的旅程中很好的解决了这一问题，在大部分城市都推荐了性价比超高的正宗中餐馆，其中要数爱丁堡的Wing Sing Inn雍乐轩最出乎意料。这家餐厅在各大旅游网站都未见推荐，而我们全家对这家餐厅的点评也是出奇意料的一致，“这是一家没人带着，即使路过，也绝对不会选择的餐馆”。可我们两天的三顿主餐都在解决，也是在这里我们冬至那天吃到了正宗的山东水饺，后来还尝到了地道的疙瘩汤等。

停车场的熟悉程度：李向导对各城市主要景点周边的停车场都非常熟悉，总能在尽量使我们走最短的路的同时，避免高额的停车费。这里我要谈谈为何在英国自由行，聘请向导比自己租车自驾要更好。英国是一个历史悠久的国家，她也以善于保持历史原貌而领先于世界其他文明古国，可这样却为现代交通的发展带来了巨大的挑战。大部分年代久远的街道注定只能是双向单车道，无法拓宽成北京常见的宽阔大道；城市中心也无法兴建大型停车场，即便到偏僻的乡村，停车位的设置也主要倾向于当地居民。行车和停车在英国并不是那么轻松的事，不了解规定就很容易收到价格不菲的罚单。

3、车辆的舒适性和安全性
李向导对车辆的整洁度和乘客的舒适度是高要求的，在他的车里坐着永远是舒服的感觉。
每天他都会准备好纸巾、矿泉水和垃圾袋。
他在后备箱里常备有吸尘器，抽空就会将车里打扫干净。
他还在车里常备遮盖毯，配合车窗玻璃贴黑膜，有效地防止有不法之徒看到后备箱里的行李见财起意。

4、附加服务
李向导有相熟的房产经纪、专项向导和丰富的购物经验，这些只在客人有需求的时候才会提供的哦
他根据客人的需求和行程安排，在旅程中合理嵌入看房时间，带客户了解英国房地产市场。
他帮忙预约大英博物馆的中文讲解员—陈老师，一位浸淫于大英博物馆十多年的资深向导，为你讲述藏在展品背后的故事，教你学会如何去使用展品学知识。
由他陪同去剑桥，游船活动时可享受刷脸优惠。
了解最准确的促销信息，根据客人的要求，推荐最适合的购物体验，如在比斯特的奥特莱斯，提醒我们在购物前领取银联九折优惠券；在哈罗德百货提前申请折扣。
临走前，因为行李太多，还专门帮我们找了纸箱📦，胶带和剪刀。
真可谓，只有你想不到的（只要不太过分），没有他办不到的。

非常幸运能遇到这么好的向导，这么多天的相处也使我们成为了朋友。祝福这个爱家爱孩子的好父亲，在自己不懈的努力下，收获更多的成功。也希望下次能再有机会在他的陪同下完成苏格兰、威尔士和北爱尔兰的行程。
</p>
                                </div>
                                <div className='home_sup'>
                                    <p>
                                        <b></b>
                                        <strong>李子正</strong>
                                        <span><Icon type="environment-o" />伦敦</span>  
                                    </p>
                                </div>
                            
                            </div>
                            <div className="swiper-slide">
                            
                                <div className='home_stop'>
                                    <p>
                                        <i></i>
                                        <span>郑燕</span>
                                        </p>
                                    <p>我们一家三口的第一次北海道之行和小秦一起度过了非常愉快的三天时间。小秦有很丰富的当地行车经验，车技佳！路线设计和时间安排也非常专业合理。对于我们的想法尽量满足，服务态度沿袭了日本的文化传统，让我们倍感亲切。对于初次旅游者，小秦为我们提供了很多的帮助，最后离开前我们落了东西在他车上，出发前一大早他还为我们送到JR站，我们很是感谢。为小秦专业的服务点赞！希望我们下次再访北海道能与小秦再相聚！</p>
                                </div>
                                <div className='home_sup'>
                                    <p>
                                        <b></b>
                                        <strong>Mr.Qin</strong>
                                        <span><Icon type="environment-o" />北海道-札幌</span>  
                                    </p>
                                </div>
                            
                            </div>
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>  
            </div>



            <div className='home_main_warp'>
                <div className='home_mian'>
                    <h2>合作伙伴</h2>
                    <ul className='home_nav'>
                        <li>
                            <img src={url11}/>
                            <p>丸子地球是Visa高端持卡人尊宠礼遇合作商，Visa的高端持卡人可以享受丸子地球的专享礼遇优惠。</p>
                        </li>
                        <li>
                            <img src={url12}/>
                            <p>丸子地球是招商银行专享支付通道合作商，招商银行卡用户可以在丸子地球享受招商银行的专属优惠。</p>
                        </li>
                        <li>
                            <img src={url13}/>
                            <p>丸子地球是俄罗斯国家旅游协会的合作伙伴，用户可以在丸子地球上享受俄罗斯国家旅游协会提供的各种精品旅行体验。</p>
                        </li>
                        <li>
                            <img src={url14}/>
                            <p>丸子地球是爱燃烧—中文跑步社区的地接合作伙伴，为爱燃烧的全球马拉松提供专业的地接与向导服务。</p>
                        </li>
                    </ul>
                    
                </div>  
            </div>
           
        </div>
            
        )
    }
}

export default Home;
