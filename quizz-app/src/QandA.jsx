
import {decode} from 'html-entities'
import { nanoid } from 'nanoid';

export default function QandA(props){

    
    
    let mixAnswers = props.quizz.incorrect_answers
    mixAnswers.push(props.quizz.correct_answer);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }


    function removeUndefinedArray(array){
      let indicesToRemove = [];

      for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) {
          indicesToRemove.push(i);
        }
      }
    
      for (let i = indicesToRemove.length - 1; i >= 0; i--) {
        array.splice(indicesToRemove[i], 1);
      }

      return array;

    }
    
    shuffleArray(mixAnswers)
    mixAnswers = removeUndefinedArray(mixAnswers)

    const answersButton = mixAnswers.map(mixAnswer => 
      <div key={nanoid()} className='boxAnswers'> {decode(mixAnswer)} </div>)
    

    return(
        <div>
            <h2>{decode(props.quizz.question)}</h2>
            <div className='answers-container'>
              {answersButton}
            </div>
            
        </div>
    )
}