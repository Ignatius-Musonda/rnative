import {  Image, ScrollView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from './Components/CustomButton'


const RIndex = () => {
  return (

      <SafeAreaView className="bg-primary h-full">  
             <ScrollView contentContainerStyle={{height: '100%'}}>  

             <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
                  {/* <Link href={'/Profile'} style={{color: 'blue'}}>Go to Home</Link> */}

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/Signin")}
            containerStyles="w-full mt-7"
          />
        </View>
                    

             </ScrollView>

      </SafeAreaView>

  )
}

export default RIndex
// const RIndex = () => {
//   return (

//       <View  className='flex-1 items-center justify-center bg-blue'>
//         <Text className="text-4xl font-pblack">Aora</Text>
//         <StatusBar style='auto' />
//         <Link href={'/Profile'} style={{color: 'blue'}}>Go to Home</Link>
//       </View>

//   )
// }

// export default RIndex

