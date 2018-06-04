import React from 'react';
import {Icon, Menu} from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

const LeftSide = ({onOpenChange, openKeys})=>{
    return(
        <Menu
            theme={"dark"}
            mode={"inline"}
            openKeys={openKeys}
            defaultSelectedKeys={[]}
            defaultOpenKeys={[]}
            onOpenChange={onOpenChange}
        >
            <SubMenu  key="sub1" title={<div><Icon type="shopping-cart" /><span>Tiendita 1</span></div>} >
                <Menu.Item key="1" disabled={false}>
                    <Link to={'/shop/tienda'} >subMenu 1</Link>
                </Menu.Item>
                <Menu.Item key="2" disabled={false}>
                    <Link to={'/registro'} >subMenu 2</Link>
                </Menu.Item>
            </SubMenu>

                <SubMenu  key="sub2" title={<div><Icon type="shopping-cart" /><span>Tiendita 2</span></div>}>
                    <Menu.Item key="3" disabled={false}>
                        <Link to={'/login'} >subMenu 1</Link>
                    </Menu.Item>
                    <Menu.Item key="4" disabled={false}>
                        <Link to={'/registro'} >subMenu 2</Link>
                    </Menu.Item>
            </SubMenu>

        </Menu>
    );
};

export default LeftSide;