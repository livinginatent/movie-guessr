import React from 'react'
import GameModes from '../components/GameModes/GameModes';


type Props = {}

 export const HomePage = (props: Props) => {
    
  return (
    <>
      <GameModes movieTitle='Last Of Us' gameModes={['Guess based on scenes','Guess based on dialogue','Guess based on cast']}/>
    </>
  );
}

export default HomePage