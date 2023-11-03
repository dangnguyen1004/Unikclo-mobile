import React, {FC} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';

interface Props {
  width?: number;
  height?: number;
}

const Space: FC<Props> = props => {
  const {width = 0, height = 0} = props;

  const containerStyle: StyleProp<ViewStyle> = {
    width,
    height,
  };

  return (
    <View style={containerStyle}>
      <Text>Space</Text>
    </View>
  );
};

export default Space;
