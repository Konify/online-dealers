import React, { useState, useContext } from 'react';
import { Container, Button, Card, Row, Col, Form, FormGroup, FormControl, FormLabel, ButtonGroup } from 'react-bootstrap';
import {catgory, mobile, bikes, fashion, books, inputs} from './InputContent'
import { FaUser, FaDollarSign } from 'react-icons/fa';
import {ContextApi} from '../../Contexts/Contexts'
import axios from 'axios'




export function CarsForm(){

    const {state, dispatch} = useContext(ContextApi)

    const [item, setInput] = useState(null)

   const handleInput = e => setInput({...item, [e.target.name]:e.target.value})

   const handleImage = e => {
        const rawImage = e.target.value
        const image = rawImage.split('\\')[2]
        setInput({...item, [e.target.name]:`/images/${image}`})
   }
   
    return(
        <Form >
            <Row>
                {/* {inputs.map((input, index) => (
                    <Col md={input.col} key={index}>
                        {input.type === 'select' ?
                            <FormGroup>
                                <FormLabel>{input.label} *</FormLabel>
                                <select className="form-control " size="lg" required={true} name={input.name} onChange={handleInput}>
                                    {input.options.map((option, index) => (
                                        <option key={index}>{option}</option>
                                    ))}
                                </select>
                            </FormGroup>
                            :
                            <FormGroup>
                                <FormLabel>{input.label} *</FormLabel>
                                <FormControl type={input.type} placeholder={input.label} size="l" required={true} name={input.name} onChange={handleInput}/>
                            </FormGroup>
                        }
                    </Col>
                ))} */}
                <Col md="8">
                    <FormGroup>
                        <FormLabel>Price *</FormLabel>
                        <br/>
                        <ButtonGroup className="w-100">
                            <Button className="btn"><FaDollarSign /></Button>
                            <FormControl type="text" placeholder="Price" size="l" name="price" onChange={handleInput} />
                        </ButtonGroup>
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <FormLabel>Title *</FormLabel>
                        <FormControl type="text" placeholder="Title" size="l" name="title" required={true} onChange={handleInput}/>
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <textarea className="form-control lg" name="discription" required={true} onChange={handleInput}></textarea>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup className="">
                        <FormLabel><h4>Image1</h4></FormLabel>
                        <FormControl type="file" name="image1" required={true} onChange={handleImage} />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup className="">
                        <FormLabel><h4>Image2</h4></FormLabel>
                        <input type="file" name="image2" required={true} onChange={handleImage} />
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup className="">
                        <FormLabel><h4>Image3</h4></FormLabel>
                        <FormControl type="file" name="image3" required={true} onChange={handleImage} />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <FormLabel>Comfirm Localtion</FormLabel>
                        <FormControl type="text" placeholder="Comfirm Localtion" size="lg" name="location" onChange={handleInput} />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Button type="submit">POST</Button>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}