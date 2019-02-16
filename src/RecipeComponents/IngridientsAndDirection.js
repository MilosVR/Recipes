import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {Field} from 'redux-form'
import TextInput from '../form/TextInput'

class IngridientsAndDirection extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  

  render() {
    const { value } = this.state;

    return (
      <div style={{background:'rgb(0,0,0,0.6)'}} >
        <AppBar position="static" style={{background:'white', color:'black'}}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Ingridients" style={{width:'50%', background:'black', color:'white'}}/>
            <Tab label="Directions" style={{width:'50%', background:'black', color:'white'}}/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer >
          <div >
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'20px'}}>
            <h4 style={{padding:'10px', color:'white'}}>Add ingridients</h4>  
            <StyledButton variant="fab" onClick={this.props.addIngridients} >
            <AddIcon  />
            </StyledButton>
            </div>

            {this.props.showAddorIngr &&
            <div style={{
              background:'url(/assets/addIngredients.jpg) center center', 
              color:'white', 
              height:'300px',
              display:'flex',
              justifyContent:'center', 
              alignItems:'center'}}>

              <h2 style={{
                color:'white', 
                width:'90%', 
                height:'100px', 
                lineHeight:'100px',
                textAlign:'center', 
                background:'rgb(0,0,0,0.8)'}}>
              These fields are <span style={{color:'red'}}>required*</span>.</h2>
              </div>}
           
            <div style={{maxHeight:'512px', overflow:'auto'}}> 
            {this.props.ingridient && this.props.ingridient.map((item, index)=>{
              return (
                  <div key={item.id} style={{
                    background:'rgb(255,255,255,0.8)',
                    margin:'5px',
                    position:'relative', 
                    borderRadius:'3px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    paddingLeft:'10px',
                    paddingRight:'10px'
                  }}>

                    
                        <Field label="Ingridients" name={'ingredients'+ index} fullWidth component={TextInput} 
                        style={{padding:'10px', width:'90%'}} />

                        <Button variant="fab"  onClick={()=>this.props.removeIngridient(item.id)}>
                        <DeleteIcon style={{color:'Crimson'}}/>
                        </Button>                    
                  </div>
              )
            })}</div>
          
      </div>
        </TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
      </div>
    );
  }
}

export default IngridientsAndDirection


const StyledButton = withStyles({
  root: {
    background: 'green',
    color: 'white',
  },
  
})(Button);


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}