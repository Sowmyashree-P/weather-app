import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDegree } from '../../actions';

export default function RadioButtonsGroup() {

  const value = useSelector(state => state.degree);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeDegree(event.target.value));
  };

  return (
      <RadioGroup style={{justifyContent: 'space-around'}} row aria-label="degree" name="degree" value={value} onChange={handleChange}>
        <FormControlLabel value="celcius" control={<Radio style={{color: '#3F51B5'}} />} label="Celcius" />
        <FormControlLabel value="fahrenheit" control={<Radio style={{color: '#3F51B5'}} />} label="Fahrenheit" />
      </RadioGroup>
  );
}
