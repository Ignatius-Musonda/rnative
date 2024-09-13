import { StyleSheet, Text, View } from 'react-native'
import { Tabs,Redirect } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (

    <>  
          <Tabs>  

              <Tabs.Screen name='Bookmark'
               options={{
                headerShown : false,
                title : 'Bookmark'
               }}
              />
              <Tabs.Screen name='Create' />
              <Tabs.Screen name='Home' />
              <Tabs.Screen name='Profile' />

              

          </Tabs>
    </>
   
  )
}

export default TabsLayout

// const styles = StyleSheet.create({})