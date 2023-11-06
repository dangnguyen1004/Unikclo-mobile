import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  Icon: FC<any>;
  onPress?: () => void;
}

const SocialButton: FC<Props> = props => {
  const {Icon, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon width={25} height={25} />
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: 'white',
    borderRadius: 24,
  },
});
