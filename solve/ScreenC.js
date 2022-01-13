import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    Button,
    StyleSheet
  } from 'react-native';
// import { Value } from 'react-native-reanimated';
import {createStackNavigator} from "@react-navigation/stack"//引入
const Stack=createStackNavigator()
import ScreenE from "./ScreenA"//引入

const ScreenC = ({ navigation,route}) => {
    // const {name,id}=route.params
    const [storageData,setSrorageData]=useState("")
    const go=()=>{
        navigation.openDrawer()
    }
    const setData=()=>{
        navigation.setParams({id:1,name:"林益"})
    }
    const getData=()=>{
        AsyncStorage.getItem("user").then(value=>{
            setSrorageData(value)
        })
    }
    return (
     <Stack.Navigator>
        <Stack.Screen
        name="Solve"
        component={ScreenE}
        // options={{header:()=>null}}//清除导航;
        />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})
export default ScreenC;