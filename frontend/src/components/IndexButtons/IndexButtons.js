import React from 'react';

import CreateRoomButton from './CreateRoomButton';
import JoinRoomButton from './JoinRoomButton';

import './index-btns.css'

function IndexButtons (props) {
	console.log(props, 'from index btns');
	return (
		
		 <div className ="index-btns">
			 <CreateRoomButton 
				currentState={props.currentCreateState}
				onClick={props.createRoomHandler}
			 	> 
			 </CreateRoomButton> 
			 
			<JoinRoomButton
				currentState={props.currentJoinState}
				onClick={props.joinRoomHandler}
				>
		        </JoinRoomButton> 
		</div>
		
	);
	
}

export default IndexButtons;

