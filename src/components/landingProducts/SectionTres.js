import React, {Component} from 'react';
import {Carousel} from 'antd';

class SectionTres extends Component{
    render(){
        return(
            <Carousel autoplay={true}>
                <div>
                    <div className={"imageCarouselProduct1"} />
                </div>
                <div>
                    <div className={"imageCarouselProduct2"} />
                </div>
                <div>
                    <div className={"imageCarouselProduct3"} />
                </div>
            </Carousel>

        );
    }
}

export default SectionTres;