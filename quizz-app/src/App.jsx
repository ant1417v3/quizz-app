
import './App.css'
import React from 'react'
import QandA from './QandA'
import {nanoid} from 'nanoid'
import {decode} from 'html-entities'


function App() {


  // mot lan clicked la luu lai gia tri do, xong se check vs dap an tai do
  const [dataQuizz, setDataQuizz] = React.useState([])
  const [questions, setQuestions] =React.useState([])

  const [answers, setAnswers] = React.useState(
    [{
    questions:"",
    correct_answer:"",
    all_answers:[],
  }])


  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json())
    .then(data => setDataQuizz(data.results))   

  },[])

  function getAllQuestions(array) {
     const mixAnswers = array.map(array => { 
      const {correct_answer, incorrect_answers} = array;   
      const all_answers = [...incorrect_answers, correct_answer]
      const randomAnswer = all_answers.slice().sort(() => Math.random() - 0.5)
      const indexCorrectAnswer = randomAnswer.findIndex(answer => answer == correct_answer)
      console.log(all_answers)
      console.log(randomAnswer)
      console.log(indexCorrectAnswer)
    return{
      ...array,
      correct_answer: correct_answer,
      incorrect_answers: incorrect_answers,
      all_answers: all_answers,
    }
/// way to solution  
    })
    console.log(mixAnswers)
    return mixAnswers

  }


  function startGame(){
    const newQuestions = getAllQuestions(dataQuizz)
    setQuestions(newQuestions) 
    console.log(newQuestions)
  }

  // const QuestionElement = dataQuizz.map(quizz =>
  // <QandA key={nanoid()} quizz={quizz} ></QandA>)

  const QuestionElement = questions.map(question =>

    <div key={question}>
        <h2>{decode(question.question)}</h2>
        {question.all_answers.map(answ =>
            <button key={answ}>{decode(answ)}</button>)}

    </div>)

  return (
    <main>    
      <div className='container'>   
        <button  onClick={startGame}> Start Game</button>
        {QuestionElement}
      </div> 
    </main>
     
  )
}

export default App
