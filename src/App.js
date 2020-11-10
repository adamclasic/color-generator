// import './App.css';
import React, {useState} from 'react';
function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState('')
  const [colorList, setColorList] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Color Generator</h3>
        <form action="" onSubmit={submitHandler}>
          <input type="text" name="color" id="color" value={color} onChange={(e)=> {
            setColor(e.target.value)
          }}/>
          <input type="submit" value="generate"/>
        </form>
      </header>
      <section className='colors'>

      </section>
    </div>
  );
}

export default App;
