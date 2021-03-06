import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Form, FormInput, SubmitButton } from "../../components/form";

import { LOGIN_ROUTE } from "../routes";
import { HOME_ROUTE } from "../../common/routes";

import auth from "../../services/authService";
import { resendVerification } from "../../services/userService";

import { EMAIL } from "./fieldNames";
import verifyEmailDefaultValues from "./defaultValues";
import verifyEmailSchema from "./validationSchema";

const TITLE = "Email Verification";

function VerifyEmail(props) {
  const [showForm, setShowForm] = useState(false);

  const user = auth.getCurrentUser();
  if (user) return <Redirect to={{ pathname: HOME_ROUTE }} />;

  const { state } = props.history.location; //get email from previous route, if given.
  if (state && state.email) verifyEmailDefaultValues.email = state.email;

  const handleSubmit = async ({ email }, { setStatus }) => {
    try {
      const res = await resendVerification(email);
      // console.log(res);
      alert("Email sent successfully");
    } catch (error) {
      const { response } = error;
      const { data, status } = response;
      if (response && status && status >= 400 && status < 500)
        setStatus({ error: data.error });
    }
  };

  const getMessage = () => (
    <>
      <p>Please check your email inbox to verify your email.</p>
      <p className="my-2">
        If you already confirmed your email,{" "}
        <a href={LOGIN_ROUTE}>login here</a>.
      </p>
    </>
  );

  const getForm = () => {
    if (!showForm) return null;
    return (
      <Form
        title={TITLE}
        initialValues={verifyEmailDefaultValues}
        validationSchema={verifyEmailSchema}
        onSubmit={handleSubmit}
      >
        {getMessage()}
        <FormInput
          label="Email"
          name={EMAIL}
          placeholder="email@aucegypt.edu"
        />
        <SubmitButton />
      </Form>
    );
  };

  return (
    <>
      {!showForm && (
        <div className="text-center my-4">
          <h1 className="text-center mb-4 ">{TITLE}</h1>
          {getMessage()}
          <p>
            Recieved nothing?
            <button
              type="button"
              className="btn btn-sm mx-2"
              onClick={() => setShowForm(true)}
            >
              Resend
            </button>
          </p>
        </div>
      )}
      {getForm()}
    </>
  );
}

export default VerifyEmail;
