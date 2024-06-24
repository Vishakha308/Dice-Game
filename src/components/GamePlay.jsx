import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";


const MainContainer = styled.main`
padding-top: 70px;
    .topSection{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

const GamePlay = () => {
  return (
    <MainContainer>
        <div className="topSection">
            <TotalScore/>
            <NumberSelector/>
       </div>
            <RoleDice/>
    </MainContainer>
  )
}

export default GamePlay