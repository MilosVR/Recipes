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
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom'


class SearchResult extends Component {

  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  render() {  
    return (
      <div style={{background:'lightGray', paddingTop:'70px',minHeight:'100vh' }}>
      <div style={{width:'1400px', position:'relative', margin:'0 auto', }}>
      <div>

       <h2 style={{textAlign:'center', width:'100%', height:'50px', lineHeight:'50px', color:'white', background:'rgb(62, 59, 53)', borderRadius:'3px'}}>
       Results for: <span style={{color:'orange'}}>{this.props.searchParams.toString()}</span></h2> 

      <Grid container spacing={24} >
      {this.props.searchResult && this.props.searchResult.map((item)=>{

        return (

        <Grid item xs={4} key={item.id}>    
        <Card >
        <CardHeader style={{background:'MediumSeaGreen	', color:'white'}}
          avatar={<img alt='' src='/assets/logo.png' style={{width:'50px', height:'40px'}}/>}
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

          <IconButton style={{color:"crimson", background:'rgb(255,255,255,0.8)'}}>
              <FavoriteIcon />
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
    )
  }
}

const mapStateToProps = (state, ownProps) => {

let searchParams = ownProps.match.params.title 

let searchResult = state.recipe.filter(item=>item.title.toLowerCase().includes(searchParams.toLowerCase()))

  return {
    recipe : state.recipe,
    searchResult,
    searchParams
  }
}

export default connect(mapStateToProps)(SearchResult)

