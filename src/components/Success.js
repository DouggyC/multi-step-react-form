import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

const Success = ({ resetForm }) => {
  let [seconds, setSeconds] = useState(5);

  setInterval(
    () => (seconds === 0 ? resetForm() : setSeconds(--seconds)),
    1000
  );

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Success" />
        <h1>Thank You For Your Submission</h1>
        <p>Confirmation Email Sent</p>
        <p>{seconds}</p>
        <RaisedButton
          label="Reset Now"
          primary={true}
          type="button"
          style={styles.button}
          onClick={() => resetForm()}
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

export default Success;
