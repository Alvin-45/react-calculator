import { useState } from 'react';
import './App.css'

function App() {

  const [display, setDisplay] = useState("")

  const displayContent = (value) => {
    setDisplay(display + value);
  }

  const clearContent = () => {
    setDisplay('')
  }

  const equalContent = () => {
    try {
      setDisplay(eval(display))
    }
    catch (error) {
      setDisplay("Syntax Error")

    }
  }

  const deleteContent = () => {
    setDisplay(display.slice(0, -1))
  }

  return (
    <>
      <div style={{ width: '100%', height: '100vh'}} className='d-flex align-items-center justify-content-center'>
        <div className='key box d-flex align-items-center justify-content-center'>
          <div className='mainfullbody border border-dark d-flex flex-column  '>


            <div style={{ marginTop: '30px', marginLeft: '5px'}} >
              <input type="text" id='resultbox' style={{
                width: '320px', height: '100px', paddingLeft: '10px',borderRadius:'20px', fontSize: '40px', color: 'white',
                border: '1px solid #121212',marginTop:'20px',textAlign:'right'
              }}
                className="input  border border-dark rounded resbox" value={display} readOnly />
            </div>
            <hr style={{marginTop:'25px',marginLeft:'-45px'}} />

            <div className='small-box' style={{ marginTop: '20px' }}>
              <input id='input1' onClick={clearContent} type="button" value="AC" />
              <input id='delbt' onClick={deleteContent} type="button" value="DEL" />
              <input onClick={() => displayContent('/')} id='divsym' type="button" value="/" />
            </div>


            <div className='small-box' style={{ marginTop: '0px' }}>
              <input onClick={() => displayContent('7')} type="button" value="7" />
              <input onClick={() => displayContent('8')} type="button" value="8" />
              <input onClick={() => displayContent('9')} type="button" value="9" />
              <input onClick={() => displayContent('*')} id='mulsym' type="button" value="*" />
            </div>


            <div className='small-box' style={{ marginTop: '0px' }}>
              <input onClick={() => displayContent('4')} type="button" value="4" />
              <input onClick={() => displayContent('5')} type="button" value="5" />
              <input onClick={() => displayContent('6')} type="button" value="6" />
              <input onClick={() => displayContent('+')} id='plussym' type="button" value="+" />
            </div>


            <div className='small-box' style={{ marginTop: '0px' }}>
              <input onClick={() => displayContent('1')} type="button" value="1" />
              <input onClick={() => displayContent('2')} type="button" value="2" />
              <input onClick={() => displayContent('3')} type="button" value="3" />
              <input onClick={() => displayContent('-')} id='minsym' type="button" value="-" />
            </div>


            <div className='small-box' style={{ marginTop: '0px' }}>
              <input onClick={() => displayContent('0')} id='input2' type="button" value="0" />
              <input onClick={() => displayContent('.')} type="button" value="." />
              <input onClick={equalContent} id='eqsym'  type="button" value="=" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App