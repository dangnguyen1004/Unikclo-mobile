import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface Props {
  todo: string;
  isCompleted: boolean;
  onToggle?: () => void;
}

const TodoItem: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Button title="Toggle" onPress={props.onToggle} />
      <Text
        style={[styles.text, props.isCompleted ? styles.textCompleted : null]}>
        {props.todo}
      </Text>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
  },
});
