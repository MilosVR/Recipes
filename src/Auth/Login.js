import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import { reduxForm, Field } from 'redux-form'
import TextInput from '../form/TextInput'
import {createValidator,composeValidators,combineValidators,isRequired} from 'revalidate'
import TextCheckbox from '../form/TextCheckbox'
import TextPassword from '../form/TextPassword'
import { connect } from 'react-redux'
import { logIn } from '../actions/action'
import {toastr} from 'react-redux-toastr'
import FacebookAuth from './FacebookAuth'
import GoogleAuth from './GoogleAuth'

const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message
    }
  },
  'Invalid email address'
)

const validate = combineValidators({
  username:isRequired({message:"You must provide a valid username"}),
  password:isRequired({message:"You must provide a password"}),
  email:composeValidators(
    isValidEmail({message:"Invalid email address"}),
    isRequired({message:"You must provide a email address"})
  )()
})

class Login extends React.Component {

  state = {
    password: '',
    showPassword: false,
    checkedA: true,
    showUser:this.props.showUser
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleChangeCheckbox = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  onFormSubmit = values => {
    this.props.logIn(values)
    this.props.handleClose()
    this.props.reset()
    this.props.loged()
    toastr.success(`Wellcome ${ values.username }`, 'You are succesfuly logged in')
  }


  render() {
    return (
      <div>
        <Dialog 
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle style={{background:'url(/assets/silverTexture.jpg)', display:"flex", alignItems:'center'}}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-around', 
                        width:'400px', height:'10px', }}>

              <span style={{color:'Navy', fontSize:"30px", fontWeight:'bold',fontFamily: 'Lobster, cursive'}}>Log In</span>  
              <span style={{color:'midnightBlue'}}> or </span>
              <div><GoogleAuth /></div>
          </div> 

          </DialogTitle>

          <DialogContent style={{background:'url(/assets/blueTexture.jpg)'}}>

            <MuiThemeProvider theme={theme}>
          
              <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete='off'>
              
              <Grid container spacing={8} alignItems="center" style={{marginTop:'20px'}}>  
              <Grid item xs={1}><LockIcon style={{color:'silver'}}/></Grid>
              <Grid item xs={11}><Field name='username' label="Username" fullWidth component={TextInput}/></Grid>
              </Grid>

              <Grid container spacing={8} alignItems="center" style={{marginTop:'10px'}}>
              <Grid item xs={1}><EmailIcon style={{color:'silver'}}/></Grid>
              <Grid item xs={11}><Field name='email' label="E-mail" fullWidth component={TextInput}/></Grid>
              </Grid>

              <Grid container spacing={8} alignItems="center" style={{marginTop:'10px', marginBottom:"40px"}}>  
              <Grid item xs={1}><LockIcon style={{color:'silver'}}/></Grid>
              <Grid item xs={11}><Field name='password' label='Password' component={TextPassword}/></Grid>
              </Grid>              
       
             </form>

             <Grid>
               <Grid item xs={12} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
               <div>
               <span style={{color:'silver'}}>Remember me </span>

               <Field name='agree' component={TextCheckbox} label='agree'/>

               </div>
               <div>
                 <span style={{color:'silver'}}>Forgot Password?</span>
               </div>
               </Grid>
             </Grid> 

            </MuiThemeProvider>

          </DialogContent>
          <DialogActions   style={{background:'url(/assets/silverTexture.jpg)', height:'50px', margin:'0'}}>
            <Button variant='outlined' style={{color:'MidnightBlue'}} onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button variant='contained' style={{color:'silver', background:'MidnightBlue'}} 
            onClick={this.props.handleSubmit(this.onFormSubmit)} color="primary">
              Log in
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const actions = {
  logIn
}
const mapStateToProps = state => {
  return {
    user : state.user,
    isGoogleSignIn: state.googleAuth.isGoogleSignIn,
    userGoogle: state.googleAuth.userGoogle,
  }
}

export default connect(mapStateToProps, actions)(reduxForm({form:'loginForm', validate, enableReinitialize: true})(Login))




const theme = createMuiTheme({
    overrides: {
      MuiInput: {root:{color:'silver'},
        underline: {
          '&:before': { 
            borderBottom: '1px solid silver',
          },
          '&:hover:not($disabled):before': {  
            borderBottom: '2px solid silver !important',
          },
        }
      },
        MuiFormLabel: {
          root: {color:'silver', fontFamily: 'Kaushan Script, cursive',
            "&$focused": {
              color: "silver",
              fontWeight: "bold"
            }
          }, 
          focused: {}
        }
      },
    palette: {
      primary:{
          main:'#FAFAFA'
      },
    },
    typography: {
      useNextVariants: true,
    },
  });

  window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;