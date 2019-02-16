import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase'; 
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import MenuSection from './MenuSection'
import RecipeFastFood from './RecipeFastFood'
import RecipeByFruits from './RecipeByFruits'
import Chocolate from './Chocolate'
import { Element } from 'react-scroll'
import IconButton from '@material-ui/core/IconButton';
import './Home.css'


class Home extends Component {

  state = {
    term : ''
  }

  handleChangeInput = e => {
    this.setState({
      term : e.target.value
    })
  }
  formSubmitInput = e => {
    e.preventDefault();
    this.props.history.push('/search/' + (this.state.term));
  }
  render() {
    return (
      <div>
        <div className='mainHomeDiv' style={{background:'lightGray', 
                    overflow: 'hidden',height: `${window.innerHeight}px`}}>
        <Toolbar className='toolbar' 
          style={{
          background:'white',
          position:'flex',
          justifyContent:'space-between',
          marginTop:'64px',
          alignItems:"center"
        }}>
          <div className='logo'>
          <img src='/assets/logo.png' alt='' style={{width:'100px', height:"40px"}}/>
          </div>

          

          <form onSubmit={this.formSubmitInput}>

          <div className='inputSearch'
          style={{color:'black', position:'relative', display:'flex', alignItems:'center'}}>

          <span style={{fontSize:'18px'}}><b>Search</b></span>
          <InputBase style={{
            width:'500px', 
            height:'35px',
            background:'rgb( 0, 0, 0, 0.6)',
            borderRadius:'3px',
            paddingLeft:"5px",
            marginLeft:'10px',
            color:'white',
          }} 
          placeholder='Enter a recipe title'
          onChange={this.handleChangeInput}
          value={this.state.term}
          />
          <IconButton style={{position:'absolute', color:'white', right:"0px"}}>
          <SearchIcon/>
          </IconButton>
          </div>
          </form>
          
          
          <img src='/assets/logo.png' alt='' className='logoToShow'
          style={{width:'100px', height:"40px", display:'none'}}/>
          

          <div className='socialIcons'>
          <img alt='' src='/assets/face.png' style={{width:'40px', height:'40px', paddingLeft:'10px',paddingRight:"10px",cursor:'pointer'}}/>
          <img alt='' src='/assets/skype.png' style={{width:'40px', height:'40px', paddingLeft:'10px',paddingRight:"10px",cursor:'pointer'}}/>
          <img alt='' src='/assets/you.png' style={{width:'40px', height:'40px', paddingLeft:'10px',paddingRight:"10px",cursor:'pointer'}}/> 
          <img alt='' src='/assets/twit.png' style={{width:'40px', height:'40px', paddingLeft:'10px',cursor:'pointer'}}/>
          </div>

          </Toolbar>
          <MenuSection/>
          </div>
          <Element name='fastFood'>
          <RecipeFastFood/>
          </Element>
          <Element name="fruits">
          <RecipeByFruits/>
          </Element>
          <Element name="choco">
          <Chocolate />
          </Element>
      </div>
    )
  }
}
export default Home