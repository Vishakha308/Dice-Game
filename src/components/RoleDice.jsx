import styled from "styled-components";
import { useState } from "react";

const RoleDice = ({roleDice, currentDice}) => {

    


    return (

        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" srcset="" />
            </div>
            <p>Click on Dice to Roll</p>
        </DiceContainer>
    );
};

export default RoleDice;


const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
    flex-direction: column;

    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;

    }

`



