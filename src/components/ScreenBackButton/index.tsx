import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import LeftChevronIcon from '../../assets/icons/svg/LeftChevronIcon.svg';

interface Props {
  onPress?: () => void;
}

const ScreenBackButton: FC<Props> = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <LeftChevronIcon width={24} height={24} />
    </TouchableOpacity>
  );
};

export default ScreenBackButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    width: '100%',
    alignItems: 'flex-start',
  },
});
