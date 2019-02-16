import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { addPizzaIngridient, deletePizzaIngridient,addPizzaCost, removePizzaCost } from '../actions/action'
import { pizzaList } from '../PizzaMaker/pizzaJSON'
import PizzaMakerModal from './PizzaMakerModal'


import React, { Component } from 'react'

class SideRight extends Component {

  state = {
    expanded: null,
    open: false,
    disableButton:[false, false, false, false, false, false]
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  addIngredient=(item, index)=>{
    this.props.addPizzaIngridient(item); 
    this.props.addPizzaCost(item);
    this.setState({disableButton: this.state.disableButton.map((button, buttonIndex) => {
        return buttonIndex === index ? true : button;
      })
    });
  }
  deleteIngredient = (item, index) => {
    this.props.deletePizzaIngridient(item);
    this.props.removePizzaCost(item);
    this.setState({disableButton: this.state.disableButton.map((button, buttonIndex) => {
        return buttonIndex === index ? false : button;
      })
    });
  }


  render() {
    const { expanded } = this.state
    return (
      <div style={{width:'350px'}}>
      <div style={{width:'350px', 
                    color:'white', height:'50px',fontWeight:'bold', 
                    lineHeight:'50px', textAlign:'center', 
                    background:'Coral'}}>Custom Pizza</div> 


      <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <ExpansionPanelSummary style={{background:'rgb(62, 59, 53)',borderBottom:'2px solid coral'}} expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}>
          <Typography style={{ color:'white', fontWeight:'bold'}}>Add Ingredients</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{background:"white"}}>
          <div>
            {pizzaList.map((item, index)=> {
              return  (
                <ListItem key={item.id}>
                  <ListItemIcon>
                    <Avatar src={item.image} />
                  </ListItemIcon>
                  <ListItemText inset primary={item.name}/>

                    <IconButton onClick={()=>this.addIngredient(item, index)} 
                    disabled={this.state.disableButton[index]}> 

                      <AddCircleIcon  
                      style={{color:'dodgerBlue'}}/> 
                    </IconButton>

                    <IconButton onClick={()=>this.deleteIngredient(item, index)} 
                    disabled={!this.state.disableButton[index]}>
                    
                    <RemoveCircleIcon  
                      style={{color:'crimson'}}/>
                    </IconButton>
                </ListItem>
              )
              })
              }
          </div>
        </ExpansionPanelDetails>

      </ExpansionPanel >
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <ExpansionPanelSummary style={{background:'rgb(62, 59, 53)',borderBottom:'2px solid coral' }} expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}>
          <Typography style={{color:'white', fontWeight:'bold'}}>Order</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{position:'relative',textAlign:'center'}}>
           <img alt='' src='/assets/woodOven.png' style={{position:'absolute', width:'100%', top:'0px', left:'0px'}}/>

          <div style={{textAlign:'center', padding:"10px", zIndex:"200", color:'white',marginTop:'70px', width:'100%'}}>

            <div style={{background:'rgb(0,0,0,0.5)', color:'white', textAlign:'center'}}>
            <span >Click and order your custom Pizza.</span> <br/>
            <span style={{color:'orange', fontSize:'20px'}}><b>Enjoy!</b></span>  <br/>  
            </div>

            <Button variant="extendedFab" onClick={this.handleClickOpen}
            style={{background:"orange", color:'white', marginTop:'20px',zIndex:'200'}}> 
            <ShoppingCartIcon style={{color:'white'}}/> Order
           </Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <PizzaMakerModal open={this.state.open} 
      handleClickOpen={this.handleClickOpen} handleClose={this.handleClose}/>
    </div>
    )
  }
}
const actions = {
  addPizzaIngridient,
  deletePizzaIngridient,
  addPizzaCost,
  removePizzaCost
}

const mapStateToProps = state => {

  return {
    pizza : state.pizza,
    specialPizza: state.specialPizza
  }
}

export default connect(mapStateToProps, actions)(SideRight)