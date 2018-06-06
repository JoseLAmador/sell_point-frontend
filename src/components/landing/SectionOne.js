import React, {Component} from 'react';
import "./landingStyle.css";

class SectionOne extends Component{
    render(){
        return(
            <section className={"section-one"}>
                <div>
                    <h2>ArnusShop</h2>
                </div>

                <div className={"first-section-one"}>

                        <div  style={{width:'100%'}}>
                            <h3>Dualipa</h3>

                            <p>¡No necesitas ser diseñador gráfico!

                                Establece tu marca en línea con un dominio personalizado y una tienda online. Recibe
                                acceso instantáneo a cientos de las más hermosas plantillas, y controla completamente
                                el look y la imagen de tu marca. Finalmente podrás crear una tienda online propia que
                                refleja tu personalidad y la de tu negocio.
                            </p>

                            <p>
                                Todo en un solo lugar

                                Vender tus productos en distintos lugares debería ser tan sencillo como venderlos en
                                tu local comercial. Con Shopify, cuentas con una plataforma para manejar tu negocio en
                                internet con facilidad.
                            </p>
                        </div>


                    <div style={{width:'50%'}}>
                        <img src={require('../../imgs/image_1.png')} alt={"image_1"} style={{maxWidth:'250px', maxHeight:'250px'}}/>
                    </div>

                </div>

            </section>

        );
    }
}

export default SectionOne;