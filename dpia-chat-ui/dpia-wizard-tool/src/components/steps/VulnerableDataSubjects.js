import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Typography } from '@material-ui/core';
import * as Yup from 'yup';

function VulnerableDataSubject() {
  return (
    <div>
      {/* <Typography variant="h4" component="h1">
        Type of Data
      </Typography> */}
      <Typography variant="h5" component="h1">
        Do you process personal data of volnurable data subjects?
      </Typography>
      <Field name="answer3" label="type here" component={TextField} />
    </div>
  );
};

VulnerableDataSubject.label = 'Vulnerable Data Subject';
VulnerableDataSubject.initialValues = {
  answer3: ''
};
VulnerableDataSubject.validationSchema = Yup.object().shape({
  answer: Yup.string().required('Please enter the information'),
});

export default VulnerableDataSubject;
