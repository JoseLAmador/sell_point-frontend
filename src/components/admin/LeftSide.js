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
                    <Link to={'/shop/gastos'} >
                        <Icon type="pushpin-o" className={"iconStyleText iconFont"}/>
                        <span className={"iconStyleText"}>Gastos</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2" disabled={false}>
                    <Link to={'/shop/inventario'} >
                        <Icon type="file-text" className={"iconStyleText iconFont"} />
                        <span className={"iconStyleText"}>Inventario</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="3" disabled={false}>
                    <Link to={'/shop/compras'} >
                        <Icon type="shopping-cart" className={"iconStyleText iconFont"} />
                        <span className={"iconStyleText"}>Compras</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="4" disabled={false}>
                    <Link to={'/shop/ventas'} >
                        <Icon type="export" className={"iconStyleText iconFont"} />
                        <span className={"iconStyleText"}>Ventas</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="5" disabled={false}>
                    <Link to={'/shop/bancos'} >
                        <Icon type="credit-card" className={"iconStyleText iconFont"} />
                        <span className={"iconStyleText"}>Bancos</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="6" disabled={false}>
                    <Link to={'/shop/reportes'} >
                        <Icon type="folder" className={"iconStyleText iconFont"} />
                        <span className={"iconStyleText"}>Reportes de Venta</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="7" disabled={false}>
                    <Link to={'/shop/proveedores'} >
                        <Icon type="team" className={"iconStyleText iconFont"} />
                        <span className={"iconStyleText"}>Proveedores</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="8" disabled={false}>
                    <Link to={'/shop/clientes'} >
                        <Icon type="user" className={"iconStyleText iconFont"} />
                        <span className={"iconStyleText"}>Clientes</span>
                    </Link>
                </Menu.Item>

        </Menu>
    );
};

export default LeftSide;