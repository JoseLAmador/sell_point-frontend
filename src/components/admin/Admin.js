import React, {Component} from 'react';
import {Layout, Icon, message } from 'antd';
import LeftSide from "./LeftSide";
import Navbar from "./Navbar";
import Sections from './Sections';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../redux/actions/users/userActions';


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

    logOut = () => {
        this.props.userActions.logOut();
        message.info(`Vuelve Pronto ${this.props.user.username}`);
        this.props.history.push('/');
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
        let {user} = this.props;
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
                        <span style={{color:'white'}}><strong>ARNURSHOP</strong></span>
                    </div>:<div>
                            <Icon type="shop" style={{color:'white', fontSize:20, fontWeight:'bold'}}/>
                        </div>}</div>
                    <LeftSide onOpenChange={this.onOpenChange} openKeys={this.state.openKeys}/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#7CC097', padding: 0}} >
                       <Navbar
                           {...user}
                           logOut={this.logOut}
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

function mapStateToProps(state){
    console.log(state);
    return{
        user:state.user.object,
        fetched: state.user.object !== undefined
    }
}

function mapDispatchToProps(dispatch) {
    return{
        userActions: bindActionCreators(userActions, dispatch)
    }
}

Admin = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default Admin;