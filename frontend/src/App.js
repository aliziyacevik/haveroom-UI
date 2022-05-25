import React, {useState,} from 'react';

import IndexButtons from './components/IndexButtons/IndexButtons';
import INDEX_STATES from './components/IndexStates/IndexStates';

import RoomInput from './components/JoinRoom/RoomInput';

import 'bootstrap/dist/css/bootstrap.min.css';

/*
const STATES = {
	IndexState:		0,
	JoinBtnClickedState:	1,
	CreateBtnClickedState:	2,
};
*/

function App (props) {
	const [indexState, setIndexState] = useState(0);
	const IndexElementToRender= INDEX_STATES[indexState]; 
	
	return (
		<div>
			< IndexElementToRender 
				onClick={setIndexState}
			/>
		</div>
	);

}

export default App;
