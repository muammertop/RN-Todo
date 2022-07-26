import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Todo} from './src/pages';

const App = () => {
  const [todo, setTodo] = useState([]);

  return (
    <SafeAreaView>
      <Todo state={todo} setState={setTodo} />
    </SafeAreaView>
  );
};

export default App;
