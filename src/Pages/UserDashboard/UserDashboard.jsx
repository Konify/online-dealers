import React, { useState } from 'react'
import { Container, Card, Row, Col, Tabs, Tab } from 'react-bootstrap'
import { FaEnvelope, FaUser, FaPhoneAlt, FaEdit } from 'react-icons/fa'
import {ContextApi} from '../../Contexts/Contexts'
import ItemCard from '../../Component/ItemCard/ItemCard'
// import { NavLink } from 'react-router-dom'
// import axios from 'axios'
import './Dashboard.css'


export default function UserDashboard() {
    
    const [key, setKey] = useState('myList');

    const { state } = React.useContext(ContextApi)

   
    return (
        <div className="empty-card">
            <Container>
            <Row>
                <Col md="3" className="p-0 pr-2">
                    {state.user && <Profile user={state.user} />}
                </Col>
                <Col md="9" className="p-0">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="myList" title="My Ads">
                            {/* userId={state.user._id} */}
                            <MyAdsList  items={state.items} />
                        </Tab>
                        <Tab eventKey="wishList" title="Wish List">
                            <WishList />
                        </Tab>
                        <Tab eventKey="setting" title="Setting">
                            <Setting />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            </Container>
        </div>
    )
}


function Profile({user}){
    
    return(
        <Card className="bg-light p-0">
            <Card.Title className="px-4 py-1">
                <h4>profile</h4>
            </Card.Title>
            <Card.Body>
            <div className="profile-image">
                <img src={user.avatar} height="100%" width="100%" />
            </div>
            <table className="table">
                <tr>
                    <td><FaUser /></td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td><FaEnvelope/> </td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td><FaPhoneAlt /></td>
                    <td>{user.phone}</td>
                </tr>
            </table>
            </Card.Body>
        </Card>
    )
}



function WishList(){
    return (
        <div>
            WishList
        </div>
    )
}
function Setting(){
    return (
        <div>
            Setting
        </div>
    )
}

function MyAdsList({items}){
    
    let content = items ? items.map(d => <ItemCard height="180px" item={d} col="6" />) : "Loading..."

    return(
        <div className="p-2 bg-light">
            <Row>
                {content}
            </Row>
        </div>
    )
}


// function ItemForm(){

//     const { state, dispatch } = React.useContext(ContextApi)

//     const [category, setCategory ] = useState(null)
//     const [inputs, setInputs] = useState({})
//     const handleInputs = e => setInputs({...inputs, [e.target.name]:e.target.value})
//     const handleCategory = e => {
//         setCategory(e.target.value)
//         setInputs({...inputs, [e.target.name]:e.target.value})
//     }


//     async function handleSubmit(e) {
//         e.preventDefault();
//         try {
//             const sallerInfo = {
//                 _id:state.user._id,
//                 name:state.user.first_name,
//                 email:state.user.email
//             }
//             const itemData = {...inputs, sallerInfo}
//             const respond = await axios.post('http://localhost:5000/api/v1/products', itemData).then(res => res)
//             if(respond.status == 201){
//                 dispatch({type:'store_product', payload:[...state.products, respond.data]})
//                 console.log(respond)
//             }
//         } catch (error) {
//           console.log(error)
//         }
//     }

//     return(
//         <div className="item-form-wraper alert-secondary p-3" >
//             <div className="item-form-content">
//                 <div className="d-flex p-3">
//                     <div className="w-25">
//                         Advert Type
//                         <select className="form-control" name="advert_type" onChange={handleInputs}>
//                         <option>Advert Type</option>
//                         <option>For Sale</option>
//                         <option>For Rent</option>
//                     </select>
//                     </div>
//                     <div className="w-25 mx-2 form-group">
//                         Category
//                         <select className="form-control" name="category" onChange={handleCategory}>
//                             <option>Category</option>
//                             <option>vehicle</option>
//                             <option>Laptop</option>
//                             <option>phone</option>
//                             <option>phone</option>
//                         </select>
//                     </div>
//                     <div className="w-25">
//                         <label>Item Type</label>
//                         <select className="form-control" name="type" onChange={handleInputs}>
//                             <option>Type</option>
//                             <option>vehicle</option>
//                             <option>Electronic</option>
//                         </select>
//                     </div>
//                 </div>
        
//                 {category == 'vehicle' && <VehicleForm handleSubmit={handleSubmit} handleInputs={handleInputs} />}
//                 {category == 'phone' && <PhoneForm handleSubmit={handleSubmit} handleInputs={handleInputs} />}
//             </div>
//         </div>
//     )
// }


// function ProductCard({item, col}){

//     return(
//         <Col md={col} className="mb-3" key={item.name}>
//             <Card>
//                 <img src={process.env.PUBLIC_URL+item.image1} height="170px" width="100%" />
//                 <Card.Footer className="p-2">
//                     <b>{item.title ? item.title : item.name}</b>
//                     <p>{item.discription}</p>
//                     <div className="d-flex justify-content-between mt-2">
//                         <NavLink className="bordered-btn w-100" to={`/product/${item._id}`}>Details</NavLink>
//                         <NavLink className="bordered-btn w-100" to={`/product/${item._id}`}><FaEdit /> Edit</NavLink>
//                     </div>
//                 </Card.Footer>
//             </Card>
//         </Col>
//     )
// }