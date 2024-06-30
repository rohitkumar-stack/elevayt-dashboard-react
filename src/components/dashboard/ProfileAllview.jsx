import React from "react";
import Box from "@mui/material/Box";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "@mui/material/Grid";
import { CgMail } from "react-icons/cg";
import Card from "react-bootstrap/Card";
import ProfileImg03 from "../assets/images/images03.jpeg";
import ProfileImg04 from "../assets/images/images04.jpeg";
import BlueCheck from "../assets/images/Bluecheck.png";
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";

const cardsData = [
    {
        name: "AbhivYakti Sharma",
        title: "Technical Lead",
        email: "*******@gmail.com",
        phone: "******6655",
        appliedFor: "Lead web developer",
        expCTC: "Open",
        matchPercentage: "100%",
        profileImg: ProfileImg03,
        skills: [
            { name: "JavaScript", rating: 4 },
            { name: "AngularJS", rating: 4 },
            { name: "ReactJS", rating: 4 },
        ],
        additionalSkills: 5,
    },
    {
        name: "Aasheen Khan",
        title: "Technical Lead",
        email: "*******@gmail.com",
        phone: "******6655",
        appliedFor: "Lead web developer",
        expCTC: "Open",
        matchPercentage: "100%",
        profileImg: ProfileImg04,
        skills: [
            { name: "JavaScript", rating: 4 },
            { name: "AngularJS", rating: 4 },
            { name: "ReactJS", rating: 4 },
        ],
        additionalSkills: 5,
    },
];

const CardComponent = ({ data }) => (
    <Card style={{ width: "68rem" }} className="mt-4">
        <Card.Body>
            <Row>
                <Col md={3}>
                    <Row>
                        <Col md={2}>
                            <div className="profile-outerline">
                                <img src={data.profileImg} alt="profile-img" className="profile-image" />
                            </div>
                        </Col>
                        <Col md={10}>
                            <div className="content-justify">
                                <div className="profile-header">
                                    <h5 className="profile-show-title">{data.name}</h5>
                                    <img src={BlueCheck} alt="Blue-Check" className="profile-BlueCheck" />
                                </div>
                                <div className="technical-title-outer">
                                    <p className="technical-title">{data.title}</p>
                                </div>
                                <div className="gmail-outer">
                                    <CgMail className="gmail-icon" />
                                    <span className="gmail-text">{data.email}</span>
                                </div>
                                <div className="phone-outer">
                                    <FaPhoneAlt className="phone-icon" />
                                    <span className="phone-text">{data.phone}</span>
                                </div>
                                <p className="View-resume">View Resume</p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col md={3}>
                    <Row>
                        <Col md={12}>
                            <div className="vl">
                                <div className="ml-2">
                                    <div className="Appllied-title-outer">
                                        <p className="Appllied-title">Applied for: {data.appliedFor}</p>
                                    </div>
                                    <div className="Exp-title-outer">
                                        <p className="Exp-title">Exp CTC: {data.expCTC}</p>
                                    </div>
                                    <div className="Match-title-outer">
                                        <p className="Match-title">Match Percentage</p>
                                    </div>
                                    <div className="profile-header">
                                        <div className="box-bg">
                                            <p>{data.matchPercentage}</p>
                                        </div>
                                        <p className="View-details">View details</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col md={6}>
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Col md={6}>
                                    <div className="Candidate-title-outer">
                                        <p className="Candidate-title">Candidate Skills</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="notes-outerline">
                                        <FaNoteSticky className="Add-notes-title" />
                                        <span className="Add-notes-title"> Add Notes</span>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                {data.skills.map((skill, index) => (
                                    <Col md={3.6} key={index}>
                                        <div className="javascript-outerline">
                                            <img src={BlueCheck} alt="Blue-Check" className="javascript-BlueCheck" />
                                            <p className="javascript-title">{skill.name}</p>
                                            <p className="star-value">
                                                {skill.rating} <FaStar className="star-icon" />
                                            </p>
                                        </div>
                                    </Col>
                                ))}
                                <Col md={1}>
                                    <div className="value-outerline">
                                        <p className="star-value-data">+ {data.additionalSkills}</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}></Col>
                                <Col md={8}>
                                    <Row>
                                        <Col md={4}>
                                            <div className="outerline-qualified">
                                                <p>Qualify</p>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="outerline-qualified">
                                                <p>Reject</p>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="outerline-qualified">
                                                <p>On-Hold</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

const ProfileAllview = () => (
    <Row>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="ml-4 mt-2">
                        <div>
                            <p className="Showing-profile-title">Showing 32 Profiles</p>
                        </div>
                        <div>
                            {cardsData.map((card, index) => (
                                <CardComponent key={index} data={card} />
                            ))}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    </Row>
);

export default ProfileAllview;
