import Values from 'values.js';
import './App.css';
import SingleColor from './components/SingleColor';

import React, {useState} from 'react';
// let colorsDefault = new Values(color).all(10)
function App() {
  const [color, setColor] = useState('#aaa')
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState([])
  const [isDefault, setIsDefault] = useState(true)
  const submitHandler = (e) => {
    
    try {
      setError(false)
      setIsDefault(false)
      let colors = new Values(color).all(10)
      setColorList(colors)
      e.preventDefault()
      console.log(colorList);
      
    } catch (error) {
      // console.log(error);
      setError(true)
    }
  }
  return (
    <div className="App">
      <header className="App-header py-2">
        <h3>Color Generator</h3>
        <form action="" onSubmit={submitHandler} >
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">Hexa-Color:</span>
              <input className={error ? 'error' : null} type="text" name="color" id="color" value={color} onChange={(e)=> {
                setColor(e.target.value)
              }}/>
            </div>
            <input type="submit" className='btn btn-primary' value="generate"/>
          </div>
        </form>
      </header>
      <section className='colors d-flex flex-wrap'>
      {colorList.map(
        (color) => {
        return <SingleColor {...color}></SingleColor>

      }
      )}
        {/* <SingleColor gColor={isDefault ? [0,0,0] : color.rgb}></SingleColor> */}


      </section>
    </div>
  );
}

export default App;
