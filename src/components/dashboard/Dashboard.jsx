import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Newprofile from "./Newprofile";



const Dashboard = () => {
  return (
    <Row>
      <Col>
        <Tabs defaultActiveKey="New" className="mb-3 tabs-modify">
          <Tab eventKey="New" title="New" className="tabs-modify-content">
           <div>
            <Newprofile/>
           </div>
          </Tab>
          <Tab eventKey="qulified" title="Qulified" className="tabs-modify-content">
          <Row>
            <Col md={12} className="ml-3">
               Tab content for Profile
            </Col>
          </Row>
          </Tab>
          <Tab eventKey="ON-Hold" title="ON-Hold" className="tabs-modify-content">
            <Row>
            <Col md={12} className="ml-3">
                ON-Hold
            </Col>
          </Row>
          </Tab>
          <Tab eventKey="Rejected" title="Rejected" className="tabs-modify-content">
            <Row>
            <Col md={12} className="ml-3">
                Rejecteds
            </Col>
          </Row>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Dashboard;
