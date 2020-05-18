import React, { Component } from 'react';
import { Redirect , Route , Switch , NavLink } from "react-router-dom"
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import Basic from "./com/basic"
import Chart from "./com/chart"
import Dashboard from "./com/dashboard"
import Forms from "./com/forms"
import Lcons from "./com/lcons"
import Sample from "./com/sample"
import Tables from "./com/tables"
import "./style.less"
import { getData } from "../../action/getAction"
import Axios from "axios"

const { Header, Content, Sider } = Layout;

export default @connect(
    (state) =>{
        return {
            loginData:state.logReducer.data
        }
    },
    {
        getData
    }
)
class Home extends Component {
    componentDidMount(){
        Axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser').then(res=>{
          this.props.getData(res.data.users)
        })
      }
    render() {
        let  { loginData } = this.props
        return (
            <div className="Home">
                <Layout>
                    <Header className="header">
                        <p className="HomeImg"><img src="/img/login1.png" /></p>
                        <p className="HomeUser">用户: {loginData.username}</p>
                    </Header>
                    <Layout>
                    <Sider className="site-layout-background Homelt">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <Menu.Item key="1">
                                <NavLink to="/home/dashboard"> <span> Dashbosrd ( 2 new updates)</span></NavLink> <UserOutlined  style={{marginLeft:"0.2rem"}}/>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/home/Basic"><span>Basic UI Elements</span> </NavLink>   < LaptopOutlined style={{marginLeft:"0.2rem"}}/>
                            </Menu.Item>
                            <Menu.Item key="3" >
                                <NavLink to="/home/lcons"><span> lcons</span></NavLink>   <NotificationOutlined style={{marginLeft:"0.2rem"}} />
                            </Menu.Item>
                            <Menu.Item key="4" >
                                <NavLink to="/home/forms"><span> Form Elements</span></NavLink>   <NotificationOutlined style={{marginLeft:"0.2rem"}} />
                            </Menu.Item>
                            <Menu.Item key="5" >
                                <NavLink to="/home/chart"><span> Chart</span></NavLink>   <NotificationOutlined style={{marginLeft:"0.2rem"}} />
                            </Menu.Item>
                            <Menu.Item key="6" >
                                <NavLink to="/home/tables"><span> Table</span></NavLink>   <NotificationOutlined style={{marginLeft:"0.2rem"}} />
                            </Menu.Item>
                            <Menu.Item key="7" >
                                <NavLink to="/home/sample"><span> Sample Pages</span></NavLink>   <NotificationOutlined style={{marginLeft:"0.2rem"}} />
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                            <Switch>
                                <Route path="/home/basic" component={Basic}/>
                                <Route path="/home/chart" component={Chart}/>
                                <Route path="/home/dashboard" component={Dashboard}/>
                                <Route path="/home/forms" component={Forms}/>
                                <Route path="/home/lcons" component={Lcons}/>
                                <Route path="/home/sample" component={Sample}/>
                                <Route path="/home/tables" component={Tables}/>
                                <Redirect exact from="/home" to="/home/chart" />
                            </Switch>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
