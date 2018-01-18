import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import MultiChoice from '../components/MultiChoice';

function Quiz(props) {

  function renderMultiChoices(key) {
    return (
      <MultiChoice
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={2500}
      transitionLeaveTimeout={2000}
      transitionAppear
      transitionAppearTimeout={2000}
    >
      <div key={props.questionId}>
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="multiChoices">
          {props.multiChoices.map(renderMultiChoices)}
        </ul>
      </div>
    </ReactCSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: React.PropTypes.string.isRequired,
  multiChoices: React.PropTypes.array.isRequired,
  question: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.number.isRequired,
  questionTotal: React.PropTypes.number.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default Quiz;
