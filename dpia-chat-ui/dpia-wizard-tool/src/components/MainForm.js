/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import APIService from '../apis/server';
// import css from '../../src/styles.css';
import './MainForm.css'

import LargeScaleDataProcessing from './steps/LargeScaleDataProcessing';
import ProcessingOfSensitiveData from './steps/ProcessingOfSensitiveData';
import VulnerableDataSubject from './steps/VulnerableDataSubjects';

// const steps = [
//   LargeScaleDataProcessing,
//   ProcessingOfSensitiveData,
//   VulnerableDataSubject
// ];
const steps = [
  'what is your name?',
  'How old are you?',
  'Where do you live?'
]
const otherQuestions = [
  'Are you married?',
  'Do you have child?',
  'Do you like french food?'
]

export default props => {
  // console.log("export default is called!")
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = () => {
    return false;
    // return activeStep === steps.length - 1;
    // if the ICA says the questions are finished -> isLastStep = true
  };

  const isAnotherQuestion = () => {
    return true;


  }

  const handlePrev = () => {
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = () => [
    setActiveStep(Math.min(activeStep + 1, steps.length - 1))
    // setActiveStep(activeStep + 1)

  ];

  const onSubmit = (values, formikBag) => {
    console.log('submit button is pressed =>');
    const { setSubmitting } = formikBag;

    if (!isLastStep()) {
      setSubmitting(false);
      handleNext();
      steps.push(...otherQuestions)

      return;
    }
    // else {
    //   // here we should call an API to get the next question from Assistant (AIML file)
    //   // question = getNextQuestion(prevAnswer, prevQuestion);
    //   // const newQuestion = "Are you married?"
    //   steps.push("Are you married?")
    //   console.log("Push to array");
    // }


    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const initialValues = steps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues
    }),
    {}
  );
  // console.log('initialvalues=>', JSON.stringify(initialValues));

  // console.log('steps.value=> ', steps.values);
  const ActiveStep = steps[activeStep];
  const validationSchema = ActiveStep.validationSchema;

  return (
    // <div className="form"></div >
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, touched, values }) => (
          <div>
            <Form>
              <Stepper className="stepper" alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel>{steps[index].label}</StepLabel>
                  </Step>
                ))}
              </Stepper>


              <SwipeableViews className='swipeableViews' index={activeStep}>

                {/* {steps.map((step, index) => {
                  console.log('index=>', index);
                  const Component = steps[index];
                  return <Component key={index} />;
                })} */}

                {steps.map((question, index) => {
                  // console.log('index=>', index);
                  // console.log('questions', question);
                  return <div key={index}>{question}</div>;
                })}
              </SwipeableViews>

              <div className='buttonContainer'>
                <Button
                  variant="outlined"
                  disabled={activeStep === 0 || isSubmitting}
                  onClick={handlePrev}
                >
                  Previous
                </Button>
                <Button variant="contained" disabled={isSubmitting} type="submit">
                  {isLastStep() ? 'Submit' : 'Next'}
                </Button>
              </div>
            </Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(touched, null, 2)}</pre>
          </div>
        )
        }
      </Formik >
    </div>
  );
};
