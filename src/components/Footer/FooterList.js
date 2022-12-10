import React from 'react'
import { Col } from 'react-bootstrap'

export default function FooterList(props) {
    return (
        <Col md={2} lg={2} ms={10} className='footer-list'>
            <ul>
                <h4>{props.lists.title}</h4>
                {
                    props.lists.list.map(element => {
                        return (
                            <li><a href='/'>{element}</a></li>
                        )
                    })
                }
            </ul>
        </Col>
    )
}
