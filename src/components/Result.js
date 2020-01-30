import React ,{ Component } from 'react';
import styled from 'styled-components';
import {PlayButton} from "../styledcomponents/style";

import "../styledcomponents/mysass.scss";
 
const ScoreBoardDiv = styled.div`
position: relative;
height: 700px;

`
const Result = ({score,playAgain})  => (

     <ScoreBoardDiv className = "score-board">
         <div className = "score">
             You scored {score}/5 correct answers in the game,
         </div>

         <PlayButton className = "playBtn" onClick = {playAgain}>Play Again!</PlayButton>
    </ScoreBoardDiv>
)

export default Result;