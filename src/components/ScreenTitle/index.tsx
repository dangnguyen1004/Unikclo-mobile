import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {fontSize} from '../../constants/font';

interface Props {
  text: String;
}

const ScreenTitle: FC<Props> = props => {
  const {text = ''} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent: 'flex-start',
  },
  text: {
    fontSize: fontSize.headLine,
    fontWeight: 'bold',
  },
});
