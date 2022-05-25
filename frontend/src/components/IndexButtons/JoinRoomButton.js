import React from 'react';

import Button from 'react-bootstrap/Button';

function JoinRoomButton (props) {
	const HandleClick = () => {
		const joinRoomState = 1;
		props.onClick(joinRoomState);
	}
	return (
		<div className="index-btn">
			<Button
				onClick={HandleClick}
				variant="outline-primary" 
				size="lg">					

				Join Room 
			
			</Button>{' '}	
		</div>
	);
}



export default JoinRoomButton;
