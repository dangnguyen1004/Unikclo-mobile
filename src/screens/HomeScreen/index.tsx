import React, {FC, useEffect, useMemo} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import TodoItem from '../../components/TodoItem';
import {colors} from '../../constants/colors';
import {logOut} from '../../redux/auth/authSlice';
import {RootState} from '../../redux/rootReducer';
import {useAppDispatch} from '../../redux/store';
import {onGetAllTodos, onUpdateTodo} from '../../redux/todo/todo.actions';
import {AppStackScreenProps} from '../../routes/AppStack';

const HomeScreen: FC<AppStackScreenProps<'Home'>> = _props => {
  const {todos, loading} = useSelector((state: RootState) => state.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onGetAllTodos({}));
  }, [dispatch]);

  const sortedList = useMemo(() => {
    const doneList = todos.filter(todo => todo.completed);
    const notDoneList = todos.filter(todo => !todo.completed);
    return notDoneList.concat(doneList);
  }, [todos]);

  const handleToggleTodo = (id: number, completed: boolean) => {
    dispatch(onUpdateTodo({id, completed}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen - Todo list</Text>
      <Button title="Log out" onPress={() => dispatch(logOut())} />
      {loading && <Text>Loading...</Text>}
      <FlatList
        style={styles.list}
        data={sortedList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TodoItem
            todo={item.todo}
            isCompleted={item.completed}
            onToggle={() => handleToggleTodo(item.id, !item.completed)}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
  },
  list: {
    width: '100%',
    paddingHorizontal: 12,
  },
});
