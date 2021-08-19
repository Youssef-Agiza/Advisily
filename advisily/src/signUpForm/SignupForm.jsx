import React from "react";
import { Link, Redirect } from "react-router-dom";

import { Form, SubmitButton } from "../components/common/form";
import GoogleLogin from "../components/GoogleLogin";

import UserSubForm from "../subforms/userSubForm/UserSubForm";
import MajorInfo from "../subforms/majorSubForm/MajorInfo";

//services
import { userService } from "../services";

//hooks
import { useAuth, useFormStep } from "../hooks";

//utils
import {
  updateUserMajor,
  updateUserMinors,
} from "../utils/advisingSubmissionUtils";

import validationSchema from "./validationSchema";
import defaultValues from "./defaultValues";

const SignUpForm = () => {
  const { next, back, step } = useFormStep();
  const { user } = useAuth();
  if (user) return <Redirect to="/" />;

  const submitMajorInfo = (values) => {
    const { studentId } = values;

    const { majorId, catalogId, secondMajorId, secondCatalogId, minorIds } =
      values;
    updateUserMajor(studentId, majorId, catalogId);
    updateUserMajor(studentId, secondMajorId, secondCatalogId);
    updateUserMinors(studentId, minorIds);
  };

  const onSubmit = async (values, { setStatus }) => {
    try {
      console.log(`Subimtting Values:`, values);
      await userService.register(values);
      submitMajorInfo(values);
      alert(
        "Account registered successfuly. Please verify your email to login."
      );
      window.location = "/email-verification";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        if (ex.response.data.errno === 1062) {
          setStatus({
            error: "Email or ID already registered",
          });
        }
        console.log(ex);
        console.log(ex.response);
        console.log(ex.response.data.errno);
      }
    }
  };

  return (
    <>
      <Form
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={defaultValues}
        title={"Sign Up"}
      >
        {step === 1 && <UserSubForm />}

        {step === 2 && <MajorInfo />}

        <div className="d-flex justify-content-between ">
          {step === 1 && (
            <>
              <button className="btn my-3 ms-auto" onClick={next} type="button">
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <button className="btn my-3" onClick={back} type="button">
                Back
              </button>
              <SubmitButton label="Sign Up" />
            </>
          )}
        </div>

        {/* Already a user */}
        <div className="d-flex align-items-center">
          <p className="ms-auto ">
            Already a user? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
      <div className="d-flex justify-content-center">
        <strong className="text-center">
          Or login in using
          <GoogleLogin />
        </strong>
      </div>
    </>
  );
};

export default SignUpForm;
