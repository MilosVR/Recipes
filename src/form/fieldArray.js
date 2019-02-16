import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import TextInput from './TextInput'

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((ingredient, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Ingredient"
          onClick={() => fields.remove(index)}
        >Remove Ingredient</button>
        <h4>Ingredients {index + 1}</h4>
        <Field
          name={`${ingredient}.ingredients`}
          type="text"
          component={TextInput}
          label="First Name"
        />     
      </li>
    ))}
  </ul>
)

const fieldArray = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
      <FieldArray name="ingredients" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </div>
  )
}

export default reduxForm({form: 'fieldArrays', })(fieldArray)