
import {decode} from 'html-entities'

export default function QandA(props){
    return(
        <div>
            <h2>{decode(props.quizz.question)}</h2>
        </div>
    )
}