
import './App.css'
import React from 'react'

function App() {


  const [count, setCount] =  React.useState(0)
  const [dataQuizz, setDataQuizz] = React.useState([])
  const [quizz, setQuizz] = React.useState({})


  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json())
    .then(data => setDataQuizz(data.results))

  },[])
  
  function getCategory(){
    const category = dataQuizz[count]
    setCount(prevCount => prevCount +1)
    setQuizz(category)
    
  }
 

  return (
    <main>
      <div className='container'>       
                
        <h2> {count}</h2>
        <button onClick={getCategory}> Increase</button>
        <h2>{quizz.question} </h2>
      </div>
  
    </main>
    
    
  )
}

export default App
