import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {TextButton} from '../../../../components';
import {RoundArrowRightRed} from '../../../../constants';

interface Props {
  onPress?: () => void;
}

const GoLoginButton: FC<Props> = props => {
  const {onPress} = props;
  return (
    <TextButton
      onPress={onPress}
      label="Already have an account??"
      Icon={() => <RoundArrowRightRed width={30} />}
      position="right"
    />
  );
};

export default GoLoginButton;

const styles = StyleSheet.create({});
