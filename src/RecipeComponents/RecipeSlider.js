import React from "react";
import Slider from "react-slick";
import RecipeCard from "./RecipeCard";
import { connect } from 'react-redux'

class RecipeSlider extends React.Component {

  render() {
    let settings = {
        dots:true,
        infinite: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        cssEase: 'ease-out',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false
            }
          }]
      };
  

    return (
    
        <Slider {...settings} >
  
        {this.props.recipe && this.props.recipe.map((item)=>{
          return <RecipeCard key={item.id} recipe={item}/>
        })
        }    
        </Slider>
     
    );
  }
}

const mapStateToProps = state => {
  return {
    recipe : state.recipe
  }
}

export default connect(mapStateToProps)(RecipeSlider)

