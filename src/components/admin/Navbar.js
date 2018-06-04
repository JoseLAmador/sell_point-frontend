import React from 'react';
import {Icon, Menu} from 'antd';

const SubMenu = Menu.SubMenu;

const Navbar = ({toggle, collapsed})=>{
    return(
        <div className={"navbarStyle"}>
            <span>
                <Icon
                    className={"trigger"}
                    type={collapsed?'menu-unfold':'menu-fold'}
                    onClick={toggle}
                />
            </span>

            <span>
                <Menu mode={"horizontal"}>
                    <SubMenu key={'sub1'} title={<span>Hello, Shop</span>}>
                        <Menu.Item>
                            <span>
                                <Icon type={'logout'}/>
                                <span>Cerrar Sesion</span>
                            </span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </span>
        </div>
    )

};
export default Navbar;