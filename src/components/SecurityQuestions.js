import React, { useState, useContext, useEffect } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppBar from "material-ui/AppBar";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

import { GlobalContext } from "../context/GlobalState";

const SecurityQuestions = ({ nextStep }) => {
  const {
    securityQuestionsState,
    selectedSecurityQuestionsState,
    getSecurityQuestionsAction,
    setSelectSecurityQuestionAction,
  } = useContext(GlobalContext);

  const [question, setQuestion] = useState("Select a question");
  const [answer, setAnswer] = useState("");
  const [answerVisible, showAnswerVisible] = useState(false);
  const [selectQuestion, setSelectQuestion] = useState();

  console.log(useContext(GlobalContext));

  const nextContinue = e => {
    e.preventDefault();
    setSelectSecurityQuestionAction(selectQuestion); // dispatch to store
    // nextStep();
  };

  useEffect(() => {
    getSecurityQuestionsAction();
  }, []);

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Set SQ" />

        <DropDownMenu
          value={question}
          onChange={e => setQuestion(e.target.innerText)}
          onClose={() => {
            showAnswerVisible(true);
          }}
        >
          {/*  */}
          <MenuItem value={1} primaryText="Select a question" disabled />
          {securityQuestionsState
            ? securityQuestionsState.map((question, i) => (
                <MenuItem
                  key={i}
                  value={question.title}
                  primaryText={question.title}
                  onClick={() => setSelectQuestion(question)}
                />
              ))
            : null}
        </DropDownMenu>
        <br />
        {answerVisible ? (
          <TextField value={answer} onChange={e => setAnswer(e.target.value)} />
        ) : null}
        <br />
        <ul>
          {selectedSecurityQuestionsState
            ? selectedSecurityQuestionsState.map((selectQuestion, i) => (
                <li>
                  <p>{selectQuestion.id}</p>
                  <p>{selectQuestion.answer}</p>
                </li>
              ))
            : null}
        </ul>
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={nextContinue} // return to first screen also save to store
          disabled={!answer ? true : false}
        />
      </>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};

export default SecurityQuestions;
