import React from 'react';
import { Form } from 'react-bootstrap';

const FormControlValidator = ({ validator, ...inputProps }) => (
  <div className="form-control-validator">
    <Form.Control {...inputProps} />
    {
      Object.keys(validator).map((field, index) => {
        if (field === inputProps.name && validator[field] && validator[field].length > 0) {
          return (
            <Form.Text key={index} className='text-danger'>{validator[field]}</Form.Text>
          );
        } else {
          return '';
        }
      })  
    }
  </div>
)

export default FormControlValidator;
