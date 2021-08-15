import React from 'react';
import questions from './data'
const Questions = () => {
    return (
        <div>
            <ul>
          {questions.map(question=>(
                  <li style={{listStyle:'none'}}>
                      <h2>{question.title} </h2>

                  </li>
    ))}
          </ul>
        </div>
      );
}
 
export default Questions;