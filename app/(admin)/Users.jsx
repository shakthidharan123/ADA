import React from "react";
import { View, Text, FlatList, Switch } from "react-native";

const drivers = [
  { id: "1", name: "John Doe", status: true },
  { id: "2", name: "Jane Smith", status: false },
  { id: "3", name: "Mike Johnson", status: true },
];

const Users = () => {
  return (
    <View className="flex-1 bg-gray-900 p-5">
      <Text className="text-white text-lg mb-4">Drivers List</Text>
      <FlatList
        data={drivers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center bg-gray-800 p-4 my-2 rounded-lg">
            <Text className="text-white font-bold">{item.name}</Text>
            {item.status ? <Text className="text-green-500">Active</Text> : <Text className="text-red-500">Inactive</Text>

            }
          </View>
        )}
      />
    </View>
  );
};

export default Users;
