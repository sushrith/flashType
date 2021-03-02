import './App.css';
import React,{Component} from 'react';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import {SAMPLE_PARAGRAPHS} from './../../data/sampleParaghraphs'
const TotalTime=60;
//const serviceUrl='http://metaphorpsum.com/paragraphs/1/9';
const DefaultState={
  selectedParagraph:"",
  timerStarted:false,
  timeReading:TotalTime,
  words:0,
  characters:0,
  wpm:0,
  testInfo:[]
}
class App extends Component{
  state=DefaultState

  fetchNewParagraphFallback=()=>{
    const data=SAMPLE_PARAGRAPHS[
      Math.floor(Math.random()*SAMPLE_PARAGRAPHS.length)
    ];
    
    //this.setState({selectedParagraph:data});
    console.log(data);
    const selectedParagraphArray=data.split("");
    const testInfo=selectedParagraphArray.map(chara=>{return{testLetter:chara,status:"notAttempted"}})
    this.setState({...DefaultState,testInfo:testInfo,selectedParagraph:data});
  
  }

  // fetchNewParagraph=()=>{
  //   fetch(serviceUrl)
  //   .then(response=>response.text())
  //   .then(data=>{this.setState({selectedParagraph:data});
  //   const selectedParagraphArray=this.state.selectedParagraph.split("");
  //   const testInfo=selectedParagraphArray.map(chara=>{return{testLetter:chara,status:"notAttempted"}})
  //   this.setState({...DefaultState,testInfo:testInfo,selectedParagraph:data});
  
  //   })
  
  // }

  componentDidMount=()=>{
    this.fetchNewParagraphFallback();    
  };
  startTimer=()=>{
    this.setState({timerStarted:true});
    const timer=setInterval(()=>{
      if(this.state.timeReading>0)
      {
       // change wpm
        const timeSpent=TotalTime-this.state.timeReading;
        const wpm=timeSpent>0?(this.state.words/timeSpent) * TotalTime:0;
        
        this.setState({timeReading:this.state.timeReading-1,
          wpm:parseInt(wpm)})
    }
    else{
      clearInterval(timer);
    }
  },1000);
    
}
    startAgain=()=>{
   this.fetchNewParagraphFallback();
    }
  
  handleUserInput=(inputValue)=>{
   
    if(this.state.timerStarted===false){
    this.startTimer();
   }
   /**
    * 1.Handle the underflow case - all characters are marked as notAttempted
    * 2.Handle the overflow case - early exit
    * 3.Handle the backspace
    *           -Mark the [index+1] element as notAttempted(irrespective of whether index is less than 0)
    *           -But , dont forget to check for the overflow case here
    *           (index+1)->out of bound,when index==length-1
    * 4. Update the status in the test info
    *     -find out the last character in the inputValue and its index
    *     - check if the character at the same index in testInfo(state) matches or not
    *     Yes->correct
    *     No->incorrect
    * 5.Irrespective of the case,characters,words and speed(wpm) can be updated
    */
   const characters=inputValue.length;
   const words=inputValue.split(" ").length;
   const index=characters-1;

   if(index<0){
      this.setState({
        testInfo:[
          {
            testLetter:this.state.testInfo[0].testLetter,
            status:"notAttempted"
          },
          ...this.state.testInfo.slice(1)
        ],
        characters:characters,
        words:words
      });
      return;
   }

   if(index>= this.state.selectedParagraph.length)
   {
     this.setState({characters,words});
     return;
   }

   //handle backspace
   const testInfo=this.state.testInfo;
   if(!(index===this.state.selectedParagraph.length-1))
   {
     testInfo[index+1].status="notAttempted";
   }

   //check for correct typed letters
   const isCorrect=inputValue[index]===testInfo[index].testLetter;
   if(isCorrect){
     testInfo[index].status="correct";
   }
   else{
    testInfo[index].status="incorrect";
     
   }

   this.setState({
     testInfo,words,characters
   })



  }

  render(){
  return(
      <div className="app">
      <Nav/>
      <Landing/>
      <ChallengeSection
      selectedParagraph={this.state.selectedParagraph}
      words={this.state.words}
      characters={this.state.characters}
      wpm={this.state.wpm}
      timeRemaining={this.state.timeReading}
      timerStarted={this.state.timerStarted}
      testInfo={this.state.testInfo}
      onInputChange={this.handleUserInput}
      startAgain={this.startAgain}
      />
      <Footer/>
      </div>
      
    ) 
  }
}

export default App;
