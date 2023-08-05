import React from 'react'
import { StyledImage, StyledGameModeWrapper, StyledModeTitle, StyledWrapper } from './styles'
import myImage from "../../utils/s-l1600.jpg";


type Props = {
    gameModes:string[],
    movieTitle:string
}

function GameModes({gameModes}: Props) {
  return (
    <>
      <StyledWrapper>
        {gameModes.map((mode) => {
          return (
            <StyledGameModeWrapper key={mode}>
              <StyledModeTitle>{mode}</StyledModeTitle>
              <StyledImage src={myImage} alt="Your Image" width={350} height={450} />
            </StyledGameModeWrapper>
          );
        })}
      </StyledWrapper>
    </>
  );
}

export default GameModes