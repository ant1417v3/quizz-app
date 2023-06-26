
import './App.css'

function App() {

  async function fetchData() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=15");
    const jsonData = await response.json();
    console.log(jsonData);
  }

  

  return (
    <main>

      <div className='contain'>
      <h2> First question</h2>
      <button>First answer</button>
      <h2> Second question</h2>
      <h2> Third question</h2>
      <h2> Fourth question</h2>
      <h2> Fifth question</h2>
      </div>
      
      
    </main>
    
    
  )
}

export default App
