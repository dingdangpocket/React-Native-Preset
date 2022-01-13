import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {NavigationContainer} from "@react-navigation/native"//引入
import ScreenA from "./ScreenA"//引入
import ScreenB from "./ScreenB"//引入
import ScreenC from "./ScreenC"//引入
import ScreenD from "./ScreenD"//引入
import {createStackNavigator} from "@react-navigation/stack"//引入
const Stack=createStackNavigator()
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
const Tab=createBottomTabNavigator()
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Tab = createMaterialTopTabNavigator();
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import AsyncStorage from "@react-native-async-storage/async-storage"
import {Provider} from "react-redux"
import {Store}from "./android/app/src/redux/store"
const App= () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Tab.Navigator
            screenOptions={({route})=>({
            tabBarIcon:({focused,size,color})=>{
            let iconName;
            if(route.name==="Screen_A"){
              iconName="autoprefixer"
              size=focused?25:20;
              color=focused?'red':'grey'
            }else if(route.name==="Screen_B"){
              iconName='btc';
              size=focused?25:20;
              color=focused?'red':'grey'
            }
            else if(route.name==="Screen_C"){
              iconName='btc';
              size=focused?25:20;
              color=focused?'red':'grey'
            }
            else if(route.name==="Screen_D"){
              iconName='btc';
              size=focused?25:20;
              color=focused?'red':'grey'
            }
              
            return (
              <FontAwesome5
               name={iconName}
               size={size}
               color={color}
              />
            )
          }
          
        })}
        
        tabBarOptions={{
          activeTintColor:"red",//文本颜色;
          // activeBackgroundColor:"gray",//点击的背景色;
          showLabel:true,//标签显示;
          labelStyle:{fontSize:15}
        }}
        
        activeColor="green"//点击涟漪色
        barStyle={{backgroundColor:"orange"}}//底部背景色
         
        >
          <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={{header:()=>null}}//清除导航;
          />
         <Tab.Screen
          name="Screen_B"
          component={ScreenB}
          />
           <Tab.Screen
          name="Screen_C"
          component={ScreenC}
          />
           <Tab.Screen
          name="Screen_D"
          component={ScreenD}
          />
        </Tab.Navigator>
      {/* <Stack.Navigator>
          <Stack.Screen
          name="Solve"
          component={ScreenA}
          // options={{header:()=>null}}//清除导航;
          />
         <Stack.Screen
          name="Screen_B"
          component={ScreenB}
          />
        <Stack.Screen
          name="Screen_C"
          component={ScreenC}
          />
        </Stack.Navigator> */}
         {/* <Drawer.Navigator
         initialRouteName="ScreenA"
         drawerPosition="left"
         drawerType="front"
         edgeWidth={100}
         drawerStyle={{
           backgroundColor:"#fefefe",
           width:300
         }}
         screenOptions={{
          gestureEnabled:false,//空白处单击可收回;
          swipeEnabled:true,//滑动关闭
          headerShown:true//按钮展开
        }}
         >
          <Drawer.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            title:"选项A",
            drawerIcon:({focused})=>(
              <FontAwesome5
              name="autoprefixer"
              size={focused?25:20}
              color={focused?"red":"gray"}
              />
            )
          }}

          />
         <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            title:"选项B",
            drawerIcon:({focused})=>(
              <FontAwesome5
              name="btc"
              size={focused?25:20}
              color={focused?"red":"gray"}
              />
            )
          }}
          initialParams={{age:29}}
          />
        </Drawer.Navigator> */}
     </NavigationContainer>
    </Provider>
  );
};
const styles = StyleSheet.create({})
export default App;