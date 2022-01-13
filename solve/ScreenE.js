import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    Button,
    StyleSheet
  } from 'react-native';
// import { Value } from 'react-native-reanimated';

const ScreenD = ({ navigation,route}) => {
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
        <View>
            <Text>D页面</Text>
        </View>
    );
}

const styles = StyleSheet.create({})
export default ScreenD;