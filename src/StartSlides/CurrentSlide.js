import CurrentAnswersData from './CurrentAnswersData.js'
import { useState } from 'react';
import './presentSlide.css'
function CurrentSlide({setCorrect,currentSlideData,setI,i,setCurrentSlideData,slides}){

    /*pokazivanje odgovora*/
    const [clicked,setClicked]=useState(false);
    

    const[correctCheck,setCorrectChek]=useState(true);

    const hideButton={
        display:clicked?'block':'none'
    }
    return (
    <div className="pres-table">
        <div className='top-cont'>
        <p className="pres-number">{i+1}</p>
        <h2 className='pres-quesiton'>{currentSlideData.question}</h2>
        </div>

        <div className='pres-answers'>
            {currentSlideData.answers.map(answer=>{
                return<CurrentAnswersData setCorrectChek={setCorrectChek} setCorrect={setCorrect} clicked={clicked} setClicked={setClicked} key={answer.key} answer={answer}/>
            })}
        </div> 
        <div className='footer-cont'>
                <div style={hideButton}>
                <p>{correctCheck?'CORRECT':'WRONG'}</p>
                <button className='pres-next' onClick={()=>{
                    setClicked(false)
                    setI(prev=>{return ++prev})}}>NEXT</button>
            </div>
        </div>
  </div>
  )
}

export default CurrentSlide;