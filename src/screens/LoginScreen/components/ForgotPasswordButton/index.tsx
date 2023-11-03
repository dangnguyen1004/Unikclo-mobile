import React from 'react';
import {TextButton} from '../../../../components';
import {RoundArrowRightRed} from '../../../../constants';

const ForgotPasswordButton = () => {
  return (
    <TextButton
      label="Forgot your password?"
      Icon={() => <RoundArrowRightRed width={30} />}
      position="right"
    />
  );
};

export default ForgotPasswordButton;
