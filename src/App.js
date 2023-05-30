import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">

      <div className='calculator'>

        <div className='screen'> 
          <h1 className='display-number'> 3896 </h1>
          <div className='separator'></div>
        </div>

        <div className='keyboard'>
          <br/>
          <button className='gray-button'> 
            AC
          </button>
          <button className='gray-button'> 
            +/-
          </button>
          <button className='gray-button'> 
            %
          </button>
          <button className='pink-button'> 
            ÷
          </button>

          <button className='beige-button'> 
            7
          </button>
          <button className='beige-button'> 
            8
          </button>
          <button className='beige-button'> 
            9
          </button>
          <button className='pink-button'> 
            ×
          </button>

          <button className='beige-button'> 
            4
          </button>
          <button className='beige-button'> 
            5
          </button>
          <button className='beige-button'> 
            6
          </button>
          <button className='pink-button'> 
            −
          </button>

          <button className='beige-button'> 
            1
          </button>
          <button className='beige-button'> 
            2
          </button>
          <button className='beige-button'> 
            3
          </button>
          <button className='pink-button'> 
            +
          </button>

          <button className='beige-button-big'> 
            0
          </button>
          <button className='beige-button'> 
            .
          </button>
          <button className='pink-button'> 
            =
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;
