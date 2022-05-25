import React from 'react';

import CreateRoomButton from '../CreateRoomButton';
import GoButton from '../GoButton';
import JoinRoomPath from '../JoinRoomPath';

import './join-room-state.css';

export default function JoinRoomState(props) {
	return (
		<div className="join-room-state">
			<div className="find-room">
				<JoinRoomPath />
				
				<GoButton >
				</GoButton>                
			</div>
			<h3> Or </h3>
			<CreateRoomButton
				onClick = {props.onClick}
				>	
			</CreateRoomButton>
			
			
			
			
		</div>
	);

}
