import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  label: string;
  Icon?: FC<any>;
  position?: 'left' | 'right' | 'center';
  onPress?: () => void;
}

const TextButton: FC<Props> = props => {
  const {label, Icon, position = 'center', onPress} = props;

  const containerStyle: StyleProp<ViewStyle> = [
    styles.container,
    {
      justifyContent:
        position === 'center'
          ? 'center'
          : position === 'left'
          ? 'flex-start'
          : 'flex-end',
    },
  ];

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        style={styles.button}
        onPress={onPress}>
        <Text>{label}</Text>
        {Icon ? <Icon /> : null}
      </TouchableOpacity>
    </View>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
  },
});
