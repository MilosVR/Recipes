import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ListItem  from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'


function MainMenu(props) {

  return (
    <Paper style={{marginTop:"20px"}}>
        <ListItem style={{background:"dodgerBlue", color:'white'}}>Menu</ListItem>
      <MenuList>
        <MenuItem >
          <ListItemIcon >
            <SendIcon style={{color:'dodgerBlue'}}/>
          </ListItemIcon>
          <ListItemText inset primary={
                <Typography style={{ color: 'dodgerBlue', fontSize:'16px' }}>Create new recipe</Typography>
                }/>
        </MenuItem>
        <MenuItem >
          <ListItemIcon >
            <DraftsIcon style={{color:'dodgerBlue'}}/>
          </ListItemIcon>
          <ListItemText inset primary={
                <Typography style={{ color: 'dodgerBlue', fontSize:'16px' }}>Vine Section</Typography>
                }/>
        </MenuItem>
        <MenuItem >
          <ListItemIcon >
            <InboxIcon style={{color:'dodgerBlue'}}/>
          </ListItemIcon>
          <ListItemText inset primary={
                <Typography style={{ color: 'dodgerBlue', fontSize:'16px' }}>Pizza Maker</Typography>
                }/>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}


export default MainMenu;
