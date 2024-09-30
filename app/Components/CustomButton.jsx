import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});




const CustomButton = ({
  
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {


  return (

   
   <TouchableOpacity
onPress={handlePress}
activeOpacity={0.7}
className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
  isLoading ? "opacity-50" : ""
}`}
disabled={isLoading}
>
<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
  
        {title}
</Text>

{isLoading && (
  <ActivityIndicator
    animating={isLoading}
    color="#fff"
    size="small"
    className="ml-2"
  />
)}
</TouchableOpacity> 

     

     
  );
};

export default CustomButton;


