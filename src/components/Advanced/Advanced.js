import React from 'react';
import './Advanced.scss'
import Cards from './Cards';

export default function Advanced() {
    return (
        <div className='advanced'>
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <Cards/>
        </div>
    )
}
