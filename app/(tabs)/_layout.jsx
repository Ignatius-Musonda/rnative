import { StyleSheet, Text, View,Image } from 'react-native'
import { Tabs,Redirect } from 'expo-router'
import React from 'react'
// import {icons} from "../../assets/icons"
//import {icons} from '../../constants/icons'
import icons from '../../constants/icons';


const TabsLayout = () => {

  const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          className={`${focused ? "font-psemibold text-yellow" : "font-pregular"} text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };
  

  return (

    <>  
          <Tabs
              
               screenOptions={
                 {
                  tabBarShowLabel : false,
                  tabBarActiveTintColor :'#FFA001',
                  tabBarInactiveTintColor : '#CDCDE0',
                  tabBarStyle : {
                    backgroundColor : '#161622',
                    borderTopWidth : 1,
                    borderTopColor : '#232533',
                    height :84
                  }
             }
               }
          >  

              <Tabs.Screen name='Home'
               options={{
                headerShown : false,
                title : 'Home',
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={icons.home}
                    color={color}
                    name="Home"
                    focused={focused}
                  />
                ),
               }}
              />
              <Tabs.Screen name='Bookmark'
               options={{
                headerShown : false,
                title : 'Bookmark',
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={icons.bookmark}
                    color={color}
                    name="Bookmark"
                    focused={focused}
                  />
                ),
               }}
              />
              <Tabs.Screen name='Create'
               options={{
                headerShown : false,
                title : 'Create',
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={icons.plus}
                    color={color}
                    name="Create"
                    focused={focused}
                  />
                ),
               }}
              />
              <Tabs.Screen name='Profile'
               options={{
                headerShown : false,
                title : 'Profile',
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    icon={icons.profile}
                    color={color}
                    name="Profile"
                    focused={focused}
                  />
                ),
               }}
              />
              {/* <Tabs.Screen name='Create' />
              <Tabs.Screen name='Home' />
              <Tabs.Screen name='Profile' /> */}

              

          </Tabs>
    </>
   
  )
}

export default TabsLayout

// const styles = StyleSheet.create({})