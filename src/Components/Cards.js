import React from 'react';
import { Row, Col } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import '../Styles/Card.css';
class Cards extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="container" >
                <Row>
                    {this.props.data ? this.props.data.map((item,key,arr)=>(
                        <Col lg={12} sm={12} md={12} xs={12} className="Colcard">
                            <Col lg={3} sm={3} md={3} xs={3}>
                                  <img src={item.restaurantImage} width="100%"/>
                            </Col>
                            <Col lg={9} sm={9} md={9} xs={9} className="textLeft">
                                 <h2>{item.restaurantName}</h2>
                                 <Col lg={12} sm={12} md={12} xs={12} className="disFlex adjustRow">
                                 <Col lg={3} sm={3} md={3} xs={3} className="adjustRow">
                                 <div>Time</div>
                                 </Col>
                                 <Col lg={3} sm={3} md={3} xs={3}>
                                 <div>Time</div>
                                 </Col>
                                 <Col lg={3} sm={3} md={3} xs={3}>
                                 <div>Time</div>
                                 </Col>
                                 </Col>

                                 <Col lg={12} sm={12} md={12} xs={12} className="disFlex adjustRow">
                                 <Col lg={3} sm={3} md={3} xs={3} className="adjustRow">
                                 <div>{item.displayTime || ""}</div>
                                 </Col>
                                 <Col lg={3} sm={3} md={3} xs={3}>
                                 <div>{item.displayCostForTwo || ""}</div>
                                 </Col>
                                 <Col lg={3} sm={3} md={3} xs={3}>
                                 <div>{item.averageReview || ""}</div>
                                 </Col>
                                 </Col>
                            </Col>
                        </Col>
                   /*  <Card key={item.key} className="col-lg-12">
                        <Card.Img className="col-lg-3"
                        variant="top" 
                            src={item.restaurantImage} />
                        <Card.Body className="col-lg-9">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> */
                    )):[]}
                   
                </Row>
            </div>
        )
    }
}
export default Cards;