var App = React.createClass({
    getInitialState: function () {
        return {
            q1: '',
            q2: ''
        }
    },
    update: function () {
        this.setState({
            q1: this.refs.q1.refs.inp.getDOMNode().value,
            q2: this.refs.q2.refs.inp.getDOMNode().value
        });
    },
    submit: function () {
        var score = 0;
        if (this.refs.q1.refs.inp.verify() === true) {
            console.log("q1 correct");
            score++
        }

        if (this.refs.q2.refs.inp.verify() === true) {
            score++
        }
        alert("You scored " + score);
    },
    verify: function(){
        return this.props.answer === this.props.guess;
    },
    render: function () {
        return (
            <div>
                {this.state.q1} -- {this.state.q2}
                <hr />
                <Question ref="q1" update={this.update}
                          question="1+1"
                          answer="2"
                          verify={this.verify}/>
                <Question ref="q2" update={this.update}
                          question="1+2"
                          answer="3"
                          verify={this.verify}/>
                <button onClick={this.submit}>{'Submit'}</button>
            </div>
        );

    }
});

var Question = React.createClass({
    propTypes: {
        question: React.PropTypes.string.isRequired,
        answer: React.PropTypes.string.isRequired,
        verify: React.PropTypes.func.isRequired,
        guess: React.PropTypes.string
    },
    getDefaultProps: function () {
        return {
            question: '',
            answer: '',
            guess: ''
        }
    },
    render: function () {
        return (
            <div>
                <label>{this.props.question} </label>
                <br />
                <input ref="inp"
                       type="text"
                       question={this.props.question}
                       answer={this.props.answer}
                       verify={this.props.verify}
                       onChange={this.props.update}/>
            </div>
        );
    }
});

React.render(<App />, document.body);