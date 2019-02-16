import React, { Component } from "react";
import { logOut, googleSignOut, googleSignIn } from './actions/action'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import Login from './Auth/Login'
import { connect } from 'react-redux'
import {toastr} from 'react-redux-toastr'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import './Navbar.css'

class Navbar extends Component {

  state = {
    open: false,
    user:this.props.user,
    showUser:true,
    showMenu:false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  logOut = () => {
    toastr.error(` ${this.props.user.username } is logout`, 'Come back again')
    this.setState({
      showUser:true,
    })
  }
  logIn = () => {
    this.setState({
      showUser:false
    })
  }
  menuShow=()=>{
    this.setState({
      showMenu:!this.state.showMenu
    })
  }

  componentDidMount(){
    window.gapi.load('client:auth2', ()=> {
        window.gapi.client.init({
            clientId : '605341701315-rh55vao1edi8diki3m6403u990oodkq3.apps.googleusercontent.com',
            scope : 'email'
        }).then(()=> {
            this.auth=window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get())
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
}

onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
       this.props.googleSignIn(this.auth.currentUser.Ab.w3.ig) 
    } else {
        this.props.googleSignOut(this.auth.signOut())
    }
}
onSignIn = () => {
    this.auth.signIn()
    toastr.success(`Wellcome ${this.props.userGoogle}`, 'You are succesfuly logged in')
    
}
onSignOut = () => {
    this.auth.signOut()
    toastr.error(` ${this.props.userGoogle } is logout`, 'Come back again')
}

  render() { 
    return (
      <div>
        <AppBar style={{background:'rgb(62, 59, 53)'}} className='MainAppBar'>
          <Toolbar className='navbarToolbar'>
              
              <ListItem className='menuIconToShow' style={{display:'none'}}>
                <ListItemIcon style={{cursor:'pointer'}} onClick={this.menuShow}>
                  <img src='/assets/habmbugerMenu.png' style={{width:'30px', height:'30px'}} alt=''/>
                </ListItemIcon>
              Menu</ListItem>

              <MenuItem className='menuHome'>
              <Link to="/" style={{textDecoration:'none', color:'white'}} >
              <span style={{fontFamily: 'Lobster, cursive', fontSize:'18px'}} className='HomeDiv'>Home</span>
              </Link>
              </MenuItem>

              <MenuItem className='menuCreateRecipe'>
              <Link to="/recipe" style={{textDecoration:'none', color:'white'}} >
              <span style={{fontFamily: 'Lobster, cursive', fontSize:'16px'}} className='HomeDiv'>Create recipe</span>
              </Link>
              </MenuItem>

              {!this.state.showUser &&
              <MenuItem >
              <Link to="/cocktail" style={{textDecoration:'none', color:'white'}}>
              <span style={{fontFamily: 'Lobster, cursive', fontSize:'16px'}} className='HomeDiv'>Cocktail</span>
              </Link>
              </MenuItem>}
              
              <MenuItem className='menuPizzaMaker'>
              <Link to="/PizzaMaker" style={{textDecoration:'none', color:'darkOrange'}} >
              <span style={{fontFamily: 'Lobster, cursive', fontSize:'25px'}}>Pizza maker</span>
              </Link>
              </MenuItem>
             <div style={{ position: "absolute", right: "10px" }}>

                
             {this.state.showUser && !this.props.isGoogleSignIn
            ?   <Button className='loginButton'
                color="inherit" onClick={this.handleClickOpen}
                style={{ marginLeft: "-12px", marginRight: "20px",fontFamily: 'righteous, cursive', }}>Login </Button>

            :   <div>
                  <IconButton style={{ color: "white" }}>
                    <AccountCircle />
                    {!this.props.isGoogleSignIn ? this.props.user.username : this.props.userGoogle}
                  </IconButton>
                  <Button className='logoutButton'
                    color="inherit" onClick={this.props.isGoogleSignIn ? this.onSignOut : this.logOut}
                    style={{ marginLeft: "-12px", marginRight: "20px",fontFamily: 'righteous, cursive', }}
                  >
                    Logout
                  </Button>
                </div>
              }

      
            </div>

              <Login className='modalLogin'
              loged={this.logIn}
              open={this.state.open} 
              handleClickOpen={this.handleClickOpen} 
              handleClose={this.handleClose}/>
              
          </Toolbar>

          {this.state.showMenu &&  

          <Toolbar style={{display:'block', borderTop:"2px solid coral"}} className='showMenuToolbar'>

              <MenuItem >
              <Link to="/"  style={{listStyleType:'none'}}>
              <span style={{color:'white'}}>Home</span>
              </Link>
              </MenuItem>

              <MenuItem >
              <Link to="/recipe"  style={{listStyleType:'none'}}>
              <span style={{color:'white'}}>Create recipe</span>
              </Link>
              </MenuItem>

              {!this.state.showUser &&
              <MenuItem >
              <Link to="/WineCard" style={{listStyleType:'none'}}>
              <span style={{color:'white'}}>Wine card</span>
              </Link>
              </MenuItem>}
              
              <MenuItem >
              <Link to="/PizzaMaker"  style={{listStyleType:'none'}}>
              <span style={{color:'white'}}>Pizza maker</span>
              </Link>
              </MenuItem>

         
          </Toolbar>}

        </AppBar>
      </div>
    );
  }
}

const actions = {
  logOut,
  googleSignOut,
  googleSignIn
}

const mapStateToProps = state => {
  return {
    user : state.user,
    isGoogleSignIn: state.googleAuth.isGoogleSignIn,
    userGoogle: state.googleAuth.userGoogle,
  }
}

export default  connect(mapStateToProps, actions)(Navbar)