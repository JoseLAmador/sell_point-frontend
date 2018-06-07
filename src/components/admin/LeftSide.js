import React from 'react';
import {Icon, Menu} from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

const LeftSide = ({onOpenChange, openKeys})=>{
    return(
        <Menu
            mode={"inline"}
            openKeys={openKeys}
            defaultSelectedKeys={[]}
            defaultOpenKeys={[]}
            onOpenChange={onOpenChange}

        >
            <SubMenu  key="sub1" title={<div>
                <Icon type="shopping-cart" style={{fontSize:15, fontWeight:'bold'}}/>
                <span style={{fontWeight:'bold', }}>Tiendita 1</span></div>}
            >
                <Menu.Item key="1" disabled={false}>
                    <Link to={'/shop/gastos'} >Gastos</Link>
                </Menu.Item>

                <Menu.Item key="2" disabled={false}>
                    <Link to={'/shop/inventario'} >Inventario</Link>
                </Menu.Item>

                <Menu.Item key="3" disabled={false}>
                    <Link to={'/shop/compras'} >Compras</Link>
                </Menu.Item>

                <Menu.Item key="4" disabled={false}>
                    <Link to={'/shop/ventas'} >Ventas</Link>
                </Menu.Item>

                <Menu.Item key="5" disabled={false}>
                    <Link to={'/shop/bancos'} >Bancos</Link>
                </Menu.Item>

                <Menu.Item key="6" disabled={false}>
                    <Link to={'/shop/reportes'} >Reportes de Venta</Link>
                </Menu.Item>

                <Menu.Item key="7" disabled={false}>
                    <Link to={'/shop/proveedores'} >Proveedores</Link>
                </Menu.Item>

                <Menu.Item key="8" disabled={false}>
                    <Link to={'/shop/clientes'} >Clientes</Link>
                </Menu.Item>
            </SubMenu>

                <SubMenu  key="sub2" title={<div><Icon type="shopping-cart" style={{fontSize:15, fontWeight:'bold'}}/>
                    <span style={{fontWeight:'bold', }}>Tiendita 2</span></div>}>
                    <Menu.Item key="9" disabled={false}>
                        <Link to={'/login'} >subMenu 1</Link>
                    </Menu.Item>
                    <Menu.Item key="10" disabled={false}>
                        <Link to={'/registro'} >subMenu 2</Link>
                    </Menu.Item>
            </SubMenu>

        </Menu>
    );
};

export default LeftSide;