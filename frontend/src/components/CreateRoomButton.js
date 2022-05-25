import React from 'react';

import Button from 'react-bootstrap/Button';

function CreateRoomButton(props) {
        const HandleClick = () => {
		const createRoomState = 2; 
		props.onClick(createRoomState);
	}
	return (
        	<div className="create-btn index-btn">
        		<Button
				id="index-create-btn"
				onClick = {HandleClick} 
				variant="outline-success" 
				size="lg">					
				
				Create Room 
        		
			</Button>{' '}	
        	</div>
        );
}

export default CreateRoomButton;
