export default (state, action) => {
  switch (action.type) {
    case "GET_SECURITY_QUESTIONS":
      return {
        ...state,
        securityQuestionsState: action.payload,
      };

    case "SELECT_SECURITY_QUESTION":
      console.log("state", state, action.payload);
      return {
        ...state,
        selectedSecurityQuestions: [
          ...state.selectedSecurityQuestionsState,
          {
            id: action.payload.id,
            answer: action.payload.title,
          },
        ],
      };

    default:
      return state;
  }
};
