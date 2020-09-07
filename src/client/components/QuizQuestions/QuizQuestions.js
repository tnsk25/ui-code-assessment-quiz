import React, {Component} from 'react'
import './QuizQuestions.css'
import { Container, Row, Col} from 'react-bootstrap'
import QuizBankAPI from './QuizBankAPI'
import Questions from '../Questions/Questions';
import Summary from '../Summary/Summary';
const questionsResponse = new QuizBankAPI()

class QuizQuestions extends Component {
   
 //max count can be configured, initially set to 5   
    state = {
        questions: [],
        max_count: 5,
        qnum: 0,
        correct: 0 
    };

    componentDidMount() {
        this.getQuestionBank()
    }

    getQuestionBank = () => {
        questionsResponse.getQuestions()
            .then((response) => {

                let result = response.data.results;
                let random_questions = result.sort(() => Math.random() - Math.random()).slice(0, this.state.max_count);

                this.setState({
                    questions: random_questions
                });
                // console.log(this.state);
            })
            .catch((error) => {
                alert("There has been an error. Please try again after sometime");
                // console.log(error)
            })
    }

    submitHandler = (event) =>
    {
        event.preventDefault();

        const answer = this.state.questions[this.state.qnum].type==="text" 
        ? event.target.answer.value.replaceAll(" ","").toLowerCase() 
        : event.target.answer.value;

        const correct_answer = this.state.questions[this.state.qnum].type==="text"
        ? this.state.questions[this.state.qnum].correct_answer.replaceAll(" ","").toLowerCase()
        : this.state.questions[this.state.qnum].correct_answer;
        

        let current_correct_state = this.state.correct;
        let current_qnum = this.state.qnum;

        document.getElementById("question-form").reset();

        if(answer===correct_answer)
        {
            this.setState({
                correct: current_correct_state + 1
            })
        }    
        
            this.setState({
                qnum: current_qnum + 1
            })

    }

    restart = () => {
        window.location.reload(false);
    }

    render() {
        return (
            <div className="quiz-questions">
                <Container>
                    <Row>       

                       {
                            this.state.max_count > this.state.qnum
                            ?
                            <Col>
                                {this.state.questions.length ?
                                    <Questions 
                                    qlist={this.state.questions[this.state.qnum]}
                                    current = {this.state.qnum+1}
                                    total = {this.state.max_count}
                                    submit={this.submitHandler} 
                                    />
                                    :
                                    null
                                }
                            </Col>
                            :
                            <Col>
                                <Summary
                                correct = {this.state.correct}
                                total = {this.state.max_count}
                                restart = {this.restart}
                                />
                            </Col>
                        }
                    </Row>
                </Container>
            </div>
        )
    }

}

export default QuizQuestions