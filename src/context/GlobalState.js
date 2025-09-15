import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  securityQuestions: [],
  selectedSecurityQuestions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const getSecurityQuestionsAction = async () => {
    const { data } = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=20")
      .catch(console.error);

    dispatch({
      type: "GET_SECURITY_QUESTIONS",
      payload: data,
    });
  };

  const setSelectSecurityQuestionAction = question => {
    dispatch({
      type: "SELECT_SECURITY_QUESTION",
      payload: question,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        securityQuestionsState: state.securityQuestions,
        selectedSecurityQuestionsState: state.selectedSecurityQuestions,
        getSecurityQuestionsAction,
        setSelectSecurityQuestionAction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
