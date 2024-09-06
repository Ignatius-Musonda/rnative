import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (

     <Stack>
        <Stack.Screen

               name='index'
               options={{headerShown :false}}
        />
     </Stack>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

{/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!3</Text>
      <StatusBar style="auto" />
    </View> */}