import React from 'react';
import CardItem from './CardItem';
import cardsData from '../../data/fixed-data.json'
import { Row } from 'react-bootstrap';
export default function Cards() {
    return (
        <div className='cards-container'>
            <span className="line"> </span>
            <Row className='g-0 cards-row'>
                {
                    cardsData.map((element,id) => {
                        return (

                            <CardItem data={element} id={`col`+id}/>
                        )
                    })
                }
            </Row>
        </div>
    )
}
