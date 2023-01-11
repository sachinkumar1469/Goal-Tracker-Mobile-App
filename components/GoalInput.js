import React from 'react'

import { TextInput,Button,View,StyleSheet, Modal,Image, StatusBar } from 'react-native'

const GoalInput = ({goalInputHandler,addGoalHandler,text,visible}) => {
  return (
    <Modal visible={visible} animationType="fade" style={style.modal}>
        <View style={style.inputContainer}>
            <Image source={require('../assets/goal.png')} style={style.image}/>
            <TextInput placeholder='Enter Your Goal' style={style.input}  onChangeText={goalInputHandler} value={text}></TextInput>
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    </Modal>
  )
}

export default GoalInput

const style = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#1e085a',
      },
      input:{
        borderWidth:1,
        borderColor:'lightgrey',
        width:"85%",
        padding:0,
        paddingHorizontal:10,
        height:40,
        marginBottom:16,
        color:"white",
      },
      image:{
        width:100,
        height:100,
        marginBottom:16,
        backgroundColor:"#1e085a"
      }
      
})
