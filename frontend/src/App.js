import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import IndexButtons from './components/IndexButtons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App (props) {
	return (
	  <BrowserRouter>
   		<Routes>
     			<Route path="/" element={<IndexButtons />} />
    		</Routes>
  	</BrowserRouter>
	

	);
}

export default App;
