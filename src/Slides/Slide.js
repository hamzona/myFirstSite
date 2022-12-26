import './slide.css'
import Answers from './answers';


function Slide({setIsChange,answerKey,slides,slide,setSlides,number,slideKey,setSlideKey,setAnswerKey}) {
    
    return <div className="table" onClick={()=>/*selektujem slide*/setSlideKey(slide.key)}>
    
    <div className='top-cont'>
        <p className="number">{number}</p>
        <h2 className='question'>{slide.question}</h2>
    </div>

    <div className='answers'>
        {slide.answers.map(answer=>{
            return<Answers setIsChange={setIsChange} answerKey={answerKey} slides={slides} setSlides={setSlides} slideKey={slideKey}  answer={answer} setAnswerKey={setAnswerKey} key={answer.key}/>
        })}
    </div> 
  </div>
}

export default Slide;
