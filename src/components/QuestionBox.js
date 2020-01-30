import React ,{useState} from 'react';
//import styled from 'styled-components';

import {StyledDivQuestion,StyledDivQuestionBox,AnswerButton} from "../styledcomponents/style";

const QuestionBox = ({question,options,selected}) => {
    const [answer,setAnswer] = useState(options);

    return(
     <StyledDivQuestionBox className="questionBox">
         <StyledDivQuestion className = "question">
             {question}
              {answer.map((text,index) => (

                  <AnswerButton key={index} className = "answerBtn" onClick = {() => {

                    setAnswer([text]);
                    selected(text);
                  }}>
                      {text}
                  </AnswerButton>
              ))}
         </StyledDivQuestion>
     </StyledDivQuestionBox>

    );
}

export default QuestionBox;