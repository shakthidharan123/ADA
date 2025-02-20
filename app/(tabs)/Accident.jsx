import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Linking from "expo-linking";

const Accident = () => {
  const accidentLocation = "https://www.google.com/maps?q=12.9715987,77.5945627"; // Replace dynamically

  const openGoogleMaps = () => {
    Linking.openURL(accidentLocation);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-900 p-5">
      <Text className="text-white text-lg mb-4">New Accident Alert!</Text>
      <TouchableOpacity
        className="bg-red-500 px-5 py-3 rounded-lg"
        onPress={openGoogleMaps}
      >
        <Text className="text-black font-bold">Go to Accident Location</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Accident