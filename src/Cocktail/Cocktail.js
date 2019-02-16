import React, { Component } from 'react'
import SearchCocktail from './SearchCocktail';
import AlcoholicCocktail from './AlcoholicCocktail';
import './Cocktail.css'
import Swiper from 'react-id-swiper';
import ParticleEffectButton from 'react-particle-effect-button'
import { fetchCocktail } from '../actions/testActions'
import { connect } from 'react-redux'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom'

 class Cocktail extends Component {

  state = {
    hidden: false,
    showAlcohol:false,
    cocktail:false,
    showNonAlcohol:false,
    champagne:false,
  }

showAlcohol=()=>{
  this.setState({
    showAlcohol:!this.state.showAlcohol,
    cocktail:false,
    showNonAlcohol:false,
    champagne:false
  })
}
showCocktail=()=>{
  this.setState({
    cocktail:!this.state.cocktail,
    showAlcohol:false,
    showNonAlcohol:false,
    champagne:false
  })
}
nonAlcohol=()=>{
  this.setState({
    showNonAlcohol:!this.state.showNonAlcohol,
    showAlcohol:false,
    cocktail:false,
    champagne:false
  })
}
champagne=()=>{
  this.setState({
    champagne:!this.state.champagne,
    showAlcohol:false,
    cocktail:false,
    showNonAlcohol:false
  })
}
  render() {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    };

    return (
      <div>
        <video src='/assets/video.mp4' autoPlay loop muted 
              style={{width:"100%", height:'100vh', position:'fixed', top:'0', left:"0", objectFit:"cover"}}/>

      <div className='mainCocktailDiv' style={{ width:"100%", height:'100vh', 
                    display:'flex', justifyContent:'space-between', alignItems:'center', overflow:'hidden'}}>
      </div>
      
      <div className='cocktailMenuDescr'>
      <div style={{position:"absolute", left:'160px', top:'100px', width:'460px', height:'400px', background:"rgb(0,0,0,0.7)",
      display:"flex", justifyContent:'center', alignItems:'center', color:"white", textAlign:'justify', padding:'10px', borderRadius:'3px'}}>
      <span> <span style={{fontWeight:"bold", color:'coral', fontSize:'24px'}}>BE PREPARED IN ADVANCE</span><br/>
        As you may know, there is no cure for the hangover, which can be attributed to divine brilliance and our individual metabolisms. You can however take some advice:
        <br/>-Chaser, PreToxx, and RU 21 and other "hangover pills" are designed to restore the chemical balance in your body, as well as preparing your system for an onslaught of excess.
        <br/>-Another weapon is trusty Vitamin B tablets, which provide liver-to-gut missiles in the war to save your body. While some argue this is a placebo, it can't hurt.
        <br/>-Try giving your body some time to recover before passing out, as this staying awake time will allow faster recovery, and less suffering in the morning.
        <br/>-Eating food is also an effective way of slowing down alcohol by up to 50%, but only when you are drinking at the same time. Once it's down the hatch, there is little to stop the resulting effects of alcohol.</span>
      </div>
      <div style={{width:"80px", background:'rgb(255,255,255)', height:'100%'}}></div>
      <div style={{width:"80px", background:'rgb(255,255,255,.9)', height:'100%'}}></div>
      <div style={{width:"80px", background:'rgb(255,255,255,.8)', height:'100%'}}></div>
      <div style={{width:"80px", background:'rgb(255,255,255,.7)', height:'100%'}}></div>
      <div style={{width:"80px", background:'rgb(255,255,255,.6)', height:'100%'}}></div>
      <div style={{width:"80px", background:'rgb(255,255,255,.5)', height:'100%'}}></div>
      <div style={{width:"80px", background:'rgb(255,255,255,.4)', height:'100%'}}></div>
      <div style={{width:"80px", background:'rgb(255,255,255,.3)', height:'100%'}}></div>
      <div style={{width:"80px", background:'rgb(255,255,255,.2)', height:'100%'}}></div>
      <div style={{width:"80px", background:'rgb(255,255,255,.1)', height:'100%'}}></div>
      </div>


      <div className='cocktailIcons'>

        <div className='cocktailIcon' onClick={this.showCocktail} 
        style={{background:this.state.cocktail?'rgb(255, 191, 0, .7)':'rgb(255,255,255, .5)'}}>
        <img src='/assets/cocktail.png' style={{width:"40px", height:'40px'}}/>
        </div>

        <div className='alcoholIcon' onClick={this.showAlcohol}
        style={{background:this.state.showAlcohol?'rgb(255, 191, 0, .7)':'rgb(255,255,255, .5)'}}>
        <img src='/assets/alcohol.png' style={{width:"40px", height:'40px'}}/>
        </div>

        <div className='nonAlcoholIcon' onClick={this.nonAlcohol}
        style={{background:this.state.showNonAlcohol?'rgb(255, 191, 0, .7)':'rgb(255,255,255, .5)'}}>
        <img src='/assets/nonAlcohol.png' style={{width:"40px", height:'40px'}}/>
        </div>

        <div className='champagneIcon' onClick={this.champagne}
        style={{background:this.state.champagne?'rgb(255, 191, 0, .7)':'rgb(255,255,255, .5)'}}>
        <img src='/assets/champagne.png' style={{width:"40px", height:'40px'}}/>
        </div>

      </div>

      
      <Zoom >
      <div className='cocktailToHover' style={{display:this.state.cocktail ? 'block': 'none'}}>
      <div style={{position:"absolute", width:"30%", left:"0px", color:"white",zIndex:'100', top:"0px", 
                  background:"rgb(0,0,0,.5)", padding:'20px', height:"100%", paddingLeft:"200px"}}>
          <h2>Cocktail</h2>
          Recommendations for alcohol intake are usually based on the number of standard drinks per day.
          The problem is, most people have no idea what qualifies as a “standard drink.” To worsen matters, the official definition of a standard drink differs between countries.
          In the US, one standard drink is any drink that contains 0.6 fluid ounces (14 grams) of pure alcohol (ethanol).
          This image shows the standard drink amount for some popular alcoholic drinks
      </div>
      </div>
      </Zoom>

      <Zoom>
      <div className='alcoholToHover' style={{display:this.state.showAlcohol ? 'block': 'none'}}>
      <div style={{position:"absolute", width:"30%", left:"0px", color:"white",zIndex:'100', top:"0px", 
                  background:"rgb(0,0,0,.5)", padding:'20px', height:"100%", paddingLeft:"200px"}}>
          <h2>Alcohol</h2>
          Recommendations for alcohol intake are usually based on the number of standard drinks per day.
          The problem is, most people have no idea what qualifies as a “standard drink.” To worsen matters, the official definition of a standard drink differs between countries.
          In the US, one standard drink is any drink that contains 0.6 fluid ounces (14 grams) of pure alcohol (ethanol).
          This image shows the standard drink amount for some popular alcoholic drinks
      </div>
      </div>
      </Zoom>

      <Zoom>
      <div className='nonAlcoholToHover' style={{display:this.state.showNonAlcohol ? 'block': 'none'}}>
      <div style={{position:"absolute", width:"30%", left:"0px", color:"white",zIndex:'100', top:"0px", 
                  background:"rgb(0,0,0,.5)", padding:'20px', height:"100%", paddingLeft:"200px"}}>
          <h2>Non-Alcohol</h2>
          Recommendations for alcohol intake are usually based on the number of standard drinks per day.
          The problem is, most people have no idea what qualifies as a “standard drink.” To worsen matters, the official definition of a standard drink differs between countries.
          In the US, one standard drink is any drink that contains 0.6 fluid ounces (14 grams) of pure alcohol (ethanol).
          This image shows the standard drink amount for some popular alcoholic drinks
      </div>
      </div>
      </Zoom>

      <Zoom>
      <div className='champagneToHover' style={{display:this.state.champagne ? 'block': 'none'}}>
      <div style={{position:"absolute", width:"30%", left:"0px", color:"white",zIndex:'100', top:"0px",
                  background:"rgb(0,0,0,.5)", padding:'20px', height:"100%", paddingLeft:"200px", textAlign:'justify'}}>
          <h2>Champagne</h2>
          Recommendations for alcohol intake are usually based on the number of standard drinks per day.
          The problem is, most people have no idea what qualifies as a “standard drink.” To worsen matters, the official definition of a standard drink differs between countries.
          In the US, one standard drink is any drink that contains 0.6 fluid ounces (14 grams) of pure alcohol (ethanol).
          This image shows the standard drink amount for some popular alcoholic drinks
      </div>
      </div>
      </Zoom>



      <div style={{position:'absolute', bottom:"0", width:'100%', height:"300px", background:"rgb(0,0,0,0.5)",
                  display:'flex', justifyContent:"center", alignItems:"center"}}>
      <Swiper {...params}>

          <div className='searchCocktail' >
          <span className='searchCocktailSpan'><b style={{fontSize:"30px"}}>Search</b></span>
          <Link to='/searchCocktails'>
          <img className='searchCocktailImage' src='/assets/searchIcon.jpg' alt=''/> 
          </Link>
          </div>

          <div className='searchCocktail'>
          <span className='searchCocktailSpan'><b style={{fontSize:"30px"}}>Cocktail</b></span>
          <img className='searchCocktailImage' src='/assets/cocktail.jpg' alt=''/> 
          </div>

          <div className='searchCocktail'>
          <span className='searchCocktailSpan'><b style={{fontSize:"30px"}}>Alcohol</b></span>
          <Link to='/alcoholCocktails'>
          <img className='searchCocktailImage' src='/assets/alcoholic.jpg' alt=''/>
          </Link> 
          </div>

          <div className='searchCocktail'>
          <span className='searchCocktailSpan'><b style={{fontSize:"30px"}}>Non-Alcohol</b></span>
          <img className='searchCocktailImage' src='/assets/nonAlcohol.jpg' alt=''/> 
          </div>

          <div className='searchCocktail'>
          <span className='searchCocktailSpan'><b style={{fontSize:"30px"}}>Champagne</b></span>
          <img className='searchCocktailImage' src='/assets/champagne.jpg' alt=''/> 
          </div>
        
      </Swiper>
      </div>
      </div>
    )
  }
}

const actions ={
  fetchCocktail
}
const mapStateToProps = state => {
  return {
    cocktail:state.cocktail
  }
}

export default connect(mapStateToProps, actions)(Cocktail)