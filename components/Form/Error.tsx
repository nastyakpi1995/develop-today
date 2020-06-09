import React, { FunctionComponent } from 'react';

import { MdWarning } from 'react-icons/md';
import ReactIcon from './ReactIcon';
import { ErrorMessageBox, TextError, IconError } from '../../styled/components/errorMessage';

interface ErrorMessageProps {
  text: string,
}

type ErrorMessageType = ErrorMessageProps;

const ErrorMessage:FunctionComponent<ErrorMessageType> = ({ text }) => (
  <ErrorMessageBox>
      <IconError>
          <ReactIcon color="secondary" size="1px">
              <MdWarning/>
          </ReactIcon>
      </IconError>
      <TextError>
          {text}
      </TextError>
  </ErrorMessageBox>
);
export default ErrorMessage;
