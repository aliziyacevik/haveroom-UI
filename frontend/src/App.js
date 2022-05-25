import React, {useState,} from 'react';

import IndexButtons from './components/IndexButtons/IndexButtons';
import RoomInput from './components/JoinRoom/RoomInput';

import 'bootstrap/dist/css/bootstrap.min.css';

function App (props) {
	const [joinRoom, setJoinRoom] = useState(false);
	const [createRoom, setCreateRoom] = useState(false);
	console.log(joinRoom, createRoom);
	
	if (joinRoom) {
		return (
			<div>
				<RoomInput />
			</div>
		);
	}
	if (createRoom){
		return (
			<div>
				CreateRoom
			</div>
		);
	}
	if(!joinRoom && !createRoom) {
		return (
			<div>
			  	< IndexButtons
					currentJoinState={joinRoom}
					currentCreateState={createRoom}
					joinRoomHandler = {setJoinRoom} 
				        createRoomHandler = {setCreateRoom}
					>
				</IndexButtons>
			</div>
		);
	}



}

export default App;
