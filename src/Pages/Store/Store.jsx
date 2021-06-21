import React, { useState, useContext, useEffect } from 'react'
import {ContextApi} from '../../Contexts/Contexts'
import ItemCard from '../../Component/ItemCard/ItemCard'
import {MainTitle} from '../../Component/Titles/Titles'
import { Container, Row, ButtonGroup, FormControl, Button } from 'react-bootstrap';
import './Store.css'


export default function Store() {
    
    const {state} = useContext(ContextApi)
    const [items, setItems] = useState(null)

    useEffect(()=> {
        state.items && setItems(state.items)
    }, [])

    const handleCategory = (category) => {
        if(category !== 'all'){
            let result = state.items.filter(i => i.category === category)
            result ? setItems(result) : setItems('Not available currently')
        }else{
            setItems(state.items)
        }
    }
    
    const handleLocation = (e) => {
        let result = state.items.filter(i => i.location === e.target.value)
        result ? setItems(result) : setItems('Not available currently')
        console.log(e.target.value)
    }

    let content
    if(items){
       content = items.length >= 1 ? items.map(item => <ItemCard col="3" item={item} height="190px" />) : "No item found..."
    }else{
        content = "Loading..."
    }

    const links = [
        {text:'All', path:'/', category:'all'},
        {text:'Cars', path:'/store', category:'cars'},
        {text:'Electronic', path:'/rental', category:'electronic'},
        {text:'mMobile', path:'/mobile', category:'mobile'},
        {text:'Bikes', path:'/aucation', category:'bike'},
        {text:'Furniture', path:'/services', category:'furniture'},
        {text:'Properties', path:'/about', category:'properties'},
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
                                    <span className="nav-link" onClick={() => handleCategory(link.category)}> 
                                        {link.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ButtonGroup>
                            <FormControl type="search" placeholder="Search by Location" onChange={handleLocation} />
                            <FormControl className="ml-2" type="search" placeholder="Search by Name"/>
                            <Button>Search</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Container>
        </div>
        <Container>
            <div className="content-wraper">
                <MainTitle text="New On Stock" />
                <Row>
                    {content}
                </Row>
            </div>
        </Container>
        </>
    )
}
