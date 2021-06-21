import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Card, ButtonGroup, FormControl, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import {ContextApi} from '../../Contexts/Contexts'

export default function FreelanceProfile() {

    const { state } = React.useContext(ContextApi)

    const {id} = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState(null)
    const [user, setUser] = useState(null)

    async function getIem(){
        setIsLoading(true)
        try {
            let result = await state.freelancers ?  state.freelancers.filter(freelancer => freelancer._id === id) : null
            if(result) {
                setUser(result[0]) 
                setIsLoading(false)
            }else{
                setMsg('No found!')
            }
        } catch (error) {
            
        }
    }

    useEffect(() => getIem(), [id])


    let userDetails
    if(user){
        userDetails = <Card>
            <Row>
                <Col md="4">
                    <div className="p-2">
                    <img src={process.env.PUBLIC_URL+user.avatar} height="200px" width="100%" alt="kon" />
                    <h5>{user.title}</h5>
                    <p>salling at good conditions and many more for now hury up for this offer"this is just some damp details for this car am salling at good conditions and many more for now hury up for this offer</p>
                    
                    <div className="d-flex">
                        <button className="btn btn-info btn-sm mr-1"><FaFacebook /></button>
                        <button className="btn btn-info btn-sm mr-1"><FaFacebook /></button>
                        <button className="btn btn-info btn-sm mr-1"><FaFacebook /></button>
                        <button className="btn btn-info btn-sm mr-1"><FaFacebook /></button>
                    </div>
                </div>
                </Col>
                <Col md="8">
                    <div>
                    <table className="table">
                        <tr>
                            <td>Name:</td>
                            <td className="w-75">{user.name}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{user.gender}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{user.age}</td>
                        </tr>
                        <tr>
                            <td>Current State:</td>
                            <td>{user.current_state}</td>
                        </tr>
                        <tr>
                            <td>University of :</td>
                            <td>{user.university}</td>
                        </tr>
                        <tr>
                            <td>College of:</td>
                            <td>{user.college}</td>
                        </tr>
                        <tr>
                            <td>Departement of:</td>
                            <td>{user.dept}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <td>E-mail:</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>WhatsApp:</td>
                            <td>{user.whatsapp}</td>
                        </tr>
                    </table>
                    </div>
                </Col>
            </Row>
        </Card>
    }

    return (
        <Container className="content-wraper">
            {userDetails}
        </Container>
    )
}
