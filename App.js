
import { Button, ScrollView, StyleSheet, TextInput, FlatList,  } from 'react-native';

import {StatusBar} from 'expo-status-bar';

import React, { useState } from 'react';
import {Text, View} from 'react-native';

import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {

  const [visible,setVisible] = useState(false);

  const [text,setText] = useState("");

  const [goals,setGoals] = useState([]);

  function goalInputHandler(text){
    setText(text);
  }

  function addGoalHandler(){
    // console.log("btn clicked")
    setGoals((goal)=>{
      const newText = {text,id:Math.random().toString()}
      const newArr = [...goal,newText];
      setText("");
      return newArr;
    });
    setVisible(false);
  }

  function deleteGaol(id){
    console.log(id);
    setGoals(goals=>{
      return goals.filter(goal=>goal.id!==id);
    })
  }


  return (
    <>
      <StatusBar style='inverted'/>
      <View style={style.container}>
        <View style={style.btnView}>
          <Button title='Add New Goal' onPress={()=>{setVisible(!visible)}}></Button>
        </View>
        <GoalInput goalInputHandler={goalInputHandler} visible={visible} addGoalHandler={addGoalHandler} text={text}/>
        <View style={style.listContainer}>
          <FlatList data={goals} renderItem={(itemData)=>{
            const item = itemData.item;
            return <GoalList item={item} deleteGaol={deleteGaol}/>
            }}
            keyExtractor={(item,index)=>(index)}
          />
        </View>
    </View>
   </>
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
  
  listContainer:{
    flex:5,
    paddingTop:20,
    // borderWidth:2
  },
  btnView:{
    paddingHorizontal:80,
    paddingVertical:22,
    borderBottomWidth:1,
    borderColor:'#cccccc',
  }
})


