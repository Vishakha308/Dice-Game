import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import {Button, OutlineButton} from "../styled/Button";
import Rules from "./Rules";


const MainContainer = styled.main`
padding-top: 70px;
    .topSection{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .btns{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      align-items: center;
      margin-top: 40px;
    }
`

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateandomNumber = function getRandomArbitary(min, max){
    console.log(Math.floor(Math.random() * (max-min) +min));
    return Math.floor(Math.random() * (max-min) +min);
};

  const resetScore =()=>{
    setScore(0);
  }

  const roleDice = ()=> {
    if(!selectedNumber) {
      setError("You have not selected any Number!")
      return;
    };

    const randomNumber = generateandomNumber(1,7);

    setCurrentDice((prev)=> randomNumber);


    if(selectedNumber === randomNumber){
        setScore(prev => prev + randomNumber);
    }
    else{
        setScore(prev => prev-2);
    }

    setSelectedNumber(undefined);
};
  
  return (
    <MainContainer>
        <div className="topSection">
            <TotalScore score = {score}/>
            <NumberSelector selectedNumber={selectedNumber} error={error} setError={setError}
            setSelectedNumber={setSelectedNumber}/>
       </div>
            <RoleDice currentDice={currentDice}  roleDice={roleDice}/>
            <div className="btns">
              <OutlineButton onClick={resetScore}>Reset</OutlineButton>
              <Button onClick={()=> setShowRules((prev)=>!prev)}>{showRules ? "Hide "  : "Show "}Rules</Button>
            </div>
            {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;