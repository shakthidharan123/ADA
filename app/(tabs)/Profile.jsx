import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [image, setImage] = useState(null);
  const handleLogout = async()=>{
    await AsyncStorage.removeItem('token');
    router.replace('/(auth)/navigator');
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-900 p-5">
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={image ? { uri: image } : require("../../assets/icons/profile.png")}
          className="w-24 h-24 rounded-full border-2 border-yellow-500"
        />
      </TouchableOpacity>
      <Text className="text-white text-lg mt-4">John Doe</Text>
      <Text className="text-gray-400">+123 456 7890</Text>
      <Text className="text-gray-400">License: XYZ123456</Text>

      <TouchableOpacity onPress={()=>{handleLogout()}} className="bg-red-500 px-5 py-2 mt-5 rounded-lg">
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
