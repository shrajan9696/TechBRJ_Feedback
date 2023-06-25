
import React from 'react';
import Form from './components/Form';

import { useState } from 'react';
import { useEffect } from 'react';

import log from './assets/logo.png';

function App() {

  const [questions, setQuestions] = useState([]);
  


  const initialData =  { "questions": ["Look and Feel", "Cleanliness of shop", "Value for money",  "Staff friendliness & Professionalism", "Your Visit"],
          "choices": []}



  const [feedback,setFeedback] = useState(initialData);
  const [show,setShow] = useState(true);


  useEffect(()=>{

    async function fetchQuestions() {

  
     
      const response = await fetch('https://brijfeedback.pythonanywhere.com/api/get-feedback-questions/?format=json&unitID=1');
      if(!response.ok){
         throw new Error('Something went wrong');
       }

      const data = await response.json();
      
      
      
      setQuestions(data.feedbackQuestions);

    }
  
 
  
    fetchQuestions().then(()=>console.log("success")).catch(err=>{
      console.log(err);
    });
  
  

  },[]);



  const submitHandler = (ans)=>{
   
    //  console.log(ans);

     setFeedback((prevState)=>{
      return {
        ...prevState,
        "choices": ans
      }
     })

     setShow(false);
     
    
  }
  {!show&& console.log("feedback:", feedback)}

 
  return (
    <div >
    {show &&  <div>
    
   <h1 style={{textAlign:'center'}}> Tech BRJ Feedback Form</h1>
  
<div style={{textAlign:'center'}}><img src={log} height="50px"  ></img></div>
    <Form questions={questions} showData={submitHandler}/></div> }
    {!show && <div style={{margin:"10px"}}>
    <h2>Thankyou! Your responses has been succesfully stored</h2>
    <h3>Please visit console to see details in specified format</h3>
    <ul>{feedback.choices.map((ele,index)=>{ return <li key={index}>{feedback.questions[index]} : {ele}</li>})}</ul>
    </div> }
    </div>
  );
}

export default App;
