import React from 'react'
import './Summary.css'
import { Button } from 'react-bootstrap'


const Summary = (props) => {

	const wrong = props.total - props.correct;
	const percent = Math.round((props.correct/props.total) * 100);

	return (
		<div className="Summary">
			<h4>Summary</h4>
			<p>Correct: <b>{props.correct}</b></p>
			<p>Wrong: <b>{wrong}</b></p>
			<p>Questions answered: <b>{props.total}</b></p>
			<p>Final Score: <b>{percent}%</b></p>
			<Button variant="primary" onClick={props.restart}>Restart Quiz</Button>  
		</div>

	);

}










export default Summary;