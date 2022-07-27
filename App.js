import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Todo} from './src/pages';

const App = () => {
  const [todo, setTodo] = useState([
    {id: 1, title: 'Todo 1', done: false},
    {id: 2, title: 'Todo 2', done: false},
    {id: 3, title: 'Todo 3', done: false},
    {id: 4, title: 'Todo 4', done: false},
    {id: 5, title: 'Todo 5', done: false},
  ]);

  return (
    <SafeAreaView>
      <Todo state={todo} setState={setTodo} />
    </SafeAreaView>
  );
};

export default App;
