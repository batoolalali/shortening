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

                    <Col md={5} lg={5} sm={10}>
                        <p className="origin-link">{props.links.original_link}</p>
                    </Col>
                    <Col md={3} lg={3}>
                        <p className="shorten-link" value={props.links.original_link} >{props.links.full_short_link}  </p>
                    </Col>
                    <Col md={1} lg={1}>
                        <Button onClick={copyToClipboard} className={copySuccess} >{copySuccess}</Button>
                    </Col>
                </Row>

            </ListGroup.Item>

        </div>
    )
}
