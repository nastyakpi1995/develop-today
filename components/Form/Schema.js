import React from 'react';
import * as Yup from 'yup';

export default () => Yup.object({
    title: Yup.string()
      .min(1, 'Password must contain at least 1 characters.')
      .required('validation.required'),
    body: Yup.string()
      .min(1, 'Password must contain at least 1 characters.')
      .required('validation.required')
});

