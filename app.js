var App = React.createClass({
    getInitialState: function () {
        return {
            q1: '',
            q2: ''
        }
    },
    submit: function () {
        var score = 0;

        this.refs.q1.correct ? score++ : console.log("Question 1 Wrong");
        this.refs.q2.correct ? score++ : console.log("Question 2 Wrong");

        alert("You scored " + score);
    },
    render: function () {
        return (
            <div>
                <h1> A simple react quiz </h1>
                <hr />
                <Question ref="q1"
                          question="1+1"
                          answer="2"/>
                <Question ref="q2"
                          question="5 x 5"
                          answer="25"/>
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