import React from "react";
import { View, Text, FlatList } from "react-native";

const completedRides = [
  { id: "1", location: "Downtown", time: "10:30 AM" },
  { id: "2", location: "Highway 21", time: "12:15 PM" },
  { id: "3", location: "Main Street", time: "3:45 PM" },
];

const Completed = () => {
  return (
    <View className="flex-1 bg-gray-900 p-5">
      <Text className="text-white text-lg mb-4">Completed Rides</Text>
      <FlatList
        data={completedRides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-gray-800 p-4 my-2 rounded-lg">
            <Text className="text-red-400 font-bold">{item.location}</Text>
            <Text className="text-gray-400">{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Completed;
