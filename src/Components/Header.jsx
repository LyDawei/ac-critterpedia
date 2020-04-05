import React from 'react';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';



export default function Header(props) {
  return (
    <div>
      <RadioGroup value={props.type} onChange={(e) => props.setType(e.target.value)}>
        <FormControlLabel value="insect" control={<Radio />} label="Insect" />
        <FormControlLabel value="fish" control={<Radio />} label="Fish" />
      </RadioGroup>
      <RadioGroup value={props.hemisphere} onChange={(e) => props.setHemisphere(e.target.value)}>
        <FormControlLabel value="north" control={<Radio />} label="North" />
        <FormControlLabel value="south" control={<Radio />} label="South" />
      </RadioGroup>
      <div>
        {props.time}
      </div>
    </div >
  );
}
