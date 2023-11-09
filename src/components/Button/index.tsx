import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, shadows} from '../../constants';

interface Props {
  label: string;
  preset?: 'FullFilled' | 'Outlined';
}

const Button: FC<Props> = props => {
  const {label, preset = 'FullFilled'} = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: colors.primary,
    borderRadius: 25,
    ...shadows.shadow001,
  },
  text: {
    color: colors.palette.neutral100,
    textTransform: 'uppercase',
  },
});
