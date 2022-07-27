import React from 'react';
import {View} from 'react-native';
import {TodoListItem} from '../index';

const TodoList = ({state, setState}) => {
  return (
    <View>
      {state.map((item, index) => {
        return <TodoListItem key={index} item={item} setState={setState} />;
      })}
    </View>
  );
};

export default TodoList;
