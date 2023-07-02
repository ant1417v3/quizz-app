
import './App.css'
import React from 'react'
import QandA from './QandA'
import {nanoid} from 'nanoid'
import {decode} from 'html-entities'


function App() {


  // mot lan clicked la luu lai gia tri do, xong se check vs dap an tai do
  const [dataQuizz, setDataQuizz] = React.useState([])
  const[questions, setQuestions] =React.useState([])

  const [answers, setAnswers] = React.useState({
    isHold: false,
    correct_answer:"",
    all_answers:[],
  })
  


  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json())
    .then(data => setDataQuizz(data.results))   

  },[])

  function getAllQuestions(array) {
    const allquestions = [];
    for (let i = 0; i < array.length; i++) {
      allquestions[i] = array[i].question    
    }
    return allquestions
  }

  function getHoldAnswer(){
    setAnswers(prev =>({
      ...prev,
      isHold: !prev.isHold
    }))
}

  function startGame(){
    const newQuestions = getAllQuestions(dataQuizz)
    setQuestions(newQuestions) 
  }

  console.log(dataQuizz)


  // const QuestionElement = dataQuizz.map(quizz =>
  // <QandA key={nanoid()} quizz={quizz} ></QandA>)

  const QuestionElement = questions.map(question =>
    <h2 key={nanoid()}>{decode(question)}</h2>)

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
