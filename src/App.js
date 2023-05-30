import React from 'react'
import { useState } from 'react'
import './App.scss'

function App() {
  const [actualNumber, setActualNumber] = useState('') //3896 9999999
  const [previousNumber, setPreviousNumber] = useState(null)
  const [longNumber, setLongNumber] = useState(false)
  const [operation, setOperation] = useState('')

  const handleAddNumber = (digit) => {
    if (actualNumber.length < 7 && longNumber === false) {
      setActualNumber(actualNumber + digit)
    }
    else {
      setLongNumber(true)
      setActualNumber("ERROR")
    }
  }

  const handleAC = () => {
    setActualNumber('')
    setLongNumber(false)
  }

  return (
    <div className="App">

      <div className='calculator'>

        <div className='screen'> 
          <h1 className='display-number'> {actualNumber} </h1>
          <div className='separator'></div>
        </div>

        <div className='keyboard'>
          <br/>
          <button className='gray-button' value="ac" onClick={() => handleAC()}> 
            AC
          </button>
          <button className='gray-button' value="sign"> 
            +/-
          </button>
          <button className='gray-button' value="mod"> 
            %
          </button>
          <button className='pink-button' value="division"> 
            ÷
          </button>

          <button className='beige-button' value="7" onClick={() => handleAddNumber("7")}> 
            7
          </button>
          <button className='beige-button' value="8" onClick={() => handleAddNumber("8")}> 
            8
          </button>
          <button className='beige-button' value="9" onClick={() => handleAddNumber("9")}> 
            9
          </button>
          <button className='pink-button' value="multiplication"> 
            ×
          </button>

          <button className='beige-button' value="4" onClick={() => handleAddNumber("4")}> 
            4
          </button>
          <button className='beige-button' value="5" onClick={() => handleAddNumber("5")}> 
            5
          </button>
          <button className='beige-button' value="6" onClick={() => handleAddNumber("6")}> 
            6
          </button>
          <button className='pink-button' value="subtraction"> 
            -
          </button>

          <button className='beige-button' value="1" onClick={() => handleAddNumber("1")}> 
            1
          </button>
          <button className='beige-button' value="2" onClick={() => handleAddNumber("2")}> 
            2
          </button>
          <button className='beige-button' value="3" onClick={() => handleAddNumber("3")}> 
            3
          </button>
          <button className='pink-button' value="addition"> 
            +
          </button>

          <button className='beige-button-big' value="0" onClick={() => handleAddNumber("0")}> 
            0
          </button>
          <button className='beige-button' value="dot" onClick={() => handleAddNumber(".")}> 
            .
          </button>
          <button className='pink-button' value="equal"> 
            =
          </button>

        </div>

      </div>

    </div>
  );
}

export default App
