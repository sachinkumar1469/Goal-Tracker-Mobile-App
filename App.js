
import { Button, StyleSheet, TextInput } from 'react-native';

import React, { useState } from 'react';
import {Text, View} from 'react-native';

export default function App() {

  const [text,setText] = useState("");

  const [goals,setGoals] = useState([]);

  function goalInputHandler(text){
    setText(text);
  }

  function addGoalHandler(){
    console.log("btn clicked")
    setGoals((goal)=>{
      const newArr = [...goal,text];
      setText("");
      return newArr;
    })
  }


  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput placeholder='Enter Your Goal' style={style.input}  onChangeText={goalInputHandler} value={text}></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={style.listContainer}>
        {goals.map((goal,index)=><Text style={style.goal} key={index}>{goal}</Text>)}
      </View>
   </View>
  );
}

const style = StyleSheet.create({
  container:{
    padding:50,
    paddingHorizontal:20,
    // borderWidth:3,
    // borderColor:"green",
    flex:1
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'#cccccc',
    alignItems:'center',
    justifyContent:'space-between'
  },
  listContainer:{
    flex:5,
    paddingTop:20,
    // borderWidth:2
  },
  input:{
    borderWidth:1,
    borderColor:'lightgrey',
    width:"65%",
    padding:0,
    paddingHorizontal:10,
    height:35
  },
  inputBtn:{
    width:'10%'
  },
  goal:{
    width:'100%',
    height:35,
    borderWidth:1,
    backgroundColor:'blue',
    borderRadius:5,
  }
})


