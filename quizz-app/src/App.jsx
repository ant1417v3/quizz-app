
import './App.css'
import React from 'react'
import QandA from './QandA'
import {nanoid} from 'nanoid'


function App() {



  const [dataQuizz, setDataQuizz] = React.useState([])
  const [quizzs, setQuizz] = React.useState({})


  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json())
    .then(data => setDataQuizz(data.results))   
    

  },[])

  console.log(dataQuizz)


  const QuestionElement = dataQuizz.map(quizz =>
  <QandA key={nanoid()} quizz={quizz}></QandA>)

  return (
    <main>    
      <div className='container'>   
        {QuestionElement}
      </div> 
    </main>
     
  )
}

export default App
