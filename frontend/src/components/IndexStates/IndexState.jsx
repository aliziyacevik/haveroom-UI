import React from 'react';

import CreateRoomButton from '../CreateRoomButton';
import JoinRoomButton from '../JoinRoomButton';

import './index-state.css';

export default function IndexState (props) {
	return (
		<div className="index-state-one">
			<CreateRoomButton 
				onClick = {props.onClick}
				>
			</CreateRoomButton>
			
			<JoinRoomButton
				onClick = {props.onClick}
				>
			</JoinRoomButton>
		</div>

	);
}


