import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class PizzaMakerModal extends React.Component {

  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };


  render() {
    console.log(this.props.pizzaCoss);
    
    return (
      <div>
        
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.handleClose}
        >

          <DialogTitle  style={{width:'552px'}}>
          <ListItem style={{background:'orange'}}>
            <span style={{color:"white", textAlign:'center', fontWeight:'bold'}}>
            Order custom Pizza
            </span>
          </ListItem>
          </DialogTitle>
          <DialogContent style={{textAlign:'center'}}>
            <span style={{fontSize:'20px'}}>
              Your total cost is: <span style={{color:'green', fontSize:'25px', fontWeight:'bold'}}>
              {this.props.pizzaCost} $</span>
            </span>
            <ListItem button onClick={this.handleClick} style={{marginTop:'20px'}}>
          <ListItemIcon>
            <LineWeightIcon style={{color:'green'}}/>
          </ListItemIcon>
          <Typography style={{color:'orange', fontWeight:'bold'}}>Show calories</Typography>
          {this.state.open ? <ExpandLess style={{color:'orange'}}/> : <ExpandMore style={{color:'orange'}}/>}
        </ListItem>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <Table style={{marginTop:'20px'}}>
          <TableHead>
            <TableRow>
              <TableCell style={{background:'orange', color:'white'}}>Dessert (100g serving)</TableCell>
              <TableCell style={{background:'green', color:'white'}}>Calories</TableCell>
              <TableCell style={{background:'green', color:'white'}}>Fat (g)</TableCell>
              <TableCell style={{background:'green', color:'white'}}>Carbs (g)</TableCell>
              <TableCell style={{background:'green', color:'white'}}>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
                <TableRow >
                  <TableCell component="th" scope="row">
                </TableCell>

                  <TableCell >1</TableCell>
                  <TableCell >2</TableCell>
                  <TableCell >3</TableCell>
                  <TableCell >4</TableCell>
                </TableRow>
             
          </TableBody>
        </Table>
        </Collapse>

          </DialogContent>
          <DialogActions style={{padding:'15px'}}>
            <Button onClick={this.props.handleClose} variant='contained'>
              Cancel
            </Button>
            <Button onClick={this.props.handleClose} variant='contained' style={{background:'orange', color:'white'}}>
              Order
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pizzaCost : state.pizzaCost,
  }
}

export default connect(mapStateToProps)(PizzaMakerModal);