import React, {Component} from 'react';
import {Carousel} from 'antd';

class SectionFour extends Component{
    render(){
        return(
            <Carousel >
                <div>
                    <div className={"imageCarousel1"}>
                        <h3 className={"titleWhite"}>
                            Shopify conecta a creadores, que venden productos de calidad y cuidadosamente diseñados,
                            con clientes
                        </h3>
                    </div>
                </div>
                <div>
                    <div className={"imageCarousel2"}>
                        <h2 className={"titleWhite"}>
                            Shopify ayuda a emprendedores a cumplir sus sueños de ser diseñadores de moda
                        </h2>
                    </div>
                </div>
                <div>
                    <div className={"imageCarousel3"}>
                        <h2 className={"titleWhite"}>
                            Shopify ayuda a diseñadores industriales a reinventar tu productos tradicionales
                        </h2>
                    </div>
                </div>
            </Carousel>

        );
    }
}

export default SectionFour;