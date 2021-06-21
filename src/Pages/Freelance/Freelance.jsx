import React from 'react'
import './Freelance.css'
import { Container, Row, Col, Card, ButtonGroup, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ContextApi } from '../../Contexts/Contexts'

export default function Freelance() {

    const {state} = React.useContext(ContextApi)

    const links = [
        {text:'All', path:'/', category:'all'},
        {text:'Wbe dev', path:'/store', category:'cars'},
        {text:'Electronic', path:'/rental', category:'electronic'},
        {text:'Machenic', path:'/mobile', category:'mobile'},
        {text:'Builder', path:'/aucation', category:'bike'},
        {text:'Designer', path:'/services', category:'furniture'},
    ]

    return (
        <>
        <div className="sub-navbar-wraper">
            <Container>
                <div className="d-flex justify-content-between">
                    <div>
                        <ul className="nav">
                            {links.map( link =>(
                                <li className="nav-item">
                                    <span className="nav-link"> 
                                        {link.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ButtonGroup>
                            <FormControl className="ml-2" type="search" placeholder="Search by Name"/>
                            <Button>Search</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Container>
        </div>
        <Container>
        <div  className="content-wraper">
            Freelance
            <Row>
                {state.freelancers && state.freelancers.map(user => <FreeLancersContent user={user} />)}
            </Row>
        </div>
        </Container>
        </>
    )
}


const FreeLancersContent = ({user}) => {
    return(
        <Col md="3" className="mb-3">
            <Card>
                <div>
                    <img src={process.env.PUBLIC_URL+ user.avatar} height="150px" width="100%" />
                </div>
                <Card.Footer>
                    <h5>{user.name}</h5>
                    <p>{user.title}</p>
                    <div className="mt-2">
                        <NavLink className="btn btn-primary w-100" to={`/freelancer/${user._id}`}>View Profile</NavLink>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    )
}