import React from 'react';
import {Text} from 'react-native';
import style from './TodoListItem.style';

const TodoListItem = ({item, setState}) => {
  const toggleTodo = () => {
    setState(state =>
      state.map(t => (t.id === item.id ? {...t, done: !t.done} : t)),
    );
  };

  const removeTodo = () => {
    setState(state => state.filter(t => t.id !== item.id));
  };

  return (
    <Text
      onPress={toggleTodo}
      onLongPress={removeTodo}
      style={[style.text, item.done && style.done]}>
      {item.title}
    </Text>
  );
};

export default TodoListItem;
