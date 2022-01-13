import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    Button,
    StyleSheet
  } from 'react-native';
// import { Value } from 'react-native-reanimated';

const ScreenB = ({ navigation,route}) => {
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
    const goToC=()=>{
        navigation.navigate("Screen_C",{name:"李华",id:"18"})
    }
    return (
        <View>
            <Text>B页面</Text>
            {/* <Text>A页面传入的数据:{id}{name}</Text> */}
            <Text>仓库数据{storageData}</Text>
            {/* <Button title="打开侧边栏" onPress={()=>go()}></Button> */}
            <Button title="去C页面" onPress={()=>goToC()}></Button>
            <Button title="修改传入的数据" onPress={()=>setData()}></Button>
            <Button title="从本地仓库拿数据" onPress={()=>getData()}></Button>
        </View>
    );
}

const styles = StyleSheet.create({})
export default ScreenB;