import React from 'react'
import './footer.scss'
import { Row, Col } from 'react-bootstrap'
import lists from '../../data/footer-list.json'
import FooterList from './FooterList'

export default function Footer() {
    return (
        <div className='footer-div'>
            <Row>
                <Col md={4} lg={4} sm={10}>
                <h1>Shortly</h1>
                </Col>
                {
                    lists.map(element=>{
                        return (
                            <FooterList lists={element}/>
                        )
                    })
                }
                <Col>
                    <a className='icons' href='#'><img src='/images/icon-facebook.svg'/></a>
                    <a className='icons' href='#'><img src='/images/icon-twitter.svg'/></a>
                    <a className='icons' href='#'><img src='/images/icon-pinterest.svg'/></a>
                    <a className='icons' href='#'><img src='/images/icon-instagram.svg'/></a>
                </Col>
            </Row>
        </div>
    )
}
