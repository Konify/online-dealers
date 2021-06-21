import React, { useState, useContext } from 'react'
import {ContextApi} from '../../Contexts/Contexts'
import { Container, Row, Col, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap'
import axios from 'axios'

export default function ResumeForm() {

    const {state, dispatch} = useContext(ContextApi)

    const [inputs, setInputField] = useState({});

    const states = [
        'Juba',
        'Wau',
        'Yambio',
        'Torit',
        'Bor',
        'Bentiu',
        'Malakal',
        'Warap',
        'Awiel',
        'Lake State',
    ]

    const fields = [
        {name:'name', label:'Name', type:"text", col:12},
        {name:'gender', label:'gender', type:"select", options:['Male', 'Female', 'Other'], col:4},
        {name:'age', label:'age', type:"nubmer", col:4},
        {name:'current_state', label:'current_state', type:"select", options:states, col:4},
        {name:'university', label:'university', type:"text", col:12},
        {name:'college', label:'college',type:"text", col:12},
        {name:'dept', label:'dept',type:"text", col:12},
        {name:'email', label:'email',type:"text", col:12},
        {name:'phone', label:'phone', type:"text", col:6},
        {name:'whatsapp', label:'whatsapp',type:"text", col:6},
        {name:'facebook', label:'Facebook',type:"text", col:6},
        {name:'github', label:'Github',type:"text", col:6},
    ]

    const handleInputs = e => {
        setInputField({...inputs, [e.target.name]:e.target.value})
    }

    const handleImage = e => {
        const rawImage = e.target.value
        const image = rawImage.split('\\')[2]
        setInputField({...inputs, [e.target.name]:`/images/${image}`})
    }

    async function HandleSubmit(e){
        e.preventDefault()
        try {
            const respond = inputs && await axios.post('http://localhost:5000/freelancers', inputs).then(res => res)
            if(respond.data){
                dispatch({type:'store_freelancers', payload:[...state.freelancers, respond.data]})
                console.log(respond)
            }
        } catch (error) {
            console.log(error)
        }
        // console.log(inputs)
    }


    return (
        <Container>
            <div className="content-wraper resume-form-wraper d-flex justify-content-center p-3">
                <div className="w-75 gray-bg p-5">
                    <h2>Creaste resume</h2>
                    <Form onSubmit={HandleSubmit}>
                        <Row>
                            {fields.map((field, counter) => (
                                <Col md={field.col}>
                                    <FormGroup key={counter}>
                                        <FormLabel>{field.name}</FormLabel>
                                        {field.type !== 'select' ?
                                            <FormControl type="text" placeholder={field.name} name={field.name} onChange={handleInputs} /> 
                                            :
                                            <select className="form-control" name={field.name} onChange={handleInputs}>
                                                {field.options.map((option, index) => (
                                                    <option key={index}>{option}</option>
                                                ))}
                                            </select>
                                        }
                                    </FormGroup>
                                </Col>
                                ))}
                            <Col md="12">
                                <FormGroup>
                                    <textarea className="form-control" name="bio" placeholder="Write something about you!"  onChange={handleInputs}/>
                                </FormGroup>
                            </Col>
                            <Col md="12">
                                <FormGroup>
                                    <FormLabel>Upload you pic</FormLabel>
                                    <FormControl name="avatar" type="file" onChange={handleImage} />
                                </FormGroup>
                            </Col>
                            <Col md="12">
                                <FormGroup>
                                    <Button type="submit">Submit</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </Container>
    )
}
