import React, { useContext } from 'react'
import {ContextApi} from '../../Contexts/Contexts'
import ItemCard from '../../Component/ItemCard/ItemCard'
import {MainTitle} from '../../Component/Titles/Titles'
import { Container, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaTv, FaChevronRight } from 'react-icons/fa'
import './Home.css'


export default function Home() {

    const {state} = useContext(ContextApi)
   

    return (
        <div>
            <header className="header-wraper">
                <div className="hero-wraper">
                    {/* <h1>Research Compare, Fine What's Right For You</h1> */}
                    <h1>Online Store Everything you need</h1>
                    <div className="mt-3">
                        <button className="hero-btn">Get Started</button>
                    </div>
                </div>
            </header>
            <Container>
                <div className="content-wraper">
                    <MainTitle text="New On Stock" />
                    <Row>
                        {state.items && state.items.map(item => <ItemCard col="4" item={item} height="190px" />)}
                    </Row>
                </div>
            </Container>
            <div className="">
                <Container>
                    <div className="content-wraper text-center">
                        <MainTitle text="Srvices" />
                        <Row>
                            <Col md="4">
                                <div className="">
                                    <h3>Advertisment</h3>
                                    <p>"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer</p>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="">
                                    <h3>Freelancing</h3>
                                    <p>"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer</p>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="">
                                    <h3>Web developement</h3>
                                    <p>"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="gray-bg">
                <Container>
                    <div className="content-wraper">
                        <Row>
                            <Col md="6">
                                <div className="why-to-use">
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="d-flex">
                                    <div className="px-3">
                                        <FaTv  className="body-icon"/>
                                    </div>
                                    <div className="">
                                        <h2>WEB AND APP DEVELOPEMENT</h2>
                                        <p>
                                            this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer"this is just some damp details for this car am salling at good conditions 
                                        </p>
                                        <p>
                                            and many more for now hury up for this offer this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer</p>
                                        <NavLink className="btn btn-primary btn-lg" to="/web-developement">Learn More <FaChevronRight /></NavLink>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="graybg">
                <Container>
                    <div className="content-wraper">
                        <Row>
                            <Col md="6">
                                <div className="">
                                    <h1>Why To Use Suk</h1>
                                    <p>this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer</p>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="">
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

        </div>
    )
}
