import React, {Component} from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {incorrectAnswer: false};
    }
    render () {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((option, index) => (
                            <QuizQuestionButton key={index} button_text={option} clickHandler={this.handleClick.bind(this)}/>
                        ))}
                    </ul>
                </section>
                {this.state.incorrectAnswer ? <p className={'error'}>Sorry, thats not right</p> : null}
            </main>
        )
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            this.setState({incorrectAnswer: false});
        } else {
            this.setState({incorrectAnswer: true});
        }
    }
}
export default QuizQuestion;