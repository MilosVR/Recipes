import React, { Component } from 'react'
import FastFoodSlider from './fastFoodSlider'
import './RecipeFastFood.css'

class RecipFastFood extends Component {
  render() {
    return (
         <div style={{ height: 'calc(100vh - 60px)'}} className='mainFastFoodDiv'>
         <div className='fastFoodFirstSection' >

        <div className='fastFoodFont'>
        <img  alt='' src='/assets/fastFoodFont.png' style={{width:'500px', height:'220px', marginLeft:'40px',}}/>
        </div>

        <img className='fastFoodPicture' alt='' src='/assets/fastFoodPng.png' style={{width:'500px', height:'220px'}}/>
   

            <div className='fastFoodPromo'
            style={{marginRight:'80px', display:'flex', justifyContent:"space-around", alignItems:'center', }}>
            <div>
              <img alt ='' src='/assets/burger.png' style={{width:'100px', height:'100px', marginRight:'50px'}}/>
            </div>
            <div style={{color:"white" , width:'100px',height:'100px',
                         display:'flex', justifyContent:'center', alignItems:'center', position:'relative' }}>
            <img alt='' src='/assets/loaderCategory.gif' style={{width:'150px', height:"150px", position:'absolute'}}/>             
            <span style={{fontSize:'35px', fontWeight:'bold'}}>20%
            <br/><span style={{fontSize:'20px', display:'flex', justifyContent:'center',
                        alignItems:'center', color:"red", fontWeight:'bold'}}>OFF</span>
           </span>
            </div>

            </div>

            </div>
            <div className='FastFoodSeconSection' style={{ position:'relative', margin:'0 auto',  marginTop:'50px'}}>
           
            <div style={{width:'400px', height:'400px', position:'relative', 
                        boxSizing:'border-box'}} className='fastFoodDiamond'>
            
               <span  style={{color:"white",textAlign:'center', width:'50%'}}>
                Eating a healthy diet doesn’t have to be overly complicated. While some specific foods or nutrients have been shown to have a beneficial effect on mood, it’s your overall dietary pattern that is most important. 
              </span>

            </div>

            <div style={{width:'960px'}}>
            <div className='showFastFood' style={{display:'none'}}>
                Eating a healthy diet doesn’t have to be overly complicated. While some specific foods or nutrients have been shown to have a beneficial effect on mood, it’s your overall dietary pattern that is most important. 
            </div> 
            <div style={{width:'100%', display:'flex', justifyContent:"center", position:'relative'}}>
            <img src='/assets/metalHolle.jpg' style={{width:'80%', height:'70px'}} alt=''/>
            <span style={{position:'absolute', left:'50%', top:'40%', transform:'translate(-50%, -50%)', 
                          color:'mediumPurple', fontWeight:'bold', fontSize:'20px', textShadow: '2px 2px 4px #000000'}}>
            Editor choice
            </span>
            </div>
            
            <FastFoodSlider/>
            </div>
            </div>   
      </div>   
    )
  }
}

export default RecipFastFood