import React, { Component } from 'react'
import { editRecipe } from '../actions/action'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { reduxForm, Field, FieldArray } from 'redux-form'
import TextInput from '../form/TextInput';
import TextArea from '../form/TextArea'
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import EditIngridientsAndDirection from './EditIngredientsAndDirections'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';



const validate = combineValidators({
  title:isRequired({message:"Please provide a title"}),
  author:isRequired({message:"Please provide your name"}),
  cook:isRequired({message:"Please provide a prepared cook time"}),
  description:composeValidators(
    isRequired({message:"Please provide a description"}),
    hasLengthGreaterThan(8)({message:"Description has greater then 8 characters"})
  )()
})

class EditRecipe extends Component {
 
  state={
    showRedShape:false,
    value:0
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  FormSubmit = values => {
    this.props.editRecipe(values)
    this.props.history.goBack()
   }
 
  toggleRedShape = () => {
    this.setState({
      showRedShape:!this.state.showRedShape
    })
  }

  render() {
    const { value } = this.state;
    return (
      <div style={{background:'url(/assets/RecipeForm.jpg) center center', width:'100%', height:'100vh'}}>
      <div style={{
        margin:'0 auto', 
        width:'1400px', 
        display:'flex', 
        justifyContent:"space-around", 
        }}>
       
        <form onSubmit={this.props.handleSubmit(this.FormSubmit)} autoComplete='off' style={{textAlign:'center', marginTop:'20px',}}>

        <div style={{display:'flex', justifyContent:'space-around', width:'1400px', overflow:'hidden'}}>
        <div>
        <div style={{width:'700px', height:'493px',marginTop:'100px', background:'rgb(0,0,0,0.8)', position:'relative'}}>
        <div style={{background: 'linear-gradient(45deg, dodgerBlue 30%, black 90%)',marginBottom:'20px', 
                     color:'white', textAlign:'center', height:'50px', lineHeight:'50px'}}>
          <b>Create your own recipe</b>
        </div>

            <MuiThemeProvider theme={theme}>

            <Field name='title' component={TextInput} label='Title'/>

            <Field name='author' component={TextInput} label='Author'/>

            <Field name='cook' component={TextInput} label='Cook'/>

            <Field name='description' component={TextArea} label='Description'/>
            
            </MuiThemeProvider>  

            <div style={{marginTop:'50px', display:'flex', justifyContent:'center'}}>
            <StyledButton1 variant="contained" color='default'
            style={{margin:'5px'}} onClick={()=>this.props.history.goBack()}>
            Cancel</StyledButton1>
            <StyledButton variant="contained" type='submit' color='primary' 
            style={{margin:'5px'}}>Submit</StyledButton>
        
            <div onClick={this.toggleRedShape}
            style={{position:'absolute',
                    bottom:'20px', 
                    right:'10px',
                    width:'200px',
                    height:'100px',
                    color:'white',
                    cursor:'pointer'
                          }}>
            <img  alt='' src='/assets/blueShape1.png' style={{width:'280px', height:'132px'}}/>
            <span style={{color:'white',zIndex:'100',position:'absolute',top:'70px',left:'120px'}}>Send us</span>
            <span style={{color:'white',zIndex:'100',position:'absolute',top:'90px',left:'120px'}}>Message</span>              
            </div>
                          
            </div>
            </div>

            { this.state.showRedShape &&                
            <div className='blueShape'>
            <MuiThemeProvider theme={theme1}>
            <TextField name='email' label="Email"  fullWidth
            style={{padding:'10px',  width:'90%', marginTop:'20px'}}/>
            <TextField name='password' label="Password"
            fullWidth multiline rowsMax="4"
            style={{padding:'10px',  width:'90%'}}/> 
            </MuiThemeProvider>
            <StyledButton3 style={{margin:'5px', marginTop:'20px'}}>Cancel</StyledButton3>
            <StyledButton2 style={{margin:'5px', marginTop:'20px'}}>Message</StyledButton2>
            </div> }

            </div>              

          
            <div style={{width:'500px', marginTop:'100px'}}>
            <div style={{background:'rgb(0,0,0,0.6)'}} >
                <AppBar position="static" style={{background:'white', color:'black'}}>
                  <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="Ingridients" style={{width:'50%', background:'black', color:'white'}}/>
                    <Tab label="Directions" style={{width:'50%', background:'black', color:'white'}}/>
                  </Tabs>
                </AppBar>
                {value === 0 && <TabContainer >
                  <div >
                    <FieldArray name='ingridients' component={renderMembers} />
                </div>
                </TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
              </div>
            </div>
      

        </div>
        </form>
        </div>   
     
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  
  return {
    initialValues : state.recipe.find(item => item.id == id)
  }
}

const actions = {
  editRecipe
}

export default connect(mapStateToProps, actions)(reduxForm({form:'editRecipe', validate})(EditRecipe))



const theme = createMuiTheme({
  overrides: {
    MuiInput: {root:{color:'white'},
      underline: {
        '&:before': { 
          borderBottom: '1px solid dodgerBlue',
        },
        '&:hover:not($disabled):before': {  
          borderBottom: '2px solid white !important',
        },
      }
    },
      MuiFormLabel: {
        root: {color:'white',
          "&$focused": {
            color: "dodgerBlue",
            fontWeight: "bold"
          }
        }, 
        focused: {}
      }
    },
  palette: {
    primary:blue,
  },
  typography: {
    useNextVariants: true,
  },
});

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, dodgerBlue 30%, black 90%)',
    borderRadius: 3,
    border: '1px solid white',
    color: 'white',
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const StyledButton1 = withStyles({
  root: {
    background: 'linear-gradient(45deg, black 30%, silver 90%)',
    borderRadius: 3,
    border: '1px solid white',
    color: 'white',
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


const theme1 = createMuiTheme({
  overrides: {
    MuiInput: {root:{color:'dodgerBlue'},
      underline: {
        '&:before': { 
          borderBottom: '1px solid white',
        },
        '&:hover:not($disabled):before': {  
          borderBottom: '2px solid white !important',
        },
      }
    },
      MuiFormLabel: {
        root: {color:'white',
          "&$focused": {
            color: "white",
            fontWeight: "bold"
          }
        }, 
        
        focused: {}
      }
  },

  palette: {
    primary:{
      main:'#F5F5F5'
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const StyledButton2 = withStyles({
  root: {
    background: 'linear-gradient(45deg, dodgerBlue 30%, black 90%)',
    borderRadius: 3,
    border: '1px solid white',
    color: 'white',
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const StyledButton3 = withStyles({
  root: {
    background: 'linear-gradient(45deg, gray 30%, black 90%)',
    borderRadius: 3,
    border: '1px solid white',
    color: 'white',
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div style={{padding:'10px',  width:'80%'}}>
   <MuiThemeProvider theme={theme2}>
    <FormControl fullWidth >
      <InputLabel>{label}</InputLabel>
      <Input {...input} />
      {  touched && !!error && <FormHelperText style={{color:'crimson', fontWeight:'bold'}}>{error}</FormHelperText>}
    </FormControl>
    </MuiThemeProvider>
  </div>
)

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:"center", height:'100px',background:'royalBlue',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',marginBottom:"20px"}}>
      <span style={{fontWeight:"bold", fontSize:'20px', marginRight:"20px", color:"white"}}>Add ingredients</span>

      <button type="button" style={{padding:"10px", borderRadius:"50%", width:'60px', height:"60px", fontSize:"24px",
      fontWeight:"bold", border:'none', outline:"none", background:'black', color:"white"}} 
      onClick={() => fields.push({})}>+</button>

      {submitFailed && error && <span>{error}</span>}
    </div>

    {fields.map((ingridients, index) => (
      <div key={index} style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'5px',
                              background:"rgb(255,255,255,.8)", borderRadius:"5px"}}>
        <Field
          name={`${ingridients}.ingr`}
          type="text"
          component={renderField}
        />
        <button type="button" style={{background:"black", width:"40px", height:'40px', borderRadius:'50%',
        display:"flex", justifyContent:"center", alignItems:"center", border:'none', outline:'none'}}
        onClick={() => fields.remove(index)} >❌</button>
        {/*<h4>Ingredients {index + 1} :</h4>*/}
      </div>
    ))}
  </div>
)

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const theme2 = createMuiTheme({
  overrides: {
    MuiInput: {root:{color:'black'},
      underline: {
        '&:before': { 
          borderBottom: '1px solid black',
        },
        '&:hover:not($disabled):before': {  
          borderBottom: '2px solid black !important',
        },
      }
    },
      MuiFormLabel: {
        root: {color:'white',
          "&$focused": {
            color: "royalBlue",
            fontWeight: "bold"
          }
        }, 
        focused: {}
      }
    },
  palette: {
    primary:blue,
  },
  typography: {
    useNextVariants: true,
  },
});