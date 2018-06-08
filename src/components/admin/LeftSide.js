import React from 'react';
import {Icon, Menu} from 'antd';
import {Link} from 'react-router-dom';

const LeftSide = ({onOpenChange, openKeys})=>{
    return(
        <Menu
            mode={"inline"}
            openKeys={openKeys}
            defaultSelectedKeys={[]}
            defaultOpenKeys={[]}
            onOpenChange={onOpenChange}

        >
                <Menu.Item key="1" disabled={false}>
                    <Icon type="pushpin-o" className={"iconStyleText iconFont"}/>
                    <span><Link to={'/shop/gastos'} className={"iconStyleText"} >Gastos</Link></span>
                </Menu.Item>

                <Menu.Item key="2" disabled={false}>
                    <Icon type="file-text" className={"iconStyleText iconFont"} />
                    <span><Link to={'/shop/inventario'} className={"iconStyleText"} >Inventario</Link></span>
                </Menu.Item>

                <Menu.Item key="3" disabled={false}>
                    <Icon type="shopping-cart" className={"iconStyleText iconFont"} />
                    <span><Link to={'/shop/compras'} className={"iconStyleText"} >Compras</Link></span>
                </Menu.Item>

                <Menu.Item key="4" disabled={false}>
                    <Icon type="export" className={"iconStyleText iconFont"} />
                    <span><Link to={'/shop/ventas'} className={"iconStyleText"} >Ventas</Link></span>
                </Menu.Item>

                <Menu.Item key="5" disabled={false}>
                    <Icon type="credit-card" className={"iconStyleText iconFont"} />
                    <span><Link to={'/shop/bancos'} className={"iconStyleText"} >Bancos</Link></span>
                </Menu.Item>

                <Menu.Item key="6" disabled={false}>
                    <Icon type="folder" className={"iconStyleText iconFont"} />
                    <span><Link to={'/shop/reportes'} className={"iconStyleText"} >Reportes de Venta</Link></span>
                </Menu.Item>

                <Menu.Item key="7" disabled={false}>
                    <Icon type="team" className={"iconStyleText iconFont"} />
                    <span><Link to={'/shop/proveedores'} className={"iconStyleText"} >Proveedores</Link></span>
                </Menu.Item>

                <Menu.Item key="8" disabled={false}>
                    <Icon type="user" className={"iconStyleText iconFont"} />
                    <span><Link to={'/shop/clientes'} className={"iconStyleText"} >Clientes</Link></span>
                </Menu.Item>

        </Menu>
    );
};

export default LeftSide;