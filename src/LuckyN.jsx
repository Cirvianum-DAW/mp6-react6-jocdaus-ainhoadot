import React, { useState } from 'react';
import Dice from './Dice';
import { getTirades, sum } from './utils';

const LuckyN = ({ numDaus, suma }) => {
    // Una variable "dice" que conté l'array de valors dels daus
    const [dice, setDice] = useState(getTirades(numDaus));

    // --------------------------------------------------------------------------- Una variable "guess" que conté el valor de la suma que l'usuari ha de fer

    // Una varaible "isWinner" que comprova si la dels valors dels daus és igual a la "suma"
    const isWinner = sum(dice) === suma;

    return <div>LuckyN</div>;
};

export default LuckyN;