import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { editValues } from './TestActions/actions'
import TextInput from './form/TextInput'

class TestEdit extends Component {
    
    onFormSubmit = (values) => {
      this.props.editValues(values)
      this.props.history.push('/test')  
    }
  
    render() {
      console.log('edit',this.props.test);
      

    return (
      <div style={{marginTop:"100px"}}>
        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
            <Field name='title' component={TextInput} />
            <FieldArray name='ingridients' component={renderMembers} />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const actions = {
    editValues
}

const mapStateToProps = (state, ownProps) => {

    let id = ownProps.match.params.id

    return{
        initialValues: state.test.find(item => item.id == id),
        test: state.test.find(item => item.id == id)
    }
}

export default connect(mapStateToProps, actions)(reduxForm({form:'editForm'})(TestEdit))


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
  
