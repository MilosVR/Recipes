import React, { Component } from 'react'
import SideLeft from './SideLeft';
import SideRight from './SideRight';
import Pizza from './Pizza';
import { connect } from 'react-redux'
import Switch from '@material-ui/core/Switch';
import {Animated} from "react-animated-css";


class PizzaMaker extends Component {
  state={
    specialPizaOff:false,
  }
  showPizza=()=>{
    this.setState({
      specialPizaOff:!this.state.specialPizaOff
    })
  }
  handleChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };
  render() {
    return (
      <div>
      
      <div style={{background:'url(/assets/wood.jpg) center center ', width:'100%', height:'100vh'}}>  
      
      <div style={{margin:'0 auto', width:'1400px', display:'flex', justifyContent:'center', position:'relative'}}>
      <div style={{width:'1400px', height:'50px', 
                   position:'relative', background:'white', 
                   marginTop:"100px", color:'black',
                   display:'flex', justifyContent:'space-around',
                   alignItems:"center"}}>

      <div><img alt='' src='/assets/pizzaMakerLogo.png' style={{width:'100px', height:'40px', marginLeft:'2px'}}/></div>

      <div><span style={{fontSize:'24px'}}>Wellcome to <span style={{color:'crimson'}}><b>Pizza Maker,</b></span> start exploring.</span></div>

      <div>
      Switch to <span style={{color:'orange'}}><b>Custom Pizza mode</b></span>  
      <Switch
          checked={this.state.specialPizaOff}
          onChange={this.handleChange('specialPizaOff')}
          value="specialPizaOff"
          color="primary"
        />
      </div>


      </div>
      </div>  

      <div style={{
        margin:'0 auto', 
        width:'1400px', 
        display:'flex', 
        justifyContent:"space-around", 
        }}>
        <div style={{marginTop:'50px', width:'1400px', display:'flex', justifyContent:'space-between', }}>

      <SideLeft />

        
      
       {this.state.specialPizaOff 
       ?  <Pizza/> 
       : this.props.pizza !== null 
       ? <img src={this.props.pizza.img} alt='' style={{width:'550px', height:'550px'}}/>
       : <div  className='PizzaMakerHome'> 

       <Animated animationIn="bounceInLeft" animationOut="zoomOutDown" isVisible={true} animationInDelay={500}>
       <span style={{color:'crimson', position:'absolute', top:"20px", right:'100px', fontSize:'20px'}}>
       Pizza for only <span style={{fontSize:'30px', color:'green'}}>6.75</span>
       <span style={{color:'green'}}>$</span></span>

       <span style={{color:'crimson',position:'absolute',top:'200px',left:'20px',fontSize:'30px'}}> 
       <b><span style={{fontSize:'35px', color:'green'}}>Checkout</span> our 
       <br/><span style={{fontSize:'40px', color:'orange'}}>Pizza </span><span style={{color:'crimson'}}> with</span> 
       <br/> extra low
       <br/> prices!</b>
       </span>
       </Animated>
      <img src='/assets/capricciosa.png' alt='' style={{width:'215px', height:'209px', position:'absolute', top:'-13px',left:'-9px'}}/>  

       <div className='pizzaMakerHomeInside'>

       <Animated animationIn="bounceInRight" animationOut="zoomOutDown" isVisible={true} animationInDelay={500}>
       <span style={{color:'white', position:'absolute', top:'200px', right:'20px', fontSize:'30px'}}>
       <span style={{right:'0px', position:'absolute'}}>Switch to</span>
       <br/> <span style={{fontSize:'35px', color:'purple'}}>Custom-mode</span>
       <br/><span style={{right:'0px', position:'absolute', width:'262px'}}>and make your own</span> 
       <br/><span style={{fontSize:'45px', color:'royalBlue', right:'200px', position:"absolute"}}>
       <b>Pizza</b>
       </span>
       </span>
       </Animated>
       <img alt='' src='/assets/ketchupPizzaBase.png' 
       style={{position:'absolute' , bottom:'0', width:'250px', height:'150px',right:'-45px', zIndex:'50' }}/>
       
       <div style={{position:'absolute', left:'120px', 
                    bottom:'25px', width:'250px', 
                    paddingRight:'50px'}}>
        
        <div style={{ fontSize:'16px', color:'coral', 
        background:'white', textAlign:'center', 
        padding:'10px', paddingRight:'100px',
        paddingLeft:'30px', marginBottom:'30px',
        position:'absolute', left:'-40px', top:'-8px', }}>

       <b>Manually add ingredients</b></div><br/>
         <img alt='' src='/assets/ham1.png' style={{width:'35px', height:'35px', padding:'10px', marginTop:'10px'}}/>
         <img alt='' src='/assets/sausage1.png' style={{width:'35px', height:'35px', padding:'10px', marginTop:'10px'}}/>
         <img alt='' src='/assets/olives1.png' style={{width:'35px', height:'35px', padding:'10px', marginTop:'10px'}}/>
         <img alt='' src='/assets/tomato.png' style={{width:'35px', height:'35px', padding:'10px', marginTop:'10px'}}/>

       </div>
         
       </div>
       
       </div>
      } 

    <SideRight specialPizaOff={this.state.specialPizaOff}/>
        
      </div>
      </div>
      </div>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
      pizza : state.specialPizza
  }
}

export default connect(mapStateToProps)(PizzaMaker)

