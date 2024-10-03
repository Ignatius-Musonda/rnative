

import { useState } from "react";
import { Link } from "expo-router"; // Use expo-router for navigation
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import axios from "axios"; // Make sure axios is installed
import { images } from "../../constants";
import FormField from '../Components/FormField';
import CustomButton from '../Components/CustomButton';

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [errorMsg, setErrorMsg] = useState(false);
  const [msg, setMsg] = useState("");
  
  // const location = useLocation();
  const LOGIN_URL = "http://localhost:2002"; // Replace with your actual URL
  //const LOGIN_URL = "https://superagentback.onrender.com"; // Replace with your actual URL

  const submit = async (e) => {
    // e.preventDefault(); // No need to prevent default in React Native
    console.log("here");

    // Validate form fields
    if (Object.values(form).some(field => field === "")) {
      Alert.alert("Error", "Please fill in all fields");
      console.log("here 2");
      return;
    }

    setSubmitting(true);
    setErrorMsg(false);

    // const from = location?.state?.from?.pathname || "/";

    try {
      const response = await axios.post(LOGIN_URL+"/users", 
        JSON.stringify(form), // Send the entire form object
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
          crossDomain: true,
        }
      );
      console.log("response",response)

      if (response?.data?.status === "Ok") {
        const user = response?.data?.email;
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;

        // Handle successful response here (e.g., set auth context)
        // setAuth({ user, roles, accessToken });
        setSubmitting(false);
        
        // Navigate to the target page
       router.replace("/Home");
      } else {
        setMsg(response?.data?.msg);
        setErrorMsg(true);
        setSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(true);
      setMsg("An error occurred. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center h-full px-4 my-6" style={{ minHeight: Dimensions.get("window").height - 100 }}>
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[34px]" />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">Sign Up to Aora</Text>

          <FormField
            title="Name"
            value={form.name}
            handleChangeText={(e) => setForm({ ...form, name: e })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry
          />

          <FormField
            title="Address"
            value={form.address}
            handleChangeText={(e) => setForm({ ...form, address: e })}
            otherStyles="mt-7"
          />

          <FormField
            title="Phone Number"
            value={form.phone}
            handleChangeText={(e) => setForm({ ...form, phone: e })}
            otherStyles="mt-7"
            keyboardType="phone-pad"
          />

          {errorMsg && <Text className="text-red-500">{msg}</Text>} {/* Display error message */}

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Have an account already?</Text>
            <Link href="/Signin" className="text-lg font-psemibold text-secondary">Login</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;


// import { useState } from "react";
// import { Link, router } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
// import { Modal, Button } from 'react-native';

// import { images } from "../../constants";
// // import { createUser } from "../../lib/appwrite";
// // import { CustomButton, FormField } from "../Components";
// // import CustomButton from '../Components/CustomButton';
// import FormField from '../Components/FormField'
// import CustomButton from '../Components/CustomButton';


// // import { useGlobalContext } from "../../context/GlobalProvider";

// const SignUp = () => {
//   // const { setUser, setIsLogged } = useGlobalContext();

//   const [modalVisible, setModalVisible] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("")

//   const [isSubmitting, setSubmitting] = useState(false);
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const submit = async () => {
//     console.log("here")
//     if (form.username === "" || form.email === "" || form.password === "") {
//       Alert.alert("Error", "Please fill in all fields");
//       console.log("here 2")
//       return; // Return early to prevent further execution
//     }

//     setSubmitting(true);
//     try {
//       // const result = await createUser(form.email, form.password, form.username);
//       // setUser(result);
//       // setIsLogged(true);

//       router.replace("/Home");
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <ScrollView>
//         <View
//           className="w-full flex justify-center h-full px-4 my-6"
//           style={{
//             minHeight: Dimensions.get("window").height - 100,
//           }}
//         >
//           <Image
//             source={images.logo}
//             resizeMode="contain"
//             className="w-[115px] h-[34px]"
//           />

//           <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
//             Sign Up to Aora
//           </Text>

//           <FormField
//             title="Username"
//             value={form.username}
//             handleChangeText={(e) => setForm({ ...form, username: e })}
//             otherStyles="mt-10"
//           />

//           <FormField
//             title="Email"
//             value={form.email}
//             handleChangeText={(e) => setForm({ ...form, email: e })}
//             otherStyles="mt-7"
//             keyboardType="email-address"
//           />

//           <FormField
//             title="Password"
//             value={form.password}
//             handleChangeText={(e) => setForm({ ...form, password: e })}
//             otherStyles="mt-7"
//           />

//           <CustomButton
//             title="Sign Up"
//             handlePress={submit}
//             containerStyles="mt-7"
//             isLoading={isSubmitting}
//           />

//           <View className="flex justify-center pt-5 flex-row gap-2">
//             <Text className="text-lg text-gray-100 font-pregular">
//               Have an account already?
//             </Text>
//             <Link
//               href="/Signin"
//               className="text-lg font-psemibold text-secondary"
//             >
//               Login
//             </Link>
//           </View>
//         </View>

//            {/* Custom Alert Modal */}
//            <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
//               <Text>{alertMessage}</Text>
//               <Button title="OK" onPress={() => setModalVisible(false)} />
//             </View>
//           </View>
//         </Modal>

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SignUp;

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const SIgnup = () => {
//   return (
//     <View>
//       <Text>SIgnup</Text>
//     </View>
//   )
// }

// export default SIgnup

