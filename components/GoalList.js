import React from 'react'
import { Text,View, StyleSheet, Pressable } from 'react-native'

const GoalList = ({item,deleteGaol}) => {

    // console.log(item)


  return (
    <Pressable   onPress={deleteGaol.bind(this,item.id)} style={(obj)=>(obj.pressed ? style.pressed:style.press)}>
        <View style={style.view}>
            <Text android_ripple={{color:"#dddddd"}} style={style.goal}>{item.text}</Text>
        </View>
    </Pressable>
  )
}

export default GoalList

const style = StyleSheet.create({
    view:{
        width:"100%",
    },
    goal:{
        width:'100%',
        fontSize:25,
        alignItems:'center',
        // borderWidth:1,
        backgroundColor:'#5e0acc',
        borderRadius:5,
        marginBottom:8,
        color:'white',
        paddingHorizontal:9,
        paddingVertical:4
      },
      press:{
        alignItems:'center',
        marginVertical:3,
        paddingVertical:2
      },
      pressed:{
        alignItems:'center',
        opacity:0.5,
        marginVertical:3,
        paddingVertical:2
      }
})
