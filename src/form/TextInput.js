import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


function TextInput({ input, label, meta : { touched, error} }) {

  return (
    <FormControl fullWidth style={{padding:'10px',  width:'90%'}}>
          <InputLabel>{label}</InputLabel>
          <Input {...input} />
          {  touched && !!error && <FormHelperText style={{color:'crimson', fontWeight:'bold'}}>{error}</FormHelperText>}
        </FormControl>
        )
}

export default TextInput

