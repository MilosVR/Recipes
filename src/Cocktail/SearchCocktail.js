import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchFetchCocktail, searchCocktail, fetchCocktail } from '../actions/testActions'


 class SearchCocktail extends Component {

    state = {
        query : ''
      }
    
      componentDidMount(){
        this.props.fetchCocktail()
      }
      onChangeQuery = (e) => {
        this.setState({query:e.target.value})
      }
      onSubmuitQuery = e => {
        e.preventDefault()
        this.props.searchFetchCocktail(this.state.query)
      }

  render() {
    return (
      <div>
      <div style={{marginTop:'100px'}}>
        { this.props.cocktail.drinks && this.props.cocktail.drinks.map((item)=> {
          return (
            <div key={item.idDrink} style={{width:'200px', background:'dodgerBlue', color:' white'}}>
              {item.strDrink}
            </div>
          )
        })}

        <form onSubmit={this.onSubmuitQuery}>
        <input value={this.state.query} onChange={this.onChangeQuery}/>
        </form>
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
    }
  }
  
  export default connect(mapStateToProps, actions)(SearchCocktail)