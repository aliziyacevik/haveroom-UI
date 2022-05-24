import React from 'react';

import {
  Link,
} from "react-router-dom";

import CreateRoomButton from './CreateRoomButton';
import JoinRoomButton from './JoinRoomButton';

import './index-btns.css'

function IndexButtons (props) {
	return (
		
		 <div className ="index-btns">
			 <Link to="create-room"> <CreateRoomButton/> </Link>
			 <Link to="join-room:"> <JoinRoomButton/> </Link>
		</div>
		
	);
	
}

export default IndexButtons;

