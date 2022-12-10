import React from "react";
import { ListGroup } from "react-bootstrap";
import "./linksList.scss";
import ListItem from "./ListItem";
import {  selectLinksList } from "../../slicer/linksListSlicer";
import {  useSelector } from "react-redux";


export default function LinksList(props) {
  const linksList = useSelector(selectLinksList);


    return (
        <div className="links-list">
            <ListGroup>
                {linksList.map((element) => {
                    return (
                        <ListItem links={element}/>
                    );
                })}
            </ListGroup>
        </div>
    );
}
