import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="navigator" options={{headerShown:false}} />
        <Stack.Screen name="admin-signin" options={{headerShown:false}} />
        <Stack.Screen name="sign-in" options={{headerShown:false}} />
      </Stack>
    </>
  )
}

export default AuthLayout