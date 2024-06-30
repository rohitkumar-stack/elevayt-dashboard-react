import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import menuItems from "./MenuItems";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


const { Header, Sider, Content } = Layout;

const Layoutes = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ position: "fixed", height: "100vh", left: 0, top: 0, bottom: 0 }}
            >
                <div className="demo-logo-vertical" />
                <div style={{ textAlign: "center" }}>
                    {collapsed ? (
                        <img src={logo} width="70px" height="70px" alt="Logo" />
                    ) : (
                        <img src={logo} width="90px" height="80px" alt="Logo1" />
                    )}
                </div>

                <Menu defaultSelectedKeys={["1"]}>
                    {menuItems.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.link}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        position: "fixed",
                        width: "100%",
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={1}>
                                    <Button
                                        type="text"
                                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                        onClick={() => setCollapsed(!collapsed)}
                                        style={{ fontSize: "16px", width: 64, height: 64 }}
                                    />
                                </Col>

                                <Col md={2}>
                                    <div className="Candidates-heading">
                                        <p>Candidates</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={6}>
                            <div>
                                <Row>
                                    <Col md={4}>
                                        <div className="bell-logo">
                                            <CiBellOn />
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className="user-name">
                                            <p>Pushpak</p>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className="profile-user">
                                            <DropdownButton
                                                id="dropdown-item-button user-dropdow"
                                                title={
                                                    <span>
                                                        <FaUserCircle className="user-profile-icon" />
                                                    </span>
                                                }
                                            >
                                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </Col>

                                    <Col md={2}></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: "88px 16px 16px 16px",
                        padding: 16,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        overflow: "auto",
                        height: "calc(100vh - 88px)"
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Layoutes;
