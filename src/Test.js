import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, FieldArray } from 'redux-form'
import { addValues } from './TestActions/actions'
import { Link } from 'react-router-dom'
import TextInput from './form/TextInput'

class Test extends Component {

  formSubmit = (values) => {
      let newIngredient = values;
      newIngredient.id = Math.random()  
      this.props.addValues(values)
  }  

  render() {
    return (
      <div style={{marginTop:"100px"}}>
        <form onSubmit={this.props.handleSubmit(this.formSubmit)}>
        <Field component={TextInput} name='title' />
        <Field component={TextInput} name='author' />


        <FieldArray name="ingridients" component={renderMembers} />
        

        <button type='submit'>Submit</button>
        </form>
        
        <div>
          {this.props.test && this.props.test.map((item)=>{
              return (
                  <div key={item.id}>{item.title}
                  <Link to={'/testEdit/'+ item.id}><button >Edit</button></Link>
                  </div>
              )
          })}  
        </div>

      </div>
    )
  }
}

const actions = {
    addValues
}

const mapStateToProps = (state, ownProps) => {
    return {
        test : state.test,
    }
}

export default connect(mapStateToProps, actions)(reduxForm({ form : 'testFrom' })(Test))



const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

  const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>
          Add Ingredients
        </button>
        {submitFailed && error && <span>{error}</span>}
      </li>
      {fields.map((ingridients, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Member"
            onClick={() => fields.remove(index)}
          >Remove Ingredient</button>
          <h4>Ingredients {index + 1}</h4>
          <Field
            name={`${ingridients}.ingr`}
            type="text"
            component={renderField}
            label="ingredients"
          />
        </li>
      ))}
    </ul>
  )
  
