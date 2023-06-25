
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



function FormQuestion(props)
{
  

  function changeHandler(event) {


    props.individualOption(event.target.value, props.id);

  }
 
  return(
<FormControl >
<FormLabel id="demo-row-radio-buttons-group-label">{props.id+1} : {props.query}</FormLabel>
<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
  onChange={changeHandler}
  required
>
  <FormControlLabel value="Excelent" control={<Radio />} label="Excelent" />
  <FormControlLabel value="Good" control={<Radio />} label="Good" />
  <FormControlLabel value="Average" control={<Radio />} label="Average" />
  
</RadioGroup>
</FormControl>
  );
}

export default FormQuestion;
