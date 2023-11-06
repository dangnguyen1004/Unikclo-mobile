import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {colors, shadows} from '../../constants';

interface Props {
  label?: string;
  valid?: boolean;
  onChangeText?: (text: string) => void;
}

const TextInput: FC<Props> = props => {
  const {label, valid = false, onChangeText} = props;

  return (
    <PaperTextInput
      label={label}
      onChangeText={onChangeText}
      style={styles.input}
      underlineStyle={styles.underline}
      right={
        valid ? (
          <PaperTextInput.Icon icon="check" color={colors.success} />
        ) : null
      }
      theme={{
        roundness: 4,
      }}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    backgroundColor: colors.palette.neutral100,
    borderRadius: 4,
    ...shadows.shadow001,
  },
  underline: {
    display: 'none',
  },
});
