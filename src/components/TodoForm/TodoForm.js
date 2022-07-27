import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import style from './TodoForm.style';

const TodoForm = ({setState}) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = () => {
    setState(prevState => [
      ...prevState,
      {id: Math.random(), title: todo, done: false},
    ]);
    setTodo('');
  };

  return (
    <View style={style.wrapper}>
      <TextInput
        style={style.input}
        value={todo}
        onChange={({nativeEvent: {text}}) => setTodo(text)}
      />
      <Button title={'Add'} onPress={handleSubmit} color={'#ccc'} />
    </View>
  );
};

export default TodoForm;
