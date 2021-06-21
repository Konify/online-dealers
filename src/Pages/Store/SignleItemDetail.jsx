import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {ContextApi} from '../../Contexts/Contexts'
import { Container, Row, Col, Card} from 'react-bootstrap'
import ItemCard from '../../Component/ItemCard/ItemCard'

export default function SignleItemDetail() {

    const { state } = React.useContext(ContextApi)

    const {id} = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState(null)
    const [item, setItem] = useState(null)

    async function getIem(){
        setIsLoading(true)
        try {
            let result = await state.items ?  state.items.filter(item => item._id === id) : null
            if(result) {
                setItem(result) 
                setIsLoading(false)
            }else{
                setMsg('No found!')
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getIem()
    }, [id])


    let content
    
    content = isLoading && "Loading..."
    content = msg && "sorry somthing went wrong..."
    content = item && item.map(d => <ItemDetailsContent item={d} /> )


    return (
        <Container>
            <div className="mt-4">
                <Row>
                    <Col md="8">
                        <div className="">
                            {content}
                        </div>
                    </Col>
                    <Col md="4">
                        <Card className="">
                            <h2>Related Items</h2>
                            {state.items && state.items.map(d => <ItemCard col="12" item={d} /> )}
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

function ItemDetailsContent({item}){
    return(
        <div className="bg-light">
            <Card >
                <Row className="p-0 m-0">
                    <Col md="6" className="p-0">
                        <div className="item-image-box">
                            <img src={process.env.PUBLIC_URL+item.image1} height="200px" width="100%" />
                        </div>
                    </Col>
                    <Col md="6" xs="6" className="p-0">
                        <div className="item-image-box">
                            <img src={process.env.PUBLIC_URL+item.image2} height="200px" width="100%" />
                        </div>
                    </Col>
                    <Col md="4" className="p-0">
                        <div className="item-image-box">
                            <img src={process.env.PUBLIC_URL+item.image1} height="170px" width="100%" />
                        </div>
                    </Col>
                    <Col md="4" xs="6" className="p-0">
                        <div className="item-image-box">
                            <img src={process.env.PUBLIC_URL+item.image2} height="170px" width="100%" />
                        </div>
                    </Col>
                    <Col md="4" xs="6" className="p-0">
                        <div className="item-image-box">
                            <img src={process.env.PUBLIC_URL+item.image3} height="170px" width="100%" />
                        </div>
                    </Col>
                </Row>
                <Card.Body className="shadow">
                    <h2>{item.Brand ? item.Brand : item.name}</h2>
                    <div className="card-detail-box">
                        <ul>
                            <li>{item.petrol}</li>
                            <li>{item.milage} km</li>
                            <li>Automatic</li>
                            <li>{item.stear}</li>
                            <li>{item.location}</li>
                        </ul>
                    </div>
                    <p>stear Normally elements are positioned automatically by the browser as part of the
                        document Normally elements are positioned automatically by the browser as part of the
                        document</p>
                    <h4>Price: {item.price}</h4>
                    <button className="mt-3 item-card-btn btn">Saller detail</button>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body className=" mt-3 shadow">
                    <h1>General details</h1>
                </Card.Body>
            </Card>
        </div>
    )
}

