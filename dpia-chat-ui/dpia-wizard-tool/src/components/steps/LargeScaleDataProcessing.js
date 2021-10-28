import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Typography } from '@material-ui/core';
import * as Yup from 'yup';

function LargeScaleDataProcessing() {
  return (
    <div>
      {/* <Typography variant="h4" component="h1">
        Type of Data
      </Typography> */}
      <Typography variant="h6" component="h1">
        .Is your processing large scale?
      </Typography>
      <Field name="answer1" label="type here" component={TextField} />
    </div>
  );
};

LargeScaleDataProcessing.label = 'Scale of Processing';
LargeScaleDataProcessing.initialValues = {
  answer1: ''
};
LargeScaleDataProcessing.validationSchema = Yup.object().shape({
  answer1: Yup.string().required('Please enter your answer here'),

});

export default LargeScaleDataProcessing;
