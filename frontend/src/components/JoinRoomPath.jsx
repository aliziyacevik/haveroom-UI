import Reactf from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Form'

export default function JoinRoomPath(props) {
	return (
		<div className = "join-room-path">
			<Form>
  				<Form.Group 
					className="mb-3" 
					controlId="exampleForm.ControlInput1"
					>
    					<Form.Control 
						type="text"
						size="sm"
						placeholder="Room path.."
						>
					</Form.Control>
  				</Form.Group>
			</Form>	
		</div>

	);

}
