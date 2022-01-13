
import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput
  } from 'react-native';
import {useSelector,useDispatch} from "react-redux";
import {useEffect}from "react"
import {setName,getData} from "./android/app/src/redux/actions"

const ScreenA = ({navigation}) => {
    const [name2,SetName2]=useState("")
    const {name,data}=useSelector(state=>state.userReducer)
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(getData())//进页面调action请求函数;
      },[]);
    
    const setRedux=()=>{
        dispatch(setName("Redux新名字"))
    }
    const go=()=>{
        navigation.navigate("Screen_B",{name:"李华",id:"18"})
    }
    const saveData=async()=>{
       await AsyncStorage.setItem("user",name)
       navigation.navigate("Screen_B")
    }
 
    return (
        <View>
            <Text>A页面你好</Text>
            <View style={{height:170,backgroundColor:"gray"}}>
                <Text>
                redux数据:{name}
                </Text>
                <View>
                    {data.map(item=>{
                        return <Text>{item.name}</Text>
                    })}
                </View>
                <TextInput
                style={{borderWidth:2,width:200}}
                placeholder="输入姓名"
                onChangeText={(value)=>{SetName2(value)}}
                // keyboardType="phone-pad"//指定键盘类型;
                // securetextEntry//密码类型
                maxLength={8}//最大值
                editable={true}//可编辑状态
                //双向刷新(V-model)
                />
            </View>
            <Button title="保存数据" onPress={()=>saveData()}></Button>
            <Button title="gotoB" onPress={()=>go()}></Button>
            <Button title="setRedux" onPress={()=>setRedux()}></Button>
        </View>
    );
}

const styles = StyleSheet.create({})
export default ScreenA;


