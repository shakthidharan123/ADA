import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = () => {
    console.log("Added:", { username, password });
    setUsername("");
    setPassword("");
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
