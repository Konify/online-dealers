import React, { useState, useContext } from 'react';
import { Container, Button, Card, Row, Col, Form, FormGroup, FormControl, FormLabel, ButtonGroup } from 'react-bootstrap';
import {catgory, mobile, bikes, fashion, books, inputs} from '../Sale/InputContent'
import { FaUser, FaDollarSign } from 'react-icons/fa';
import {ContextApi} from '../../Contexts/Contexts'
import axios from 'axios'
import './SaleItemForm.css'



export default function SaleItemForm() {

    const [state, setState] = useState(inputs)
   
    return (
        <>
        <div className="sub-navbar-wraper mb-3">
        </div>
        <Container>
            <div className="item-form-wraper">
                <div className="item-form-sidebar-wraper">
                    <Card>
                        <Card.Title>
                            <h4>Category</h4>
                        </Card.Title>
                        <ul className="">
                            {catgory.map( link =>(
                                <li className="nav-item" onClick={()=> setState(link.category)}>
                                    {link.icon}
                                    <span className="nav-link"> 
                                        {link.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
                <div className="item-form-content px-3">
                    <Card className="p-3">
                        <h3>Selected Category {state}</h3>
                    </Card>
                </div>
            </div>
        </Container>
        </>
    )
}

// function FormInputs({inputs}){

//     const {state, dispatch} = useContext(ContextApi)

//     const [item, setInput] = useState({category})

//    const handleInput = e => setInput({...item, [e.target.name]:e.target.value})

//    const handleImage = e => {
//         const rawImage = e.target.value
//         const image = rawImage.split('\\')[2]
//         setInput({...item, [e.target.name]:`/images/${image}`})
//    }

    // async function HandleSubmit(e){
    //     e.preventDefault()

    //     const saller = {
    //         name:state.user.first_name,
    //         email:state.user.email,
    //         phone:state.user.phone,
    //     }
    //     const data = {...item, saller}
    //    try {
    //         const respond = item && await axios.post('http://localhost:5000/api/v1/item', data).then(res => res)
    //         if(respond.data){
    //             dispatch({type:'store_items', payload:[...state.items, respond.data]})
    //             console.log(respond)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


//     return(
//         <Form onSubmit={HandleSubmit}>
//             <Row>
//                 {inputs.map((input, index) => (
//                     <Col md={input.col} key={index}>
//                         {input.type === 'select' ?
//                             <FormGroup>
//                                 <FormLabel>{input.label} *</FormLabel>
//                                 <select className="form-control " size="lg" required={true} name={input.name} onChange={handleInput}>
//                                     {input.options.map((option, index) => (
//                                         <option key={index}>{option}</option>
//                                     ))}
//                                 </select>
//                             </FormGroup>
//                             :
//                             <FormGroup>
//                                 <FormLabel>{input.label} *</FormLabel>
//                                 <FormControl type={input.type} placeholder={input.label} size="l" required={true} name={input.name} onChange={handleInput}/>
//                             </FormGroup>
//                         }
//                     </Col>
//                 ))}
//                 <Col md="8">
//                     <FormGroup>
//                         <FormLabel>Price *</FormLabel>
//                         <br/>
//                         <ButtonGroup className="w-100">
//                             <Button className="btn"><FaDollarSign /></Button>
//                             <FormControl type="text" placeholder="Price" size="l" name="price" onChange={handleInput} />
//                         </ButtonGroup>
//                     </FormGroup>
//                 </Col>
//                 <Col md="12">
//                     <FormGroup>
//                         <FormLabel>Title *</FormLabel>
//                         <FormControl type="text" placeholder="Title" size="l" name="title" required={true} onChange={handleInput}/>
//                     </FormGroup>
//                 </Col>
//                 <Col md="12">
//                     <FormGroup>
//                         <textarea className="form-control lg" name="discription" required={true} onChange={handleInput}></textarea>
//                     </FormGroup>
//                 </Col>
//                 <Col md="4">
//                     <FormGroup className="">
//                         <FormLabel><h4>Image1</h4></FormLabel>
//                         <FormControl type="file" name="image1" required={true} onChange={handleImage} />
//                     </FormGroup>
//                 </Col>
//                 <Col md="4">
//                     <FormGroup className="">
//                         <FormLabel><h4>Image2</h4></FormLabel>
//                         <input type="file" name="image2" required={true} onChange={handleImage} />
//                     </FormGroup>
//                 </Col>
//                 <Col md="4">
//                     <FormGroup className="">
//                         <FormLabel><h4>Image3</h4></FormLabel>
//                         <FormControl type="file" name="image3" required={true} onChange={handleImage} />
//                     </FormGroup>
//                 </Col>
//                 <Col md="12">
//                     <FormGroup>
//                         <FormLabel>Comfirm Localtion</FormLabel>
//                         <FormControl type="text" placeholder="Comfirm Localtion" size="lg" name="location" onChange={handleInput} />
//                     </FormGroup>
//                 </Col>
//                 <Col md="12">
//                     <FormGroup>
//                         <Button type="submit">POST</Button>
//                     </FormGroup>
//                 </Col>
//             </Row>
//         </Form>
//     )
// }


/* const schema = yup.object().shape({
        title: yup.string().required(),
        author: yup.number().required(),
        isbn: yup.number().required(),
    });
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    }); */