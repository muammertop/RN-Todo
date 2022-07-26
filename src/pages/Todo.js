import React from 'react';
import {View} from 'react-native';
import {TodoHeader} from '../components';

const Todo = ({state, setState}) => {
  return (
    <View>
      <TodoHeader />
    </View>
  );
};

export default Todo;
