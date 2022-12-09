import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import Advanced from "../Advanced/Advanced";
import "./linksList.scss";
import ListItem from "./ListItem";

export default function LinksList(props) {
    return (
        <div className="links-list">
            <ListGroup>
                {props.arrayOfLinks.map((element) => {
                    return (
                        <ListItem links={element}/>
                    );
                })}
            </ListGroup>
            <Advanced/>
        </div>
    );
}
