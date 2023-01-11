import React from 'react'

import { TextInput,Button,View,StyleSheet, Modal } from 'react-native'

const GoalInput = ({goalInputHandler,addGoalHandler,text,visible}) => {
  return (
    <Modal visible={visible} animationType="fade" style={style.modal}>
        <View style={style.inputContainer}>
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:12
      },
      input:{
        borderWidth:1,
        borderColor:'lightgrey',
        width:"65%",
        padding:0,
        paddingHorizontal:10,
        height:35
      },
      
})
