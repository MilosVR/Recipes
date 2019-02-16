import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'
import './RecipeCard.css'

class RecipeCard extends React.Component {
  
  render() {
    return (
      <Card style={{width:"220px", margin:'20px auto',position:'relative'}} className='RecipeCard'>      
        <Link to={'/details/' + this.props.recipe.id}>
        <CardMedia style={{textAlign:"center", width:'100%', height:'150px', objectFit:'cover'}}
          image={this.props.recipe.image}>
          
          <IconButton aria-label="Add to favorites" 
          style={{color:'white', position:'absolute', top:'5px', left:'10px', zIndex:"5", background:'rgb(0,0,0, 0.5)'}}>
            <FavoriteIcon style={{color:'white'}}/>
          </IconButton>
          <IconButton aria-label="Share" 
          style={{color:'white', position:'absolute', top:'5px', right:'10px', zIndex:"5",background:'rgb(0,0,0, 0.5)'}}>
            <ShareIcon style={{color:'white'}}/>
          </IconButton>
          </CardMedia>  
          </Link>
         
          <div style={{
            textAlign:"center", 
            background:"url(/assets/metal.jpg)", 
            height:"35px", 
            lineHeight:'35px',
            fontWeight:'bold'}}>
          {this.props.recipe.title}
          </div>
          <div style={{
            overflow: 'hidden',
            width:'90%',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            color:"black", 
            textAlign:'justify',
            fontSize:'14px',
            margin:'0 auto'
          }}>
          {this.props.recipe.description}
          </div> 
          <div style={{
            textAlign:"center",  
            height:"40px", 
            lineHeight:'40px',
            fontSize:'14px',
            background:"url(/assets/metal.jpg)",
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center'
            }}>
            <div>
              <img src="/assets/logo.png" alt="" style={{width:'50px', height:"25px"}}/>
            </div>
            <Chip label={this.props.recipe.author} clickable color="primary" 
            avatar={<Avatar>by</Avatar>}/>
            
          </div>     
      </Card>
    );
  }
}

export default RecipeCard;