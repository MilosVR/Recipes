import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

const renderCheckbox = ({ input, label }) => (
    <Checkbox style={{color:"silver"}}
      label={label}
      checked={input.value ? true : false}
      onClick={input.onChange}
    />
  )
  export default renderCheckbox