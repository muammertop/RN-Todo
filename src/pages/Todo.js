import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {TodoForm, TodoHeader, TodoList} from '../components';

const Todo = ({state, setState}) => {
  return (
    <KeyboardAvoidingView style={style.container} behavior={'padding'}>
      <TodoHeader state={state} />
      <TodoList state={state} setState={setState} />
      <TodoForm setState={setState} />
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height - StatusBar.currentHeight - 75,
  },
});

export default Todo;
