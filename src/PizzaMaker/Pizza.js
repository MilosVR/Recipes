import React, { Component } from 'react'
import Olive from './Olive';
import Pepperoni from './Pepperoni';
import Tomato from './Tomato'
import Ham from './Ham';
import Mushrooms from './Mushrooms'

import { connect } from 'react-redux'

class Pizza extends Component {
 
  render() {
    return (
        <div style={{position:'relative', width:'550px', height:'550px'}}>

        <img alt='' src='/assets/ketchupPizzaBase.png' style={{width:'530px', height:'530px', position:'absolute', top:'0px', left:'0px'}} />
        {this.props.pizza && this.props.pizza.map((item)=>{
          return (
                  <div key={item.id}>
                    {item.name==="Cheese" && <img alt='' src='/assets/cheese1.png' 
                    style={{width:'530px', height:'590px', position:'absolute', top:'-66px', left:'7px'}} />}
                    {item.name==='Olive' && <Olive pizza={item}/>}
                    {item.name==='Sausage' && <Pepperoni pizza={item}/>}
                    {item.name==='Tomato' && <Tomato pizza={item}/>}
                    {item.name==="Ham" && <Ham pizza={item}/>}
                    {item.name==="Mushrooms" && <Mushrooms />}
                  </div>
          )
        })}     
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pizza : state.pizza
  }
}

export default connect(mapStateToProps)(Pizza)



