import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/Form'

function RoomInput(props) {
	return (
  	<InputGroup className="mb-3">
    	  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    	  <FormControl
      		placeholder="Enter the room path here."
      		aria-label="username"
      		aria-describedby="basic-addon1"
    	  />
  	</InputGroup>
	);

}

export default RoomInput;
