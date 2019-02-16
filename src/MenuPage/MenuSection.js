import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react'
import MainMenu from './MainMenu'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'
import {Animated} from "react-animated-css";
import './MenuPage.css'


class MenuSection extends Component {

  state = {
    showSide:false
  }

  showSideModal = () => {
    this.setState({
      showSide:!this.state.showSide
    })
  }
  scrollToElement = element => {
    scroller.scrollTo(element, { duration : 1500, delay:100, smooth:true, offset:-64
    })
  }

  render() {
    return (
        <div  className='mainMenuDiv' 
        style={{width:'100%'}}>
        
        <div className='MenuHeader' style={{
          width:'1400px', margin:'0 auto',height:"300px",
            background:'url(/assets/headerMenuImage.jpg) center center', 
            marginTop:'10px', 
            justifyContent: 'center',
            display: 'flex',
            alignItems:'center', 
            borderRadius:"3px", 
            textShadow: '2px 2px 4px #000000'}}>
        <Animated animationIn="bounceInLeft" animationOut="fadeOutLeft" isVisible={true} animationInDelay={500}>
        <div className='mmm' style={{
            textAlign:'center', 
            color:'white', 
            background:'rgb(0,0,0,0.4)', 
            padding:'10px',
            borderRadius:"3px",
            boxShadow: 'inset 0 0 10px red'}}>
            <h2>Checkout out new restaurant <br/>with delicious meal and healty ingridients</h2>
            </div>
        </Animated>
        </div>

        <div  style={{display:'flex', width:'1400px', margin:'0 auto'}} className='menuSectionCards'>

        <img className="sideDrawerCategory" alt='' src='/assets/sideMenuArrow1.gif' onClick={this.showSideModal}
        style={{position:"absolute", width:'50px', height:"50px", left:this.state.showSide ? '250px' : '0px', 
               cursor:'pointer',top:"53%", transform:'translate(0, -50%)', display:'none', zIndex:"150"}}/> 

        {this.state.showSide &&  
        <div>
        <div className="sideDrawerCategory" 
        style={{position:"absolute", width:'500px', height:"470px", left:'0', background:'rgb(0,0,0,0.7)',zIndex:"100",
                top:"53%", transform:'translate(-50%, -50%)' }}>
        </div>

        <span className='categoryShowSide1'
        style={{position:'absolute', top:'10px', left:'30px', background:'crimson', padding:'10px', width:"170px",
                      color:"white", zIndex:'150', fontWeight:'bold', textAlign:'center'}}>Category</span>
        <span className='categoryShowSide2'
        style={{position:'absolute', top:'100px', left:'30px', color:"crimson", zIndex:'150', 
                      fontWeight:'bold', width:'170px', textAlign:'center', padding:'10px', border:"1px solid crimson", 
                      background:'white', borderRadius:'3px', cursor:"pointer"}}>Search by category</span>
        <span className='categoryShowSide3'
        style={{position:'absolute', top:'160px', left:'30px', color:"crimson", zIndex:'150', 
                      fontWeight:'bold', width:'170px', textAlign:'center', padding:'10px', border:"1px solid crimson", 
                      background:'white', borderRadius:'3px', cursor:"pointer"}}>Search fruits recipe</span>
        <span className='categoryShowSide4'
        style={{position:'absolute', top:'220px', left:'30px', color:"crimson", zIndex:'150', 
                      fontWeight:'bold', width:'170px', textAlign:'center', padding:'10px', border:"1px solid crimson", 
                      background:'white', borderRadius:'3px', cursor:"pointer"}}>Search meat recipe</span>
        </div>
        } 

        <div  style={{marginLeft:"15px", marginTop:"10px", width:'450px'}} className='mainMenuGrid'>
          <MainMenu/>
        </div>

        <div  className='allFourCards'>
         <div  style={{marginLeft:"15px", display:"flex"}} className='FourCategoryCards'>

          <div  style={{margin:'10px'}} className='fruitCard'>
          <Animated animationIn="rubberBand" animationOut="bounce" isVisible={true} animationInDelay={1000}>
          
          <div className='box'>
          <div className='image'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='content'>
              <div style={{color:"white", cursor:"pointer", padding:"10px", borderRadius:'3px'}} 
              onClick={()=>this.scrollToElement('fruits')}>
              <div style={{background:'rgb(0,0,0,0.6)', width:"280px", padding:"10px"}}>
              <span style={{fontSize:'25px', fontWeight:'bold', color:"SpringGreen"}}>Fruits section</span>
              <p style={{fontWeight:"bold"}}>Click here to navigate to the<br/> Fruits recipe</p>
              <img alt='' src='/assets/arrow.gif' style={{width:'40px', height:'40px'}}/>
              </div>
            </div>
          </div>
          </div>  

          
          </Animated>          
          </div>

         <div style={{margin:"10px" }}>
            <div className='box1' >
              <div className='image1' >
                <span></span >
                <span></span >
                <span></span >
                <span></span >
              </div>

              <div className='content1'>
              <div style={{color:"white", cursor:"pointer", padding:"10px", borderRadius:'3px'}} 
              onClick={()=>this.scrollToElement('fastFood')}>
              <div style={{background:'rgb(0,0,0,0.6)', width:"250px", padding:"10px"}}>
              <span style={{fontSize:'20px', fontWeight:'bold', color:"MediumSlateBlue"}}>Fruits section</span>
              <p style={{fontWeight:"bold"}}>Click here to navigate to the <br/>Fruits recipe</p>
              <img alt='' src='/assets/arrow.gif' style={{width:'30px', height:'30px'}}/>
              </div>
              </div>
              </div>

              </div>  
         </div>  

       </div>
      
      <div  style={{marginLeft:"15px", display:"flex", marginTop:'10px'}} className='pizzaMakerGrid'>
      <div  style={{margin:"10px" }}>
            <div className='box2'>
              <div className='image2' >
                <span></span >
                <span></span >
                <span></span >
                <span></span >
              </div>
              <div className='content2'>
              <div style={{color:"white", cursor:"pointer", padding:"10px", borderRadius:'3px'}} 
              onClick={()=>this.scrollToElement('choco')}>
              <div style={{background:'rgb(0,0,0,0.6)', width:"230px", height:"120px",padding:"10px"}}>
              <span style={{fontSize:'20px', fontWeight:'bold', color:"chocolate"}}>Chocolate</span>
              <p style={{fontWeight:"bold"}}>Click here to navigate to the Chocolate</p>
              <img alt='' src='/assets/arrow.gif' style={{width:'30px', height:'30px'}}/>
              </div>
              </div>
              </div>
              </div>  
         </div>  

        <div style={{color:'white', margin:"10px",}} >

        <div className='pizzaMakerMain'>

         <div className='pizzaMakerMainToHover'>
         
            <img src='/assets/pizza2.JPEG' alt=''/>                    
    

          <div className='pizzaMakerMainHover'>

          <div style={{position:'absolute', top:'20px', left:'20px',right:'20px', padding:'5px'}}>
          <span style={{color:'crimson', fontWeight:'bold', fontSize:'25px'}}>Pizza maker</span><hr/>
          <span style={{color:'lightgray', fontWeight:'bold',paddingTop:"10px"}}>Find out more about Pizza maker, you can custom your own pizza, and also you can order our special Pizza. Enjoy !</span>
          </div>

          <Link to='/PizzaMaker'>
          <img  alt='' src='/assets/readMore.gif' 
          style={{width:"150px", height:'60px', position:'absolute',bottom:'0px', right:'10px'}}/>
          </Link>
          </div>

         </div>
         </div>  

        </div>  
      </div>

      </div>    

      </div>
      
      </div>
    )
  }
}
export default MenuSection
    