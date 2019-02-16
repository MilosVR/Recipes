import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { addToFavorite, deleteToFavorite } from '../actions/action'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Favorite extends Component {

  state={
    showFavorite:false
  }

  showFavoriteHandler = () => {
    
    this.setState({
      showFavorite:!this.state.showFavorite
    })
   
  }
  render() { 
    return (
      <div>
        <div style={{background:'lightGray', paddingTop:'100px', height:'100vh'}}>
      <div style={{width:'1400px', position:'relative', margin:'0 auto', }}> 
      
      <div style={{textAlign:'center', height:'50px', width:'100%', 
                   background:"rgb(62, 59, 53)", color:'white',borderRadius:'5px', 
                   lineHeight:"50px", marginBottom:'30px', position:'relative'}}>
                   <span style={{fontSize:'20px', fontWeight:'bold'}}>All recipes</span>
                   <Link to='/favorite'>
                   <span style={{fontSize:'20px', position:'absolute', width:'150px',
                                 right:'0px', color:'coral', background:"white", 
                                 paddingLeft:'20px', paddingRight:'20px',
                                 borderRadius:'0 3px 3px 0px',fontWeight:'bold'}}>
                                 Favorite ({this.props.favorite.length})</span>
                   </Link>
                   </div>
      <div>

      <Grid container spacing={24} >
      {this.props.favorite.length<1 

      ? <Paper style={{margin:'0px auto', width:'1400px', display:'flex', justifyContent:'center',position:'relative', 
                       alignItems:'center', background:'white', height:"600px", overflow:'hidden' }}>
        <img alt='' src='/assets/recipeBackground.jpg' style={{width:'100%', position:"absolute", top:'0', left:'0', height:'600px'}}/>               
        <Typography style={{fontSize:'40px', zIndex:'100', color:'coral', fontWeight:'bold'}}>
        Favorite list is empty, please add your favorite recipe.</Typography>

        </Paper> 
      :  this.props.favorite.map((item)=>{

        return (
          
        <Grid item xs={4} key={item.id}>    
        <Card >
        <CardHeader style={{background:'MediumSeaGreen	', color:'white'}}
          avatar={<img alt='' src='/assets/logo.png' style={{width:'50px', height:'30px'}}/>}
          title={<Typography variant="h6" style={{color:'white'}}>{item.title}</Typography>}
          subheader={
          <Typography component="p" style={{color:'white'}}>Time for prepare: {item.cook} °C </Typography>}
        />
        <CardMedia image={item.image} style={{width:'100%', height:'200px'}}/>
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>

        <CardActions  disableActionSpacing 
        style={{position:'relative', background:'coral', display:'flex', justifyContent:'space-between'}}>

         
          <IconButton style={{color:"crimson", background:'rgb(255,255,255,0.8)'}} onClick={this.showFavoriteHandler}>
            <Button  onClick={()=> this.props.deleteToFavorite(item)}>Remove</Button>
            </IconButton> 
       

          <Chip color="secondary" label={item.category} style={{fontWeight:'bold', padding:'5px', width:'150px'}}/>

          <Link to={'/edit/' + item.id}> 
          <IconButton style={{ color:'dodgerBlue', background:'rgb(255,255,255,0.8)'}}>
              <EditIcon />
          </IconButton>
          </Link>    

        </CardActions>

      </Card>
      </Grid>
      )
    })
  }

    </Grid>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

const actions ={
  addToFavorite,
  deleteToFavorite
}

const mapStateToProps = state => {

  return {
    recipe : state.recipe,
    favorite : state.favorite
  }
}

export default connect(mapStateToProps, actions)(Favorite)