import React, {Component} from 'react';
import {Icon} from 'antd';
import './landingStyle.css';

class SectionThree extends Component{
    render(){
        return(
            <section className={"section-three"}>
                <div>
                    <h3 style={{fontSize:20}}>Todas las funciones que necesitas para tu negocio online</h3>
                </div>

                <div className={"first-section-three"}>

                <div style={{width:400}}>

                    <div className={"itemContainer"}>
                    <div className={"itemCheck"}>
                        <Icon type="check-circle-o" className={"itemIcon"}/>
                        <span className={"itemSpan"}>Cientos de plantillas increíbles</span>
                    </div>
                    <div className={"itemCheck"}>
                        <Icon type="check-circle-o" className={"itemIcon"}/>
                        <span className={"itemSpan"}>Sencillo editor para crear tu tienda online</span>
                    </div>
                    <div className={"itemCheck"}>
                        <Icon type="check-circle-o" className={"itemIcon"}/>
                        <span className={"itemSpan"}>Optimizado para dispositivos móviles</span>
                    </div>
                    <div className={"itemCheck"}>
                        <Icon type="check-circle-o" className={"itemIcon"}/>
                        <span className={"itemSpan"}>Checkout seguro</span>
                    </div>
                    <div className={"itemCheck"}>
                        <Icon type="check-circle-o" className={"itemIcon"}/>
                        <span className={"itemSpan"}>Múltiples opciones de pago</span>
                    </div>
                    </div>
                </div>

                    <div style={{width:400}}>

                        <div className={"itemContainer"}>
                            <div className={"itemCheck"}>
                                <Icon type="check-circle-o" className={"itemIcon"}/>
                                <span className={"itemSpan"}>Espectaculares galerías de producto</span>
                            </div>
                            <div className={"itemCheck"}>
                                <Icon type="check-circle-o" className={"itemIcon"}/>
                                <span className={"itemSpan"}>Sistema de administración profesional</span>
                            </div>
                            <div className={"itemCheck"}>
                                <Icon type="check-circle-o" className={"itemIcon"}/>
                                <span className={"itemSpan"}>Envíos e impuestos internacionales</span>
                            </div>
                            <div className={"itemCheck"}>
                                <Icon type="check-circle-o" className={"itemIcon"}/>
                                <span className={"itemSpan"}>Cupones y descuentos</span>
                            </div>
                            <div className={"itemCheck"}>
                                <Icon type="check-circle-o" className={"itemIcon"}/>
                                <span className={"itemSpan"}>Ayuda 24 horas, 7 días a la semana</span>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
        );
    }
}

export default SectionThree;