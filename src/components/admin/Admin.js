import React, {Component} from 'react';
import {Layout, Icon } from 'antd';
import LeftSide from "./LeftSide";
import Navbar from "./Navbar";
import Sections from './Sections';

const { Header, Sider, Content } = Layout;

class Admin extends Component{
    rootSubmenuKeys = ['sub1', 'sub2'];

    state = {
        collapsed: false,
        openKeys: [],
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    render(){
        return(

            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    width={250} style={{ background: '#fff'}}

                >
                    <div className="logo" >{!this.state.collapsed?
                        <div>
                        <Icon type="shop" style={{marginRight:10, color:'white', fontSize:20, fontWeight:'bold'}} />
                        <span style={{color:'white'}}><strong>TIENDITAS</strong></span>
                    </div>:<div>
                            <Icon type="shop" style={{color:'white', fontSize:20, fontWeight:'bold'}}/>
                        </div>}</div>
                    <LeftSide onOpenChange={this.onOpenChange} openKeys={this.state.openKeys}/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#7CC097', padding: 0}} >
                       <Navbar
                        collapsed={this.state.collapsed}
                        toggle={this.toggle}
                       />
                    </Header>
                    <Content style={{ margin: '1%', padding: '1%', background: '#f0f2f5', minHeight: '90vh' }}>
                        <Sections />
                    </Content>
                </Layout>
            </Layout>

        );
    }
}

export default Admin;