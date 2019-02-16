import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


function TextArea({ input, label, meta : { touched, error} }) {

  return (
    <FormControl fullWidth style={{padding:'10px',  width:'90%'}}>
          <InputLabel>{label}</InputLabel>
          <Input {...input} multiline rowsMax="4"/>
          {  touched && !!error && <FormHelperText style={{color:'red'}}>{error}</FormHelperText>}
        </FormControl>
  )
}

export default TextArea
