import React, { Component } from 'react';
import {Select,MenuItem} from '@material-ui/core';
import { connect } from 'react-redux'
import SearchByVegetable from '../RecipeComponents/SearchByVegetable';
import SearchbyMeat from '../RecipeComponents/SearchbyMeat'
import AllRecipe from '../RecipeComponents/AllRecipe';
import SearchByCake from '../RecipeComponents/SearchByCake';
import OutlinedInput from '@material-ui/core/OutlinedInput';

class AllRecipeByCategory extends Component {

  constructor(props) {
    super(props);
    this.state= { 
      DivisionState: 'All',
      DivisionData: [
      {
        id: 1,
        item: 'Vegetable',
      },
      {
        id: 2,
        item: 'Cake'
      },
      {
        id: 3,
        item: 'Meat'
      },
      {
        id: 4,
        item: 'All'
      }
      ]
    };
    this.handleChangeDivision = this.handleChangeDivision.bind(this);
  }


  renderDivisionOptions() {
    return this.state.DivisionData.map((dt, i) => {
      return ( <MenuItem key={i} value={dt.item}className='selectField' > {dt.item} </MenuItem> );
    });
  }

  handleChangeDivision(event){
    this.setState({ DivisionState: event.target.value });
  }

  render(){

    return (
      <div style={{marginTop:'70px'}}>
      <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%'}}>
      <div>Logo</div>
      <span>This.is go Search Bar</span>
      <div>
        <span>Sort by :  </span>
      <Select style={{ width:'100px', height:'50px', margin:'5px'}} className='selectCategory'
        value={this.state.DivisionState} 
        onChange={this.handleChangeDivision}
        input={
          <OutlinedInput className='outlinedSelecet'/>}
      >
        {this.renderDivisionOptions()}
      </Select>
      </div>
      </div>

      <div>
       {this.state.DivisionState==='Vegetable' && <SearchByVegetable/>} 
      </div>

      <div>
       {this.state.DivisionState==='Cake' && <SearchByCake/>} 
      </div>

      <div>
       {this.state.DivisionState==='Meat' && <SearchbyMeat/>} 
      </div>

      <div>
       {this.state.DivisionState==='All' && <AllRecipe/>} 
      </div>

      </div>
    )}
}

const mapStateToProps = state => {
  return {
    allRecipe : state.recipe,
    vegetable : state.recipe.filter( item=> item.category === 'vegetable'),
    cake : state.recipe.filter( item=> item.category === 'cake'),
    meat : state.recipe.filter( item=> item.category === 'meat'),
  }
}


export default connect(mapStateToProps)(AllRecipeByCategory);
