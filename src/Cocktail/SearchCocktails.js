import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchFetchCocktail, searchCocktail, fetchCocktail } from '../actions/testActions'
import './SearchCocktails.css'
import Button from '@material-ui/core/Button';


 class SearchCocktail extends Component {

    state = {
        query : ''
      }
    
      componentDidMount(){
        this.props.searchFetchCocktail()
        this.props.fetchCocktail()
      }
      onChangeQuery = (e) => {
        this.setState({query:e.target.value})
      }
      onSubmuitQuery = e => {
        e.preventDefault()
        this.props.searchFetchCocktail(this.state.query)
        this.setState({
            query:''
        })
      }

  render() {
    return (
      <div style={{marginTop:'60px'}} className='mainFormDiv'>

      <div className='formDiv'></div>     

      <div className='mainRandomCocktail'>
      <div className='leftRandomCocktail'>dsds</div>
      <div className='randomCocktail'/>
      <div className='rightRandomCocktail'>dsds</div>
      </div>

      <div style={{ width:"100%", height:"200px", margin:"0 auto", marginTop:"150px",
                    display:"flex", justifyContent:"center", alignItems:"center", }}>
        <div className='cocktailText'>Srcoll down ande start searching</div>            
        <img src='/assets/cocktailBaner.jpg' style={{width:"80%", height:"200px"}}/>
      </div>

      <div className='searchCocktails'><div>
     
      <form onSubmit={this.onSubmuitQuery} className='formStyle'>
        <div style={{position:'relative', overflow:'hidden', borderRadius:"5px"}}>
        <input value={this.state.query} onChange={this.onChangeQuery} className='inputFormStyle'/>
        <img alt='' src='/assets/search.gif' className='formImageInput'/> 
        </div>
        <button className='inputFormButton'>Search</button>
      </form>  
      </div>
      </div>  

      <div style={{display:'grid', gridTemplateColumns:'auto auto auto ', justifyContent:"center", gridGap:"50px"}}>
        { this.props.cocktail.drinks && this.props.cocktail.drinks.map((item)=> {
          return (
            <div key={item.idDrink} className='cocktailItem'>
            
            <div className='innerCocktailItem'>
            <img className='innerCocktailImage' src={item.strDrinkThumb}/>
            <div className='innerCocktailCategory'>{item.strCategory}</div>
            </div>
            
            <div className='titleAndDescription'>
            <div className='innerCocktailTitle'>{item.strDrink}</div>
            <div className='innerCocktailDescription'>
            <span className='cocktailInstructionsSpan'>Instructions:</span> 
            <br/>
            <p style={{padding:"5px"}}>{item.strInstructions}</p>
            </div>
            </div>  
            </div>
          )
        })}
        </div>  
      </div>
    )
  }
}

const actions = {
    searchFetchCocktail,
    searchCocktail,
    fetchCocktail
  }
  
  const mapStateToProps = state => {
    return {
      cocktail : state.cocktail,
      randomCocktail : state.randomCocktail 
    }
  }
  
  export default connect(mapStateToProps, actions)(SearchCocktail)