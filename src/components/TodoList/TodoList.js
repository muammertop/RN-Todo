import React from 'react';
import {FlatList} from 'react-native';
import {TodoListItem} from '../index';

const TodoList = ({state, setState}) => {
  const renderItem = ({item}) => (
    <TodoListItem item={item} setState={setState} />
  );

  return (
    <FlatList
      data={state}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default TodoList;
