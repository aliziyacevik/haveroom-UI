import React from 'react';

import CreateRoomButton from '../CreateRoomButton';
import JoinRoomButton from '../JoinRoomButton';
import JoinRoomPath from '../JoinRoomPath';

import './join-room-state.css';

export default function JoinRoomState(props) {
	return (
		<div className="index-state-two">
			<div className="find-room">
				<JoinRoomPath />
				
				<JoinRoomButton
                        		onClick = {props.onClick}
                        		>
				</JoinRoomButton>                
			</div>
			<h3> Or </h3>
			<CreateRoomButton
				onClick = {props.onClick}
				>	
			</CreateRoomButton>
			
			
			
			
		</div>
	);

}
