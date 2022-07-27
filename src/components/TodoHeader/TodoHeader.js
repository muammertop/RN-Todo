import React from 'react';
import {Text, View} from 'react-native';
import style from './TodoHeader.style';

const TodoHeader = ({state}) => {
  const calculateTodoCount = () => {
    return state.filter(todo => !todo.done).length;
  };

  return (
    <View style={style.container}>
      <Text style={{...style.title, ...style.bold}}>Todos</Text>
      <Text style={style.title}>{calculateTodoCount()}</Text>
    </View>
  );
};

export default TodoHeader;
