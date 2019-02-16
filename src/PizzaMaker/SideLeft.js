import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { SpecialPizzaList } from './HouseSpecialJSON'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { addSpecialPizza } from '../actions/action'
import { connect } from 'react-redux'

import React, { Component } from 'react'

class SideLeft extends Component {

  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div style={{width:'270px'}}>
       <div style={{width:'270px', 
                    color:'white', height:'50px', fontWeight:'bold',
                    lineHeight:'50px', textAlign:'center', 
                    background:'SeaGreen'}}>Home Specialty</div> 
                    
      {SpecialPizzaList.map((item)=> {
      return ( <div key={item.id}>
                <ExpansionPanel expanded={expanded === `${item.id}`} onChange={this.handleChange(`${item.id}`)}>
                  <ExpansionPanelSummary style={{background:'rgb(62, 59, 53)',borderBottom:'2px solid MediumSpringGreen'}} 
                  expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}>
                  <Typography style={{color:'white', fontWeight:'bold'}} onClick={()=>this.props.addSpecialPizza(item)}>{item.name}</Typography>
                   </ExpansionPanelSummary>
                   <ExpansionPanelDetails>
                   <div>
                   {item.ingredients && item.ingredients.map((item, index)=>{
                    return (<ListItem key={index}>
                            <ListItemText >{item}</ListItemText>
                            </ListItem>
                            )
                            })}
                  </div>
                  </ExpansionPanelDetails>
                  </ExpansionPanel>
                  </div>
                  )
              })}
      
       </div>
       )}
      }
const actions = {
  addSpecialPizza
}

export default connect(null, actions)(SideLeft)
