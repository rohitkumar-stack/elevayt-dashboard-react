import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@mui/material/Grid';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import {menuItems} from "./NewProfileMenu";
import { CiFilter} from "react-icons/ci";
import { CgSoftwareDownload} from "react-icons/cg";
import Profileview from "./Profileview";


const Newprofile = () => {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState('');

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <>
      {/* section filter */}
      <Row>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  <Grid item xs={11}>
                      <Row className="ml-4">
                          <div>
                              <p className="filters-text">
                                  <CiFilter className="filter-icon" /> FILTERS:
                              </p>
                          </div>
                          <Col md={11.8}>
                            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="Menu-submenu">
                              {menuItems.map((menu) => (
                                <SubMenu
                                  key={menu.key}
                                  title={
                                    <span>
                                      {menu.title} <DownOutlined />
                                    </span>
                                  }
                                >
                                  {menu.items.map((item) => (
                                    <Menu.Item key={item.key}>
                                      <Link to={item.link}>{item.label}</Link>
                                    </Menu.Item>
                                  ))}
                                </SubMenu>
                              ))}
                            </Menu>
                          </Col>
                      </Row>
                  </Grid>
                  <Grid item xs={1}>
                      <div className="dowload-box">
                          <Link to="#">
                              <CgSoftwareDownload className="dowload-box-icon" />
                          </Link>
                      </div>
                  </Grid>
              </Grid>
          </Box>
      </Row>

      {/* section Show-Profile */}
      <Profileview/>
    </>
  );
}

export default Newprofile;
