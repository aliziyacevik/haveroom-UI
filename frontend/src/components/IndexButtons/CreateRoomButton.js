import React from 'react';

import Button from 'react-bootstrap/Button';

function CreateRoomButton(props) {
        const HandleClick = () => {
		const createRoomState = 2; 
		props.onClick(createRoomState);
	}
	return (
        	<div className="index-btn">
        		<Button 
				onClick = {HandleClick} 
				variant="outline-success" 
				size="lg">					
				
				Create Room 
        		
			</Button>{' '}	
        	</div>
        );
}

export default CreateRoomButton;
