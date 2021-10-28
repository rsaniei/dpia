import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Grid, Typography } from '@material-ui/core';
import * as Yup from 'yup';

const ProcessingOfSensitiveData = props => {
  return (
    <>
      <Typography variant="h6" component="h1">
        Do you process sensitive categories of personal dta?
      </Typography>
      <Field name="answer2" label="type here" component={TextField} />
    </>
  );
};

ProcessingOfSensitiveData.label = 'Sensitive data processing';
ProcessingOfSensitiveData.initialValues = {
  answer2: ''
};
ProcessingOfSensitiveData.validationSchema = Yup.object().shape({
  answer2: Yup.string().required('Please enter your answer here'),
});

export default ProcessingOfSensitiveData;
