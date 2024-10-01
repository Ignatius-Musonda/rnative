import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'

// const FormField = ({title,value,placeholder,handleChangeText,OtherStyles,...props}) => {


//     const [showPassword,setShowPassword] = useState(true)
//   return (
//     <View className={`space-y-2 ${OtherStyles}`}>
//       <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

//       <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary text-center"> 

//                     <TextInput
//                             className="flex-1 font-psemibold text-base" 
//                             value={value}
//                             placeholder={placeholder}
//                             placeholderTextColor={"#7B7B8B"}
//                             onChangeText={handleChangeText}
//                             secureTextEntry={title=="password" && !showPassword }
                     
//                      />

//       </View>
//     </View>
//   )
// }

// export default FormField

// const styles = StyleSheet.create({})