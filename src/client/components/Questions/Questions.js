import React from 'react'
import './Questions.css'
import { Form, Button } from 'react-bootstrap'

const Questions = (props) => {

	const entities = {
	  '&#039;': "'",
	  '&quot;': '"',
	  '&amp;' : '&'
	};

    return (
        <div className="questions">
        	<p><b>Question {props.current} of {props.total}</b></p>
        	{
            	<Form id="question-form" onSubmit={props.submit}>
                	<Form.Group>
                    	
                    	<Form.Label className="question-class">{props.qlist.question.replace(/&#?\w+;/g, match => entities[match])}</Form.Label>
                    	{
                    		props.qlist.type==="text" 
                    		?
                    		<Form.Control 
	                        type="text"
	                        name="answer"
	                        placeholder="Enter your answer"
	                        autoComplete="off"
	                        required>
	                    	</Form.Control>
                    		:
                    		[...props.qlist.incorrect_answers,props.qlist.correct_answer]
                    		.sort( () => Math.random() - 0.5 )
                    		.map( (option,index) => {

                    			return (
                    				<Form.Check
									type="radio"
									label={option.replace(/&#?\w+;/g, match => entities[match])}
									name="answer"
									key = {index}
									value={option}
									required
									/> 
                    			)	

                    		})
                    		
                    	}

                	</Form.Group>
                	<Button variant="primary" type="submit">
                	{
                		props.current === props.total ? "Submit" : "Next"
                	}
                	</Button>
            </Form> 
        }
        </div>
    )
};

export default Questions;