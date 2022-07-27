import React from 'react';
import {FlatList, View} from 'react-native';
import {TodoListItem} from '../index';

const TodoList = ({state, setState}) => {
  const renderItem = ({item}) => (
    <TodoListItem item={item} setState={setState} />
  );

  return (
    <View>
      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;
