import React, { Component } from 'react'

export default class test extends Component {

    state = {
        users : [
            {id:0, name:'John', value:134},
            {id:1, name:'Mark', value:158}, 
            {id:2, name:"Lucy", value:556}
        ],
        stats:0,
        disabled:[false, false, false]
    }

    addValueToStats = (addValue, buttonIndex) => {
        let addToStats = this.state.stats
            this.setState({
            stats: addToStats += addValue,
            disabled:this.state.disabled.map((item, index)=>{
                console.log('add :',item,index);
                return index === buttonIndex ? true : item
            })
        })    
    }
    removeValueToStats = (removeValue, buttonIndex) => {
        let removeToStats = this.state.stats
            this.setState({
            stats: removeToStats -= removeValue,
            disabled:this.state.disabled.map((item, index)=>{
                console.log('remove :',item,index);
                return index === buttonIndex ? false : item
            })
        })     
    }

  render() {
    return (
      <div style={{marginTop:"100px", display:'flex', justifyContent:"space-around", alignItems:"center"}}>
      <div>
        {this.state.users.map((item, index) => {
            return (
            <div key={item.id} style={{width:'200px', background:'royalBlue', color:'white', height:'50px', margin:'10px',
                                      display:"flex", justifyContent:"space-between", alignItems:'center', padding:"10px"}}>
            {item.name}

            <div>

            <button style={{marginRight:"5px"}} 
            onClick={()=>this.addValueToStats(item.value, index)} 
            disabled={this.state.disabled[index]}>+</button>

            <button onClick={()=>this.removeValueToStats(item.value, index)}
            disabled={!this.state.disabled[index]}>-</button>

            </div>
            </div>
            )
        })}
        </div>

        <div style={{display:'flex', justifyContent:"center", alignItems:'center', width:'100px', 
                    height:"50px", background:"mediumSpringGreen"}}>
            Stats : {this.state.stats}
        </div>

      </div>
    )
  }
}
