import {  Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Link } from 'expo-router'

const RIndex = () => {
  return (

      <View  className='flex-1 items-center justify-center bg-blue'>
        <Text className='text-3xl'>Aora</Text>
        <StatusBar style='auto' />
        <Link href={'/Profile'} style={{color: 'blue'}}>Go to profile</Link>
      </View>

  )
}

export default RIndex

// const styles = StyleSheet.create({
  
//   container : {
//     flex : 1,
//     backgroundColor : '#fff',
//     alignItems : 'center',
//     justifyContent : 'center'
//   }

// })