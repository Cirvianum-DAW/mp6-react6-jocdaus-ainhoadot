import React from 'react';
import Dau from './Dau';
import './Dice.css';

// Li passem un array de valors de dau. Si per ex [3, 4] --> Dos daus

// M'he d'assegurar que es mostren tants daus com es passin

const Dice = ({ dice }) => {
    return (
        <div className='Dice'>
            {dice.map((v, i) => (
                <Dau key={i} valor={v} />
            ))}
        </div> // v = valor, i = index
    );
};

export default Dice;