import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import Ingredients from '../RecipeComponents/Ingredients'
import Directions from '../RecipeComponents/Directions'
import List from '@material-ui/core/List';
import Calories from './Calories';
class RecipeDetails extends Component {
  render() { 
    console.log(this.props.recipe.ingridients)
    return (
    
       <div style={{width:'1440px', margin:'0 auto', background:'lightGray', borderRadius:'3px'}}>
        <div style={{
          marginTop:'100px', 
          display:'flex', 
          justifyContent:'space-between', 
          alignItems:'center', 
          padding:'20px',
          boxSizing:'border-box',
          position:'relative'}} >

          <div style={{position:'absolute', top:'20px', left:'20px',display:'flex',alignItems:'center', }}>
          <img src='/assets/logo.png' alt='' 
          style={{ width:'100px', height:'50px',zIndex:'100'}}/>
          <span style={{marginLeft:'100px'}}>Follow us on: </span>
          <img alt='' src='/assets/facebook.png' style={{width:'30px', height:'30px', marginLeft:'20px'}}/>
          <img alt='' src='/assets/twitter.png' style={{width:'30px', height:'30px', marginLeft:'20px'}}/>
          <img alt='' src='/assets/instagram.png' style={{width:'30px', height:'30px', marginLeft:'20px'}}/>
          <img alt='' src='/assets/youtube.png' style={{width:'60px', height:'30px', marginLeft:'20px'}}/>
          </div>

        <img src='/assets/vector.png' alt='' style={{
          objectFit:'cover', 
          width:'600px', 
          height:'400px', 
          position:'absolute'}}/>
        

        <div style={{width:'600px', position:'relative'}}>
        <h1 style={{
          background:'white', 
          textAlign:'center', 
          borderRadius:'3px', 
          color:'orange', 
          height:'50px',
          lineHeight:'50px',
          textShadow:'2px 2px 4px #000000'}}>

          {this.props.recipe.title}</h1>

        <p>Ratings</p>
        <p>Recipe by {this.props.recipe.author}</p>
        <p>Description : {this.props.recipe.description}</p>
          
        </div>

        <img alt='' src={this.props.recipe.image} 
        style={{width:'700px', height:'400px', objectFit:'cover', borderRadius:'0 3px 3px 0px'}}/>

      </div>

      <div style={{
          display:'flex', 
          justifyContent:'space-between', 
          alignItems:'center', 
          boxSizing:'border-box',
          position:'relative',
          background:'orange'}} >
          
          <div style={{position:'relative'}}>
          <Button variant='contained' style={{margin:'5px', background:'white', color:'orange', fontWeight:'bold'}}>
            Add to favorite</Button>
          <Button variant='contained' style={{margin:'5px', background:'white', color:'orange', fontWeight:'bold'}}>
            Add new recipe</Button>
          <Button variant='contained' style={{margin:'5px', background:'white', color:'orange', fontWeight:'bold'}}>
            Share</Button>
          <Button variant='contained' style={{margin:'5px', background:'white', color:'orange', fontWeight:'bold'}}>
            Post to Instagram</Button>
          </div>

          <div style={{
            display:'flex', 
            justifyContent:'center', 
            fontFamily: 'Righteous, cursive', 
            fontSize:'24px', 
            alignItems:'center',
            width:'300px',
            background: ' linear-gradient(135deg, orange 15%,white 20%, white 100%)'
          }}>
            
            <img alt='' src='/assets/cookingPhoto.png' style={{width:'50px', height:'50px'}}/>
            I made it !
          </div>
        </div>

        <div style={{width:'1400px', margin:'0 auto', marginBottom:'50px'}}>
        
        <div style={{
          display:'flex', 
          justifyContent:'space-around', 
          marginTop:'50px',
          color:'white',
          fontSize:'20px'
         }}>

        <div style={{background:'white', width:'670px',color:'black', textAlign:'center', position:'relative'}}>
        <h2 style={{textAlign:'center', color:'orange'}}>Ingredients</h2>
         <img alt='' src='/assets/ingredients.png' style={{width:"670px"}}/>
        <List style={{margin:'0 auto', width:'90%'}}>
          {this.props.recipe.ingridients && this.props.recipe.ingridients.map((ingredient)=>{
            return <Ingredients key={ingredient.id} ingredient={ ingredient }/>
          })}
        </List>
        <div style={{ width:'600px', margin:'0 auto', marginTop:'50px'}}>
        <h2 style={{color:'orange'}}>Nutrition Facts</h2>
          <Calories/>
        </div>
        </div>

        <div style={{background:'white', width:'670px',color:'black', textAlign:'center'}}>
        <h2 style={{textAlign:'center', color:'orange'}}>Directions</h2>
        <img alt='' src='/assets/kitchen.png' style={{height:"320px"}}/>

        <List style={{margin:'0 auto', width:'90%'}}>
          {this.props.recipe.directions.map((direction)=>{
            return <Directions key={direction.id} direction={direction}/>
          })}
        </List>
        </div>
        </div>

        </div>

          <div style={{
            width:'1400px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center', 
            textAlign:'center', 
            background:'DimGrey', 
            color:'white', 
            margin:'0 auto',
            padding:'20px'}}>

            <div style={{ display:'flex', justifyContent:'center'}}>

            <div style={{width:'275px', textAlign:'justify', padding:'20px'}}>
           <h2 style={{textAlign:'center'}}>Skills & know how</h2>
           <p>As well as helping you decide what to cook we can also help you to cook it. From tips on cookery techniques to facts and information about health and nutrition, we’ve a wealth of foodie know how for you to explore.</p>
            </div>

             <div style={{width:'275px', textAlign:'justify', padding:'20px'}}>
           <h2 style={{textAlign:'center'}}>About BBC Good Food</h2>
           <p>We are the UK’s number one food brand. Whether you’re looking for healthy recipes and guides, family projects and meal plans, the latest gadget reviews, foodie travel inspiration or just the perfect recipe for dinner tonight, we’re here to help.</p>
            </div>

            <div style={{width:'275px', textAlign:'justify', padding:'20px'}}>
           <h2 style={{textAlign:'center'}}>Our recipes</h2>
           <p>All our recipes are tested thoroughly by us to make sure they’re suitable for your kitchen at home. We know many of you are concerned about healthy eating, so we send them to a qualified nutritionist for thorough analysis too.</p>
            </div>

            <div style={{width:'275px', textAlign:'justify', padding:'20px'}}>
           <h2 style={{textAlign:'center'}}>Tell us what you think…</h2>
           <p>Love the new look or think we’ve missed the mark? We want to hear your thoughts – good and bad – to make sure we make the new website as useful as possible.</p>
            </div>



            </div>

          </div>
          <div style={{
            width:'1400px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center', 
            textAlign:'center', 
            background:'#3e3b35', 
            color:'white', 
            margin:'0 auto',
            padding:'20px'}}>
            
            <img alt='' src='/assets/logo.png' style={{width:'120px', height:'60px', padding:'20px'}}/>
            <div style={{padding:'20px'}}>This website is published by Immediate Media Company Limited under licence from BBC Studios.<br/>
                 © Immediate Media Company Limited, 2018</div>

            <div style={{listStyle:'none', textAlign:'left', padding:'20px'}}>
              <li>Privacy policy</li>
              <li>Complaints</li>
              <li>Contact us</li>
              <li>Advertise with us</li>
            </div>

            <div style={{listStyle:'none',textAlign:'left', padding:'20px'}}>
              <li>Site terms</li>
              <li>Cookies policy</li>
              <li>Cookie Settings</li>
            </div>
            </div>

            
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
  
    return {
        recipe:state.recipe.find(recipe => recipe.id == id)
    }
}

export default connect(mapStateToProps)(RecipeDetails)