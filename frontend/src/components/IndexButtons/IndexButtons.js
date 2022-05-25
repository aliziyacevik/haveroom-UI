import React from 'react';

import CreateRoomButton from './CreateRoomButton';
import JoinRoomButton from './JoinRoomButton';

import './index-btns.css'

function IndexButtons (props) {
	console.log(props, 'from index btns');
	return (
		
		 <div className ="index-btns">
			 <CreateRoomButton 
				onClick={props.onClick}
			 	> 
			 </CreateRoomButton> 
			 
			<JoinRoomButton
				onClick={props.onClick}
				>
		        </JoinRoomButton> 
		</div>
		
	);
	
}

export default IndexButtons;

