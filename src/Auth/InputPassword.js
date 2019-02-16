import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


export default class InputPassword extends Component {
  render() {
    return (

        <FormControl fullWidth>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            type={this.props.showPassword ? 'text' : 'password'}
            value={this.props.password}
            onChange={this.props.handleChange('password')}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton style={{color:'silver'}}
                  aria-label="Toggle password visibility"
                  onClick={this.props.handleClickShowPassword}
                >
                  {this.props.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
   
    )
  }
}
