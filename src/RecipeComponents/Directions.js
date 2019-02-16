import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class Directions extends Component {
  render() {
    return (
        <ListItem>
        <ListItemText>{this.props.direction.step}</ListItemText>
        </ListItem>
    )
  }
}
export default Directions