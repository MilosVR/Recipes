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
import Tilt from 'react-tilt'
 

class SearchByVegetable extends Component {

  AddOrRemoveFromFavorites = (favorites, item) => {
    return favorites.find(favoriteItem => favoriteItem.id === item.id);
  };

  render() { 
    return (
      <div>
      <div style={{background:'lightGray', paddingTop:'100px', }}>
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
      {this.props.vegetable && this.props.vegetable.map((item)=> {

        return (
        
        <Grid item xs={4} key={item.id}>    
        <Tilt className="Tilt" options={{ max : 25 }}  >  
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

         {!this.AddOrRemoveFromFavorites(this.props.favorite, item)

            ? <IconButton style={{color:"crimson", background:'rgb(255,255,255,0.8)'}} onClick={this.showFavoriteHandler}>
                <FavoriteBorderIcon onClick={()=>this.props.addToFavorite(item)}/> 
                </IconButton>

            : <IconButton style={{color:"crimson", background:'rgb(255,255,255,0.8)'}} onClick={this.showFavoriteHandler}>
                <FavoriteIcon onClick={()=> this.props.deleteToFavorite(item)}/>
                </IconButton> 
          } 

          <Chip color="secondary" label={item.category} style={{fontWeight:'bold', padding:'5px', width:'150px'}}/>

          <Link to={'/edit/' + item.id}> 
          <IconButton style={{ color:'dodgerBlue', background:'rgb(255,255,255,0.8)'}}>
              <EditIcon />
          </IconButton>
          </Link>    

        </CardActions>

      </Card>
      </Tilt>
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
    favorite : state.favorite,
    vegetable : state.recipe.filter( item=> item.category === 'vegetable'),
  }
}

export default connect(mapStateToProps, actions)(SearchByVegetable)