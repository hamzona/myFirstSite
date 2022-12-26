import Slide from './Slide';
import { useEffect, useState } from 'react';
import {v4 } from 'uuid'
import SetQuestionAnswers from '../SetTable/SetQuestionAnswers'
import '../app.css'
import { Link } from 'react-router-dom';
import {useDataSlides,useUpdateDataSlides} from '../GlobalContext/DataSlides';




function App(){
  /*uzimam slide i setSlide iz Contexta */
  const slides=useDataSlides();
  const setSlides=useUpdateDataSlides();

  /*Sluzi za selektovanje Slida i answera*/
  const [slideKey,setSlideKey]=useState("");
  const [answerKey,setAnswerKey]=useState("");
  /*klikanje odgovora*/
  const [isChange,setIsChange]=useState(false);
  let copySlides=slides;
  /*Funkcija koja mjenja tacnost odgovora u njegovu suprotnu vrijednost i vraca taj obj*/
  function hendleAnswer(){
     //answerDiv.target.classList.add('selected');
     copySlides.forEach(slide=>{
      if(slide.key===slideKey){
          slide.answers.forEach(answer=>{
              if(answer.key===answerKey){
                  answer.correct=!answer.correct;
              }
          })
      }
  })
  return copySlides;
  }
  useEffect(()=>{
    console.log('render')
    setSlides([...hendleAnswer()])
  },[isChange]);

  /*dodavanje slide*/
  function addSlide(){
    setSlides(prev=>[...prev,{
      key:v4(),
      question:"question",
      answers:[
        {key:v4(),correct:true,content:'answer 1'},
        {key:v4(),correct:true,content:'answer 2'},
        {key:v4(),correct:true,content:'answer 3'},
        {key:v4(),correct:true,content:'answer 4'}
      ]
    }])
    }

  return<div className='container'>
    <SetQuestionAnswers className="set-cont" addSlide={addSlide} answerKey={answerKey} setSlides={setSlides} slideKey={slideKey} setSlideKey={setSlideKey} slides={slides}/>
    <div className='slide-cont'>
         {slides.map((slide,i)=>{
           return <Slide setIsChange={setIsChange} slides={slides} answerKey={answerKey} setSlides={setSlides} slideKey={slideKey} setAnswerKey={setAnswerKey} setSlideKey={setSlideKey} slide={slide} number={i+1} key={slide.key}/>
         })}
    </div>
    <div className='start-cont'>
      <Link className='link' to="/start">Start</Link>
    </div>
  </div>
}

export default App;
