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
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'


function MainMenu(props) {

  return (
    <div className='mainMenu'>
    <Paper>
        <ListItem style={{background:"rgb(79, 72, 72)", color:'white'}}>
          <ListItemIcon >
            <MenuIcon style={{color:'white'}}/>
          </ListItemIcon>
        Main menu</ListItem>
      <MenuList>

        <Link to='/recipe' style={{textDecoration:'none'}}>
        <MenuItem >
          <ListItemIcon >
            <SendIcon style={{color:'rgb(113, 102, 102)'}}/>
          </ListItemIcon>
          <ListItemText inset primary={<Typography style={{ color: 'rgb(113, 102, 102)', fontSize:'16px' }}>Create new recipe</Typography>}/>
        </MenuItem>
        </Link>

         <Link to='/favorite' style={{textDecoration:'none'}}>
        <MenuItem >
          <ListItemIcon >
            <DraftsIcon style={{color:'rgb(113, 102, 102)'}}/>
          </ListItemIcon>
          <ListItemText inset primary={<Typography style={{ color: 'rgb(113, 102, 102)', fontSize:'16px' }}>Favorite</Typography>}/>
        </MenuItem>
        </Link>

        <MenuItem >
          <ListItemIcon >
            <InboxIcon style={{color:'rgb(113, 102, 102)'}}/>
          </ListItemIcon>
          <ListItemText inset primary={
                <Typography style={{ color: 'rgb(113, 102, 102)', fontSize:'16px' }}>Pizza Maker</Typography>
                }/>
        </MenuItem>
      </MenuList>
      <ListItem style={{background:"rgb(79, 72, 72)", color:'white'}}>
          <ListItemIcon >
            <SearchIcon style={{color:'white'}}/>
          </ListItemIcon>
      Search by Category
      </ListItem>
      <MenuList>

        <Link to="/allRecipe" style={{textDecoration:'none'}}>
        <MenuItem >
          <ListItemIcon >
            <SendIcon style={{color:'rgb(113, 102, 102)'}}/>
          </ListItemIcon>
          <ListItemText inset primary={<Typography style={{ color: 'rgb(113, 102, 102)', fontSize:'16px' }}>All recipe</Typography>}/>
        </MenuItem>
        </Link>

        <Link to="/wineCard" style={{textDecoration:'none'}}>      
        <MenuItem >
          <ListItemIcon >
            <DraftsIcon style={{color:'rgb(113, 102, 102)'}}/>
          </ListItemIcon>
          <ListItemText inset primary={<Typography style={{ color: 'rgb(113, 102, 102)', fontSize:'16px' }}>Vine Section</Typography>}/>
        </MenuItem>
        </Link>          

        <Link to='/PizzaMaker' style={{textDecoration:'none'}}>        
        <MenuItem >
          <ListItemIcon >
            <InboxIcon style={{color:'rgb(113, 102, 102)'}}/>
          </ListItemIcon>
          <ListItemText inset primary={<Typography style={{ color: 'rgb(113, 102, 102)', fontSize:'16px' }}>Pizza Maker</Typography>}/>
        </MenuItem>
        </Link>  

      </MenuList>
    </Paper>
    </div>
  );
}


export default MainMenu;


