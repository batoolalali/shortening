import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function CardItem(props) {
  return (

    <Col md={10} lg={3} ms={10}    className={props.id}>
      
        <Card>
          <div className='my-card-img'><img variant="top" src={props.data.src} /></div>
          <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text>
              {props.data.description}
            </Card.Text>
          </Card.Body>
        </Card>

    </Col>
  )
}
