import React from 'react'
import { Container, Row, Col, ButtonGroup, FormControl, Button } from 'react-bootstrap'
import { 
    FaPhoneSquareAlt, 
    FaEnvelopeSquare, 
    FaWhatsappSquare, 
    FaInstagramSquare, 
    FaPinterestSquare, 
    FaTwitterSquare, 
    FaFacebookSquare 
} from 'react-icons/fa'
import './Footer.css'


export default function Footer() {
    return (
        <div className="footer-wraper text-white">
            <Container>
                <Row>
                    <Col md="3">
                        <div>
                            <h4>COMPANY</h4>
                            <ul className="p-0">
                                <li className="p-2"> About us</li>
                                <li className="p-2">Services</li>
                                <li className="p-2">My Account</li>
                                <li className="p-2">Order Status</li>
                                <li className="p-2">Wishlist</li>
                                <li className="p-2">Owners Manual</li>
                                <li className="p-2">Terms & Conditions</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="4">
                        <div>
                            <h4>CONTACTS</h4> 
                            <ul className="p-0">
                                <li className="p-2"><FaFacebookSquare className="contact-icon" /> Location: Juba S Sudan</li>
                                <li className="p-2"><FaPhoneSquareAlt className="contact-icon" /> Phone: +211920079070</li>
                                <li className="p-2"><FaWhatsappSquare className="contact-icon" /> WhatsApp:  +211920079070</li>
                                <li className="p-2"><FaEnvelopeSquare className="contact-icon" /> E-mail: konsonak@gmail.com</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="5">
                        <div>
                            <h4>DEALS SENT TO YOU</h4> 
                            <p>on our latest seller financed land, once weekly.</p>
                            <ButtonGroup className="w-100">
                                <FormControl className="subcribe-field" type="text" placeholder="Enter E-mail address" />
                                <Button className="subcribe-btn">Subcribe</Button>
                            </ButtonGroup>
                            <div className="py-3">
                                <h2>Follow us on</h2> 
                                <div className="d-flex">
                                    <div className="p-2"><FaFacebookSquare className="footer-media-icon" /></div>
                                    <div className="p-2"><FaInstagramSquare className="footer-media-icon" /></div>
                                    <div className="p-2"><FaPinterestSquare className="footer-media-icon" /></div>
                                    <div className="p-2"><FaTwitterSquare className="footer-media-icon" /></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
