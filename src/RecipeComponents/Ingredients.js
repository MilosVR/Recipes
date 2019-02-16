import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ToysIcon from '@material-ui/icons/Toys';

class Ingredients extends Component {
    render() {
        console.log('ingredient :',this.props)
    return (
        <ListItem >
            <ListItemIcon>
            <ToysIcon style={{color:'orange'}}/>
          </ListItemIcon>
        <ListItemText>{this.props.ingredient.ingr}</ListItemText>
        </ListItem>
    )
  }
}
export default Ingredients