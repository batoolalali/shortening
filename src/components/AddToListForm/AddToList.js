import React from "react";
// import axios from 'axios';
import { addLinkAsync } from "./linksListSlicer";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import './addtoList.scss'

export default function AddToList() {
  const [isActive, setIsActive] = useState(false);



  const handleClick = () => {
    setIsActive(true);
  };


  // to dispatch the action to change the state value
  const dispatch = useDispatch();

  //dispatch the action when new url are added
  function handelSubmit(e) {
    e.preventDefault();
    console.log(e.target.url.value);
    dispatch(addLinkAsync(e.target.url.value));
    e.target.reset();
  };

  return (
    <div className="links-area">
      <div className="form-area align-middle">
        <Form onSubmit={handelSubmit}>
          <Row>
            <Col sm={8} lg={9} md={9}>
              <Form.Control type="text" placeholder="Shorten a link here..." name="url" required
                onClick={handleClick} className={isActive} />
            </Col>

            <Col sm={8} lg={3} md={3}>
              <Button variant="primary" type="submit" className="submit-button">
                Shorten It!
              </Button>
            </Col>
          </Row>
          {isActive && <p className="temp-p">Please add a link</p>}
        </Form>
      </div>
    </div>
  );
}
