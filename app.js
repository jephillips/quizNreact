var App = React.createClass({
    getInitialState: function () {
        return {
            questions: [
                {id: "q1", question: "1 + 1", answer: "2"},
                {id: "q2", question: "5 x 5", answer: "25"},
                {id: "q3", question: "20 / 4", answer: "5"}
            ]
        }
    },
    submit: function () {
        var score = 0;

        this.refs.q1.correct ? score++ : console.log("Question 1 Wrong");
        this.refs.q2.correct ? score++ : console.log("Question 2 Wrong");
        this.refs.q3.correct ? score++ : console.log("Question 3 Wrong");

        alert("You scored " + score);
    },
    render: function () {
        return (

            <div>
                <h1> A simple react quiz </h1>
                <hr />
                {this.state.questions.map(function (question) {

                    return (
                        <div>
                            <Question ref={question.id}
                                      question={question.question}
                                      answer={question.answer}/>
                        </div>
                    )
                })}
            <button onClick={this.submit}>{'Submit'}</button>
            </div>
                );

                }
                });

                var Question = React.createClass({
                propTypes: {
                correct: React.PropTypes.bool,
                question: React.PropTypes.string.isRequired,
                answer: React.PropTypes.string.isRequired,
                guess: React.PropTypes.string
            },
                getDefaultProps: function () {
                return {
                question: '',
                answer: '',
                guess: ''
            }
            },
                verify: function(e){
                this.guess = e.target.value;
                this.correct =  this.props.answer === this.guess;
            }
                ,
                render: function () {
                return (
                <div>
                <label>{this.props.question} </label>
                <br />
                <input ref="inp"
                type="text"
                question={this.props.question}
                answer={this.props.answer}
                onChange={this.verify}/>
                </div>
                );
            }
            });

                React.render(<App />, document.body);