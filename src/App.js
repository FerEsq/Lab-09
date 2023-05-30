import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.scss'

function App() {
  const [actualNumber, setActualNumber] = useState('') 
  const [previousNumber, setPreviousNumber] = useState('')
  const [longNumber, setLongNumber] = useState(false)
  const [pressEqual, setPressEqual] = useState(false)
  const [signChange, setSignChange] = useState(false)
  const [operation, setOperation] = useState('')

  useEffect(() => {
    if (actualNumber == "NaN") {
      setActualNumber("ERROR")
      setLongNumber(true)
    }

    const handleKeyDown = (event) => {
      if (event.code === 'Digit0') {
        handleAddNumber("0")
      }
      else if (event.code === 'Digit1') {
        handleAddNumber("1")
      }
      else if (event.code === 'Digit2') {
        handleAddNumber("2")
      }
      else if (event.code === 'Digit3') {
        handleAddNumber("3")
      }
      else if (event.code === 'Digit4') {
        handleAddNumber("4")
      }
      else if (event.code === 'Digit5') {
        handleAddNumber("5")
      }
      else if (event.code === 'Digit6') {
        handleAddNumber("6")
      }
      else if (event.code === 'Digit7') {
        handleAddNumber("7")
      }
      else if (event.code === 'Digit8') {
        handleAddNumber("8")
      }
      else if (event.code === 'Digit9') {
        handleAddNumber("9")
      }
      else if (event.code === 'Period') {
        handleAddNumber(".")
      }
    }

    document.body.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown)
    }
  }, [actualNumber])

  function handleAC() {
    setActualNumber('')
    setPreviousNumber('')
    setLongNumber(false)
  }

  const handleAddNumber = (digit) => {
    if (actualNumber.length < 9 && longNumber === false) {
      setActualNumber(actualNumber + digit)
    }
    else {
      setLongNumber(true)
      setActualNumber("ERROR")
    }
  }

  const handleChangeSign = () => {
    setSignChange(true)
    if (actualNumber.length < 9 && longNumber === false) {
      let doubleNumber = parseFloat(actualNumber)
      doubleNumber = doubleNumber * (-1)
      setActualNumber(doubleNumber.toString()) 
    }
    else {
      setLongNumber(true)
      setActualNumber("ERROR")
    }
  }

  const handleSum = () => {
    if (longNumber === false) {
      setOperation("+")
      setPreviousNumber(actualNumber)
      setActualNumber("")
    }
  }

  const handleSubtraction = () => {
    if (longNumber === false) {
      setOperation("-")
      setPreviousNumber(actualNumber)
      setActualNumber("")
    }
  }

  const handleMultiplication = () => {
    if (longNumber === false) {
      setOperation("*")
      setPreviousNumber(actualNumber)
      setActualNumber("")
    }
  }

  const handleDivision = () => {
    if (longNumber === false) {
      setOperation("/")
      setPreviousNumber(actualNumber)
      setActualNumber("")
    }
  }

  const handleMod = () => {
    if (longNumber === false) {
      setOperation("%")
      setPreviousNumber(actualNumber)
      setActualNumber("")
    }
  }

  const handleEqual = () => {
    setPressEqual(true)
    if (operation === "+" && longNumber === false) { //operación suma
      let operator1 = parseFloat(previousNumber)
      let operator2 = parseFloat(actualNumber)
      const result = operator1 + operator2
      if (result.toString().length < 9) {
        setActualNumber(result.toString())
      }
      else {
        handleAC()
        setActualNumber("ERROR")
        setLongNumber(true)
      }
    }
    else if (operation === "-" && longNumber === false) { //operación resta
      let operator1 = parseFloat(previousNumber)
      let operator2 = parseFloat(actualNumber)
      const result = operator1 - operator2
      if (signChange == false) {
        if (result.toString().includes("-")) {
          handleAC()
          setActualNumber("ERROR")
          setLongNumber(true)
        }
        else {
          if (result.toString().length < 9) {
            setActualNumber(result.toString())
          }
          else {
            handleAC()
            setActualNumber("ERROR")
            setLongNumber(true)
          }
        }
      }
      else {
        if (result.toString().length < 9) {
          setActualNumber(result.toString())
        }
        else {
          handleAC()
          setActualNumber("ERROR")
          setLongNumber(true)
        }
      }

    }
    else if (operation === "*" && longNumber === false) { //operación multiplicación
      let operator1 = parseFloat(previousNumber)
      let operator2 = parseFloat(actualNumber)
      const result = operator1 * operator2
      if (result.toString().length < 9) {
        setActualNumber(result.toString())
      }
      else {
        handleAC()
        setActualNumber("ERROR")
        setLongNumber(true)
      }
    }
    else if (operation === "/" && longNumber === false) { //operación división
      if (actualNumber !== "0") {
        let operator1 = parseFloat(previousNumber)
        let operator2 = parseFloat(actualNumber)
        let result = operator1 / operator2
        const resultString = result.toString()

        if (resultString.includes(".")) {
          let splitted = resultString .split(".")
          let decimalLength = 7 - splitted[0].length
          result = result.toFixed(decimalLength);
        }

        if (result.toString().length < 9) {
          setActualNumber(result.toString())
        }
        else {
          handleAC()
          setActualNumber("ERROR")
          setLongNumber(true)
        }
      }
      else {
        handleAC()
        setActualNumber("ERROR")
        setLongNumber(true)
      }
    }
    else if (operation === "%" && longNumber === false) { //operación módulo
      let operator1 = parseFloat(previousNumber)
      let operator2 = parseFloat(actualNumber)
      const result = operator1 % operator2
      if (result.toString().length < 9) {
        handleAC()
        setActualNumber(result.toString())
      }
      else {
        handleAC()
        setActualNumber("ERROR")
      }
    }
    setSignChange(false)
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
          <button className='gray-button' value="changeSign" onClick={() => handleChangeSign()}> 
            +/-
          </button>
          <button className='gray-button' value="mod" onClick={() => handleMod()}> 
            %
          </button>
          <button className='pink-button' value="division" onClick={() => handleDivision()}> 
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
          <button className='pink-button' value="multiplication" onClick={() => handleMultiplication()}> 
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
          <button className='pink-button' value="subtraction" onClick={() => handleSubtraction()}> 
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
          <button className='pink-button' value="sum" onClick={() => handleSum()}> 
            +
          </button>

          <button className='beige-button-big' value="0" onClick={() => handleAddNumber("0")}> 
            0
          </button>
          <button className='beige-button' value="dot" onClick={() => handleAddNumber(".")}> 
            .
          </button>
          <button className='pink-button' value="equal" onClick={() => handleEqual()}> 
            =
          </button>

        </div>

      </div>

    </div>
  );
}

export default App
