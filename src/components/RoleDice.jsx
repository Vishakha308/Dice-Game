import styled from "styled-components";

const RoleDice = () => {
    return (
        <DiceContainer>
            <div>
                <img src="/images/dice/dice_1.png" alt="dice 1" srcset="" />
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

`



