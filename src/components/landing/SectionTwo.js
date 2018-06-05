import React, {Component} from 'react';
import './landingStyle.css';

class SectionTwo extends Component{
    render(){
        return(
            <section className={"section-features"}>
                <div className={"first-section-two"} >

                    <div className="cardSectionTwo">
                        <img src={require('../../imgs/calendar.svg')} alt={"image_1"} className={"imgStyle"}/>
                            <div className="container">
                                <h4><b>Monitorea tus pedidos</b></h4>
                                <p>Administra tus pedidos y tu inventario en todo momento.</p>
                            </div>
                    </div>

                    <div className="cardSectionTwo">
                        <img src={require('../../imgs/calendar.svg')} alt={"image_1"} className={"imgStyle"}/>
                        <div className="container">
                            <h4><b>Recibe pagos facilmente</b></h4>
                            <p>Ofrece múltiples opciones de pago como tarjetas de crédito y Paypal
                            </p>
                        </div>
                    </div>

                    <div className="cardSectionTwo">
                        <img src={require('../../imgs/calendar.svg')} alt={"image_1"} className={"imgStyle"}/>
                        <div className="container">
                            <h4><b>Promueve las ventas</b></h4>
                            <p>Crea, administra y comparte cupones promocionales para
                            </p>
                        </div>
                    </div>

                   {/* <div className="cardSectionTwo">
                        <Icon type="calendar" style={{ fontSize: 50, color: '#08c' }}  className={"imgStyle"}/>
                        <div className="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                    */}

                </div>

            </section>
        );
    }
}

export default SectionTwo;