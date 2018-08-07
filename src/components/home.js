import React from 'react';
import { Carousel } from 'antd';
import '../css/home.css'
import url from '../img/WechatIMG1209.jpeg';


class Home extends React.Component{
    constructor(props){
        super(props)

    }
    
    render(){
        return(
            <div className="home_b">
                <Carousel autoplay>
                    <div><img src={url}/></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        )
    }
}

export default Home;
		

