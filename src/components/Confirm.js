import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const Confirm = ({ nextStep, prevStep, values }) => {
  const nextContinue = e => {
    e.preventDefault();
    // PROCESS FORM //
    console.log("🚀 ~ file: Confirm.js ~ line 8 ~ Confirm ~ values", values);
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const { firstName, lastName, email, occupation, city, bio } = values;
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem primaryText="First Name" secondaryText={firstName} />
          <ListItem primaryText="Last Name" secondaryText={lastName} />
          <ListItem primaryText="Email" secondaryText={email} />
          <ListItem primaryText="Occupation" secondaryText={occupation} />
          <ListItem primaryText="City" secondaryText={city} />
          <ListItem primaryText="Bio" secondaryText={bio} />
        </List>
        <br />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={back}
        />
        <RaisedButton
          label="Confirm & Continue"
          primary={true}
          style={styles.button}
          onClick={nextContinue}
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

export default Confirm;
