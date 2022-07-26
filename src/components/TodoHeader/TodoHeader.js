import React from 'react';
import {Text, View} from 'react-native';
import style from './TodoHeader.style';

const TodoHeader = ({state}) => {
  return (
    <View style={style.container}>
      <Text style={{...style.title, ...style.bold}}>Yapılacaklar</Text>
      <Text style={style.title}>{state?.length ?? 0}</Text>
    </View>
  );
};

export default TodoHeader;
