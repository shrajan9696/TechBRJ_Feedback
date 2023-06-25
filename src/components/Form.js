import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';
import FormQuestion from './FormQuestion';
import { Button } from '@mui/material';


export default function Form(props) {

  const [answers,setAnswers] = useState(["NoAnswer","NoAnswer","NoAnswer","NoAnswer","NoAnswer"]);
  

  const submitHandler = (event)=>{
      event.preventDefault();
    
      props.showData(answers);
  }

  const individualOptionHandler = (value, id)=>{
  

    const arr = answers.map((ele,ind)=>{
      if(ind === id){
        return value;
      }
      else return ele;
    })

    setAnswers(arr);
  }

  


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       <Box sx={{ bgcolor: '#cfe8fc',margin: "10px" ,padding:"10px" }}>
        <form onSubmit={submitHandler}>
        <div>
           {props.questions.map((question,index)=>{ return <FormQuestion query={question} key={index} id={index}  individualOption = {individualOptionHandler} />})}
           </div>
           <div style={{textAlign:"center"}}>
           <Button variant="contained" type='submit' >Submit</Button>
          </div>
         
       </form>
     
         </Box>
     
      </Container>
    </React.Fragment>
  );
}
