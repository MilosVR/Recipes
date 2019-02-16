import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchAlcoholicCocktail, alcoholicCocktail } from '../actions/testActions'
import './AlcoholicCocktail.css'
import Zoom from 'react-reveal/Zoom';


class AlcoholicCocktail extends Component {

    state={
      on:false
    }

    componentDidMount(){
        this.props.fetchAlcoholicCocktail()
      }

      onSwitch = () => {
        this.setState({
          on:!this.state.on
        })
      }

  render() {
    return (
      
      <div className='mainAlcoholicDiv'
      style={{background:!this.state.on 
        ? "url(/assets/brick.jpg) center center fixed" 
        : 'url(/assets/blackBrick.jpg) center center fixed'
      }}>

      <div style={{width:"800px", paddingTop:'100px', paddingBottom:"20px", margin:'0 auto', height:"300px",
                  display:'flex', justifyContent:'center', alignItems:'center'}}>
        <span className='neonFont'>Alcoholic cocktails</span>
        <button style={{marginLeft:'50px', background:'url(/assets/earth.gif) center center', backgroundSize:'cover',
                      width:"80px", height:"80px", borderRadius:"50%", color:"white", border:'none', outline:'none'}} 
        onClick={this.onSwitch}>
        {this.state.on 
          ? <span style={{fontWeight:"bold", color:"cyan"}}>ON</span> 
          : <span style={{fontWeight:"bold", color:"red"}}>OFF</span>}
        </button>
      </div>

        {this.props.loading && <div className='Loading'><img src='/assets/loading.gif'/></div>}
        <div style={{width:"100%", display:"grid", gridTemplateColumns:'auto auto auto auto', 
                     color:'white', justifyContent:'center', position:"relative" }}>
         
          {this.props.alcohol.drinks&& this.props.alcohol.drinks.slice(0,100).map((item)=>{
            return (
            <div key={item.idDrink} className='alcoholWraper' >

            <div className='headerAlcoholCard'>
              <span className='headerAlcoholSpan'>{item.strDrink}</span>
              <img src='/assets/ribbon.png' className='headerAlcoholImage'/>
            </div>
              <span className='alcoholWraperSpan'></span><br/>

             <img alt='' src={item.strDrinkThumb} 
             style={{width:'220px', height:'180px', zIndex:"100"}}/>
             
             {this.state.on && 
             <img alt='' src='/assets/light.png' style={{width:'150%', height:"200%", position:"absolute",
             left:"50%",transform:'translate(-50%)', zIndex:"-10", top:'-80px'}} className='lights'/>}

             <img alt='' src='/assets/shelf5.png' 
             style={{width:"300px", height:"150px",position:"absolute", left:'0',bottom:'-90px',zIndex:"-10"}}/>
            </div>
            )
          })
          }
        </div>
      </div>

    )
  }
}
const actions = {
    fetchAlcoholicCocktail,
    alcoholicCocktail
  }
  
  const mapStateToProps = state => {
    return {
      cocktail : state.cocktail,
      alcohol : state.alcohol.alcohol,
      loading: state.alcohol.loading
    }
  }
  
  export default connect(mapStateToProps, actions)(AlcoholicCocktail)