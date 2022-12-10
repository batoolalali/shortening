import React from 'react';
import {  useState } from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';


export default function ListItem(props) {


    const [copySuccess, setCopySuccess] = useState('Copy');




    function copyToClipboard(e) {
        navigator.clipboard.writeText(props.links.full_short_link)
        e.target.focus();
        setCopySuccess('Copied');
    };


    return (
        <div className='list-div'>

            <ListGroup.Item className="list-item"  >
                <Row className='list-item-row'>

                    <Col md={6} lg={6} sm={10}>
                        <p className="origin-link">{props.links.original_link}</p>
                    </Col>
                    <Col md={4} lg={4} sm={10}>
                        <p className="shorten-link" value={props.links.original_link} >{props.links.full_short_link}  </p>
                    </Col>
                    <Col md={2} lg={2}>
                        <Button onClick={copyToClipboard} className={copySuccess} >{copySuccess}</Button>
                    </Col>
                </Row>

            </ListGroup.Item>

        </div>
    )
}
