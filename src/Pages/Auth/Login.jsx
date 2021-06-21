import React, {useContext, useState} from 'react'
import {Button, Form, FormLabel, FormGroup, FormControl} from 'react-bootstrap'
import { ContextApi } from '../../Contexts/Contexts'
import { withRouter } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import axios from 'axios'
import './forms.css'



function Login(props) {

    const { dispatch } = useContext(ContextApi)
    const [msg, setMsg] = useState('');
    
    const [input, setInput] = useState({
        email:'',
        password:'',
    })

    const handleInput = e => setInput({...input, [e.target.name]:e.target.value});

    async function HandleSubmit(e) {
        e.preventDefault();
        try {
        const respond = await axios.post('/login', input).then(res => res)
        if(respond.status == 201){
            dispatch({type:'store_user', payload:respond.data})
            localStorage.setItem('user', JSON.stringify(respond.data))
            props.history.push('/profile')
        }else{
            setMsg(respond.data)
        }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="form-main-wraper">
            <div className="form-content text-white">
                <div className="text-center mb-3">
                    <FaUserCircle className="form-icon" />
                    <h2>Login</h2>
                </div>
                <p className="text-danger">{msg && msg}</p>
                <Form onSubmit={HandleSubmit}>
                    <FormGroup>
                        <FormControl type="text" placeholder="Email address" name="email" size="lg" onChange={handleInput} />
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="text" placeholder="Password" name="password" size="lg" onChange={handleInput} />
                    </FormGroup>
                    <FormGroup>
                        <Button type='submit' className="w-100">Login</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

export default withRouter(Login)