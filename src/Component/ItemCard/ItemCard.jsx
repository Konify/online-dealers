import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export default function ItemCard({height, col, item}) {

    const [open, setOpen] = React.useState(false);

    function SallerDetail(){
        return (
            <div className="saller-detail-wraper">
                <div className="saller-detail-content" onClick={() => setOpen(false)}>
                    <p><b>Saller name: </b>{item.saller.name}</p>
                    <p><b>Saller E-mail: </b>{item.saller.email}</p>
                    <p><b>Saller Phone: </b>{item.saller.phone}</p>
                    <p><b>Reason: </b>{item.discription}</p>
                </div>
            </div>
        )
    }
    
    return (
        <Col md={col} key={item.id}>
            <Card className="mb-3">
                <div className="item-image-container">
                    <img src={process.env.PUBLIC_URL+item.image1} alt={item.Brand} height={height} width="100%" />
                </div>
                <Card.Footer>
                    <h5><b>{item.Brand ? item.Brand : item.name}</b></h5>
                    <p className="card-detail-text">{item.title}</p>
                    <h3>{item.price}</h3>
                    <div className="d-flex justify-content-between">
                        <NavLink className="item-card-btn btn" to={`/item/${item._id}`}>More Detail</NavLink>
                        <button className="item-card-btn btn" onClick={() => setOpen(!open)}>Saller Detail</button>
                    </div>
                </Card.Footer>
            </Card>
            {open && <SallerDetail setOpen={setOpen} />}
        </Col>
    )
}



// export default function ItemCard({height, col, item}) {
//     return (
//         <Col md={col} key={item._id}>
//             <Card className="mb-3">
//                 <img src={process.env.PUBLIC_URL+item.image1} alt={item.name} height={height} width="100%" />
//                 <Card.Footer>
//                     <h5>{item.name}</h5>
//                     <h3>{item.price}</h3>
//                     <div className="d-flex justify-content-between">
//                         <NavLink className="item-card-btn btn" to={`/item/${item._id}`}>More Detail</NavLink>
//                         <button className="item-card-btn btn">View Saller Detail</button>
//                     </div>
//                 </Card.Footer>
//             </Card>
//         </Col>
//     )
// }
