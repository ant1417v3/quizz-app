
import {decode} from 'html-entities'

export default function QandA(props){

    let mixAnswers = props.quizz.incorrect_answers
    mixAnswers.splice(1,0,props.quizz.corect_answer)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    shuffleArray(mixAnswers)
      


    return(
        <div>
            <h2>{decode(props.quizz.question)}</h2>
            <h2>{decode(mixAnswers[0])}</h2>
        </div>
    )
}