import React, { useState, useContext } from 'react';
import { Container, Button, Card, Row, Col, Form, FormGroup, FormControl, FormLabel, ButtonGroup } from 'react-bootstrap';
import {catgory, mobile, bikes, fashion, books, inputs} from './InputContent'
import { FaUser, FaDollarSign } from 'react-icons/fa';
import {ContextApi} from '../../Contexts/Contexts'
import axios from 'axios'
import './Sale.css'


export default function Sale() {

    const {state, dispatch} = useContext(ContextApi)
    const [currentCategory, setCurrentCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [formInput, setFormInput] = useState(null)


 
    const handleInput = e => setFormInput({...formInput, [e.target.name]:e.target.value})

    const handleImage = e => {
        const rawImage = e.target.value
        const image = rawImage.split('\\')[2]
        setFormInput({...formInput, [e.target.name]:`/images/${image}`})
    }

    async function HandleSubmit(e){
        e.preventDefault()

        try {
            if(state.user){
                const saller = {
                    name:state.user.name,
                    email:state.user.email,
                    phone:state.user.phone,
                }
                const data = {...formInput, category:currentCategory, saller}
                const respond = formInput && await axios.post('http://localhost:5000/items', data).then(res => res)
                if(respond.data){
                    dispatch({type:'store_items', payload:[...state.items, respond.data]})
                    console.log(respond)
                }
            }else{
                alert('login first!')
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log(currentCategory)

    return (
        <Container>
            <div className="item-form-wraper">
                <div className="item-form-sidebar-wraper">
                    <Card>
                        <Card.Title>
                            <h4>Category</h4>
                        </Card.Title>
                        <ul className="">
                            {catgory.map( link =>(
                                <li className="nav-item" onClick={()=> setCurrentCategory(link.category)}>
                                    {link.icon}
                                    <span className="nav-link"> 
                                    {link.text}
                                    {link.type && 
                                        <div>
                                            <ul className="p-0 m-0">
                                                {link.type?.map(subCategory => (
                                                    <li className="nav-item">
                                                        <span className="nav-link"> {subCategory}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
                <div className="item-form-content px-3">
                    <Card className="p-3">
                        <h3>Selected Category {currentCategory}</h3>
                        {currentCategory === 'cars' && <FormInputs inputs={inputs} HandleSubmit={HandleSubmit} handleInput={handleInput} handleImage={handleImage} />}
                    </Card>
                </div>
            </div>
        </Container>
    )
}



function FormInputs({inputs, handleInput, handleImage, HandleSubmit }){


    return(
        <Form onSubmit={HandleSubmit}>
            <Row>
                {inputs.map((input, index) => (
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
                ))}
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
