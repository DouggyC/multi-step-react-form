import React, { useState } from "react";
import SecurityQuestions from "./SecurityQuestions";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  let [step, setStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  const handleChange = input => e => input(e.target.value);

  // Proceed to next step
  const nextStep = () => setStep(++step);
  // Previous step
  const prevStep = () => setStep(--step);
  // Confirm, reset form
  const resetForm = () => setStep(1);

  const values = { firstName, lastName, email, occupation, city, bio };

  const multiStepForm = () => {
    switch (step) {
      case 0:
        return <SecurityQuestions nextStep={nextStep} />;
      case 1:
        return;
      case 2:
        return (
          <FormUserDetails
            nextStep={nextStep}
            values={values}
            handleChange={handleChange}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
          />
        );
      case 3:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
            handleChange={handleChange}
            setOccupation={setOccupation}
            setCity={setCity}
            setBio={setBio}
          />
        );
      case 4:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
        );
      case 5:
        return <Success resetForm={resetForm} />;
      default:
    }
  };

  return <>{multiStepForm()}</>;
};

export default UserForm;
