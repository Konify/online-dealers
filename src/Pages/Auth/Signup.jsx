import React, {useContext, useState} from 'react'
import {Button, Form, FormLabel, FormGroup, FormControl} from 'react-bootstrap'
import { ContextApi } from '../../Contexts/Contexts'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


function Signup(props) {

  const { dispatch } = useContext(ContextApi)

  const [input, setInput] = useState({
    name:'',
    state:'Juba',
    email:'',
    phone:'',
    item:[],
    wish_list:[],
    avatar:'/images/konson.png',
    join_date:new Date(),
    password:'',
    comfirm_password:''
  })

  const handleInput = e => setInput({...input, [e.target.name]:e.target.value});

  async function HandleSubmit(e) {
    e.preventDefault();
    try {
      const respond = await axios.post('/signup', input).then(res => res)
      if(respond.status == 201){
        dispatch({type:'store_user', payload:respond.data})
        localStorage.setItem('user', JSON.stringify(respond.data))
        props.history.push('/profile')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const inputFields = [
      {name:'name', holder:'Name'},
      {name:'email', holder:'email'},
      {name:'phone', holder:'phone'},
      {name:'state', holder:'state'},
      {name:'password', holder:'password'},
      {name:'comfirm_password', holder:'comfirm_password'},
  ]

  return (
    <div className="form-main-wraper">
        <div className="form-content text-white">
            <h4>Sign up</h4>
            <Form className="" onSubmit={HandleSubmit}>
                {inputFields.map(input => (
                    <FormGroup>
                        <FormLabel>{input.holder}</FormLabel>
                        <FormControl placeholder={input.holder} name={input.name} onChange={handleInput}/>
                    </FormGroup>
                ))}
                <FormGroup>
                    <Button type="submit" variant="contained">Sign up</Button>
                </FormGroup>
                <div className="d-flex">
                    <Button>Facebook</Button>
                    <Button>Github</Button>
                </div>
            </Form>
        </div>
    </div>
  );
}

export default withRouter(Signup)