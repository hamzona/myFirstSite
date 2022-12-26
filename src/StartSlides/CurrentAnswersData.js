import './presentSlide.css'
function CurrentAnswersData({setCorrectChek,setCorrect,answer,clicked,setClicked}){
    const TrueFalseSyle={
        backgroundColor:answer.correct?'green':'red'
    }
    function hendleAnswer(){
      setClicked(true);
        if(answer.correct){
            setCorrect(correct=>{
                return ++correct;
            })
            setCorrectChek(answer.correct);
        }else{
            setCorrectChek(answer.correct);
        }
    }
    return <div onClick={hendleAnswer} style={clicked?TrueFalseSyle:{}} className="pres-answer" >
        {answer.content}
    </div>
}

export default CurrentAnswersData;