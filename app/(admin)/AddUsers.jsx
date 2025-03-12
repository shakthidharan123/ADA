import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
const AddUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = async() => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      axios.post("http://10.16.49.210:5000/admin/adduser",{username:username,password:password,role:'user'},
        {headers:{Authorization: `Bearer ${token}`}}
      ).then((res)=>{
        console.log(res.data);
        if(res.data.message === "User added successfully"){
          Alert.alert("User added successfully");
        }
        else{
          Alert.alert("Error adding the user");
        }
      }).catch((err)=>{
        console.log(err);
      })
      
    } catch (error) {
      console.log(error);
    }
    // setUsername("");
    // setPassword("");
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-900 p-5">
      <Text className="text-white text-lg mb-4">Add New Driver</Text>
      <TextInput
        className="bg-gray-800 text-white w-full p-3 rounded-lg mb-4"
        placeholder="Username"
        placeholderTextColor="#A1A1AA"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="bg-gray-800 text-white w-full p-3 rounded-lg mb-4"
        placeholder="Password"
        placeholderTextColor="#A1A1AA"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity className="bg-yellow-500 px-5 py-3 rounded-lg" onPress={handleAddUser}>
        <Text className="text-black font-bold">Add Driver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUser;
